"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 30 });
  const springY = useSpring(y, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [data-cursor='hover']")
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-violet-400"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-violet-400/50"
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: hovering ? 0.6 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
