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
    <section className="border-b-2 border-ink bg-paper py-20">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="marker">By the numbers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Standards we hold ourselves to
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="brutal h-full rounded-2xl bg-paper p-6">
                <div className="flex items-baseline gap-0.5 font-display text-5xl font-semibold tracking-tight text-ink">
                  <AnimatedCounter value={s.value} format={s.format} />
                  <span className="text-accent">{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-muted-soft">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
