"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";

const rotatingWords = ["actually", "love to", "want to", "can't stop to"];

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      setMouse({ x: cx, y: cy });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-white/10">
      {/* Mouse-parallax gradient orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        animate={{
          x: mouse.x * 60,
          y: mouse.y * 40,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[18%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[100px]"
        animate={{
          x: mouse.x * -80,
          y: mouse.y * -50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 22 }}
      />
      <motion.div
        className="pointer-events-none absolute left-[12%] bottom-[12%] h-80 w-80 rounded-full bg-indigo-500/15 blur-[110px]"
        animate={{
          x: mouse.x * 70,
          y: mouse.y * -35,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <Container className="relative">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              Usability-first product studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl"
          >
            We build apps and websites people{" "}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            use.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            dunitelabs is a small studio that designs and ships web and mobile
            products where usability is the starting point, not an afterthought.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="/projects">View our work</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-1.5 w-1 rounded-full bg-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
