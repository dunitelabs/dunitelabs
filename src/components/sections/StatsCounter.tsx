"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

const stats = [
  {
    value: 4,
    format: (n: number) => `${Math.round(n)}`,
    suffix: "",
    label: "Products shipping",
    sub: "live, almost-done, and in development",
  },
  {
    value: 100,
    format: (n: number) => `${Math.round(n)}`,
    suffix: "%",
    label: "TypeScript coverage",
    sub: "end to end, on every project",
  },
  {
    value: 1,
    format: (n: number) => (n < 1 ? "0" : `<${Math.ceil(n)}`),
    suffix: "s",
    label: "Target load time",
    sub: "performance is a feature, not a bonus",
  },
  {
    value: 99,
    format: (n: number) => `${Math.round(n)}`,
    suffix: "%",
    label: "Accessibility target",
    sub: "WCAG AA, verified with real assistive tech",
  },
];

export function StatsCounter() {
  return (
    <section className="border-b border-white/10 py-20">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-violet-400">
              By the numbers
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Standards we hold ourselves to
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="bg-zinc-950 p-6">
              <div className="flex items-baseline gap-0.5 text-4xl font-semibold tracking-tight text-zinc-50">
                <AnimatedCounter value={s.value} format={s.format} />
                <span className="text-violet-400">{s.suffix}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-200">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
