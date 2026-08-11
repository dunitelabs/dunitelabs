"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { text: "// usability-first, shipped with care", color: "text-zinc-500" },
  { text: "import { build } from '@dunitelabs/core'", color: "text-violet-300" },
  { text: "", color: "" },
  { text: "export const product = build({", color: "text-zinc-200" },
  { text: "  fast: true,", color: "text-emerald-300" },
  { text: "  accessible: 'WCAG-AA',", color: "text-emerald-300" },
  { text: "  stack: ['Next.js', 'React Native'],", color: "text-amber-300" },
  { text: "  goal: 'interfaces people love to use',", color: "text-fuchsia-300" },
  { text: "})", color: "text-zinc-200" },
];

export function CodeTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    if (visibleLines >= codeLines.length) {
      const reset = setTimeout(() => {
        setVisibleLines(0);
        setTyped("");
      }, 3200);
      return () => clearTimeout(reset);
    }

    const currentLine = codeLines[visibleLines];
    if (typed.length < currentLine.text.length) {
      const t = setTimeout(() => {
        setTyped(currentLine.text.slice(0, typed.length + 1));
      }, 22);
      return () => clearTimeout(t);
    }

    const next = setTimeout(() => {
      setVisibleLines((n) => n + 1);
      setTyped("");
    }, 180);
    return () => clearTimeout(next);
  }, [inView, visibleLines, typed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-violet-950/30"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">
          dunitelabs/build.ts
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={line.color}>
              {line.text || "\u00A0"}
            </div>
          ))}
          {visibleLines < codeLines.length && (
            <div className={codeLines[visibleLines].color}>
              {typed}
              <span className="ml-0.5 inline-block h-3.5 w-2 animate-pulse bg-violet-400 align-middle" />
            </div>
          )}
        </code>
      </pre>
    </motion.div>
  );
}
