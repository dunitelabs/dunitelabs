"use client";

import { motion } from "motion/react";

const tech = [
  "Next.js",
  "React",
  "React Native",
  "Flutter",
  "Kotlin",
  "Swift",
  "Android",
  "iOS",
  "Expo",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "tRPC",
  "Zod",
  "Framer Motion",
  "Sanity",
  "Vercel",
  "Cloudflare",
  "Docker",
];

export function TechMarquee() {
  const repeated = [...tech, ...tech];

  return (
    <div className="relative overflow-hidden border-y border-line bg-paper py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />

      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-paper-alt px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
