"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";

const rotating = ["return to.", "love to use.", "tell friends about.", "can't put down."];

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [i, setI] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % rotating.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line">
      {/* Soft accent wash */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]"
        animate={{ x: mouse.x * 50, y: mouse.y * 50 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />

      <Container className="relative">
        {/* Masthead meta row */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-soft"
        >
          <motion.span variants={item}>Issue Nº 01 — The Studio</motion.span>
          <motion.span variants={item} className="hidden sm:block">
            Independent · Est. 2024
          </motion.span>
        </motion.div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.p
              variants={item}
              initial="hidden"
              animate="visible"
              className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
            >
              An indie product studio
            </motion.p>

            <motion.h1
              variants={item}
              initial="hidden"
              animate="visible"
              className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
            >
              We design &amp; build
              <br />
              <span className="italic text-accent">apps</span> and{" "}
              <span className="italic text-accent">websites</span>
              <br />
              people{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    {rotating[i]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-md font-mono text-sm leading-relaxed text-muted"
            >
              dunitelabs is a small studio shipping web and mobile products where
              craft comes first — interfaces with personality, built to last.
            </motion.p>

            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <MagneticButton href="/projects">View the work</MagneticButton>
              <MagneticButton href="/contact" variant="secondary">
                Get in touch
              </MagneticButton>
            </motion.div>
          </div>

          {/* Rotating studio badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden h-44 w-44 shrink-0 lg:block"
            style={{ x: mouse.x * -20, y: mouse.y * -20 }}
          >
            <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_22s_linear_infinite]">
              <defs>
                <path
                  id="badge-circle"
                  d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                />
              </defs>
              <text className="fill-ink font-mono text-[13px] uppercase tracking-[0.32em]">
                <textPath href="#badge-circle" startOffset="0">
                  dunitelabs · indie studio · making apps &amp; sites ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl italic text-accent">dl</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
