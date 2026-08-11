"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  value,
  format,
  className = "",
}: {
  value: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsubscribe = spring.on("change", (latest) => {
      el.textContent = format ? format(latest) : Math.round(latest).toString();
    });
    return () => unsubscribe();
  }, [spring, format]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      0
    </motion.span>
  );
}
