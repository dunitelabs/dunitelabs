import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Hero } from "@/components/sections/Hero";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { StatsCounter } from "@/components/sections/StatsCounter";

const principles = [
  {
    no: "01",
    title: "Usability first",
    body: "Every decision is weighed against one question: will the person using this understand it without thinking?",
  },
  {
    no: "02",
    title: "Fast is a feature",
    body: "Performance is part of usability. A slow interface is a broken one, so speed is a design requirement.",
  },
  {
    no: "03",
    title: "Own the details",
    body: "The empty states, the error messages, the transitions — the quiet parts are where trust is built.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <AppShowcase />

      {/* Studio — quiet three-column principles */}
      <section className="border-b-2 border-ink py-28">
        <Container>
          <Reveal>
            <p className="marker">§ 02 — How we work</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              A small studio with strong opinions about craft.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {principles.map((p) => (
              <Reveal key={p.no}>
                <div className="brutal h-full rounded-2xl bg-paper p-8">
                  <span className="font-mono text-sm text-accent">{p.no}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <StatsCounter />

      {/* CTA */}
      <section className="py-28">
        <Container>
          <Reveal>
            <div className="brutal relative rounded-3xl bg-paper px-8 py-20 text-center sm:px-16">
              <p className="marker">§ 03 — Say hello</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-6xl">
                Have something to build?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Tell us what you&apos;re trying to make. We&apos;ll help you shape
                it into something worth using.
              </p>
              <Link
                href="/contact"
                data-cursor-label="Start"
                className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-accent-strong"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
