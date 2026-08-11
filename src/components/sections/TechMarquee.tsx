"use client";

import { motion } from "motion/react";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Expo",
  "Vercel",
  "Cloudflare",
  "Redis",
  "tRPC",
  "Zod",
  "Framer Motion",
  "Sanity",
];

export function TechMarquee() {
  const repeated = [...tech, ...tech];

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-400"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
