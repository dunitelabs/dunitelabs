"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-violet-500 text-zinc-950 hover:bg-violet-400"
      : "border border-white/15 text-zinc-100 hover:border-white/30 hover:bg-white/5";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
