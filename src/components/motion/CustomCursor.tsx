"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

export function CustomCursor() {
  const [enabled] = useState(hasFinePointer);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      const interactive = target?.closest("a, button, [data-cursor]");
      setHovering(!!interactive);
      setLabel(labelled?.dataset.cursorLabel ?? "");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ink/60 text-[9px] font-medium uppercase tracking-widest text-ink"
        animate={{
          width: hovering ? 64 : 34,
          height: hovering ? 64 : 34,
          opacity: hovering ? 1 : 0.7,
          backgroundColor: hovering ? "rgba(255,77,0,0.08)" : "rgba(255,77,0,0)",
          borderColor: hovering ? "rgba(255,77,0,0.6)" : "rgba(22,19,15,0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        {hovering ? <span className="text-accent">{label || "VIEW"}</span> : null}
      </motion.div>
    </>
  );
}
