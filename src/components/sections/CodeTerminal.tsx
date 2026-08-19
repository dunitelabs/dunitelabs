"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { text: "// usability-first, shipped with care", color: "text-muted-soft" },
  { text: "import { build } from '@dunitelabs/core'", color: "text-accent" },
  { text: "", color: "" },
  { text: "export const product = build({", color: "text-ink" },
  { text: "  fast: true,", color: "text-emerald-600" },
  { text: "  accessible: 'WCAG-AA',", color: "text-emerald-600" },
  { text: "  stack: ['Next.js', 'React Native'],", color: "text-amber-600" },
  { text: "  goal: 'interfaces people love to use',", color: "text-fuchsia-600" },
  { text: "})", color: "text-ink" },
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
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.06)]"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-paper-alt px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-muted-soft">
          dunitelabs/build.ts
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto bg-white p-5 font-mono text-[13px] leading-relaxed">
        <code>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={line.color}>
              {line.text || "\u00A0"}
            </div>
          ))}
          {visibleLines < codeLines.length && (
            <div className={codeLines[visibleLines].color}>
              {typed}
              <span className="ml-0.5 inline-block h-3.5 w-2 animate-pulse bg-accent align-middle" />
            </div>
          )}
        </code>
      </pre>
    </motion.div>
  );
}
