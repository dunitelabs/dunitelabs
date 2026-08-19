"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";

const rotating = ["love to use.", "can't stop opening.", "tell friends about.", "keep coming back to."];

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % rotating.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative border-b-2 border-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-sun/30" />
      <Container className="relative">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={item}
            className="marker"
          >
            § Independent app &amp; web studio
          </motion.p>

          <motion.h1
            variants={item}
            className="mx-auto mt-6 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl"
          >
            We build <span className="mark">fun apps</span> &amp; websites
            people{" "}
            <span className="relative inline-block italic text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {rotating[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            dunitelabs is a small studio making fast, playful software — the kind
            of apps and sites that put a smile on your face and just work.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MagneticButton href="/projects">See our work</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
