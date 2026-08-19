import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Lookbook } from "@/components/sections/Lookbook";
import { StatsCounter } from "@/components/sections/StatsCounter";

const services = [
  {
    no: "01",
    title: "Web apps",
    body: "Dashboards, internal tools, and customer platforms that stay fast as they grow.",
  },
  {
    no: "02",
    title: "Mobile apps",
    body: "Native and cross-platform apps in React Native, Flutter, and Kotlin — built around real moments.",
  },
  {
    no: "03",
    title: "Websites",
    body: "Marketing sites and landing pages engineered to load instantly and convert.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <TechMarquee />

      {/* Services — editorial index */}
      <section className="border-b border-line py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              Three ways we build
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s) => (
              <StaggerItem key={s.no}>
                <div className="group grid items-baseline gap-4 py-8 transition-colors hover:bg-paper-alt/40 sm:grid-cols-[120px_1fr_1.2fr]">
                  <span className="font-mono text-sm text-accent">{s.no}</span>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* The Collection — lookbook */}
      <Lookbook />

      {/* Manifesto */}
      <section className="border-y border-line bg-ink py-28 text-paper">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Manifesto
            </p>
            <p className="mt-8 max-w-4xl font-display text-3xl font-medium leading-[1.2] tracking-tight sm:text-5xl">
              We treat software like a craft, not a commodity. Small team, sharp
              opinions, and an unreasonable amount of care for the details most
              people never notice —{" "}
              <span className="italic text-accent">until they&apos;re missing.</span>
            </p>
          </Reveal>
        </Container>
      </section>

      <StatsCounter />

      {/* CTA */}
      <section className="py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-paper-alt px-8 py-16 text-center sm:px-16">
              <div className="relative">
                <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                  Have something to build?
                </h2>
                <p className="mx-auto mt-4 max-w-md font-mono text-sm leading-relaxed text-muted">
                  Tell us what you&apos;re trying to make. We&apos;ll help you
                  shape it into something worth using.
                </p>
                <Link
                  href="/contact"
                  data-cursor-label="Start"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-accent-strong"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
