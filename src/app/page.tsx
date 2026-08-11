import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { CodeTerminal } from "@/components/sections/CodeTerminal";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { getFeaturedProjects } from "@/lib/projects";

const services = [
  {
    title: "Web apps",
    body: "Dashboards, internal tools, and customer-facing platforms that stay fast as they grow.",
    icon: (
      <path
        d="M3 5h18v10H3zM3 19h18M9 15v4M15 15v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Mobile apps",
    body: "Native and cross-platform apps in React Native, Flutter, and Kotlin — built around the moments your users reach for their phone.",
    icon: (
      <path
        d="M7 2h10v20H7zM11 18h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Websites",
    body: "Marketing sites and landing pages engineered to load instantly and convert.",
    icon: (
      <path
        d="M3 12h18M3 12l5-5M3 12l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      <TechMarquee />

      {/* Services */}
      <section className="border-b border-white/10 py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet-400">What we do</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                From a first landing page to a full platform
              </h2>
              <p className="mt-3 text-zinc-400">
                We build the thing you need — and make sure it&apos;s a pleasure
                to use.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-violet-400/40 hover:bg-white/[0.04]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-violet-500/10 text-violet-300 transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-zinc-50">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Engineering showcase */}
      <section className="border-b border-white/10 py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-sm font-medium text-violet-400">
                  How we code
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  Engineering you can read
                </h2>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  We treat code like a product, not a byproduct. Strictly typed,
                  well-named, and commented where it earns its keep. The kind of
                  codebase your next engineer can open and feel at home in.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "TypeScript end to end, no anys hiding in corners",
                    "Component-driven design systems",
                    "Performance budgets kept, not just promised",
                    "Accessible by default, not as a retrofit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <CodeTerminal />
          </div>
        </Container>
      </section>

      <StatsCounter />

      {/* Featured projects */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-violet-400">
                  Selected work
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  Products we&apos;ve shipped
                </h2>
                <p className="mt-3 text-zinc-400">
                  A few of the things we&apos;re building right now.
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm font-medium text-violet-400 hover:text-violet-300 sm:inline"
              >
                All projects →
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              All projects →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-zinc-950 to-zinc-950 px-8 py-16 text-center sm:px-16">
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  Have something to build?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-zinc-400">
                  Tell us what you&apos;re trying to make. We&apos;ll help you
                  shape it into something usable.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-400"
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
