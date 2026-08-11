import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

const services = [
  {
    title: "Web apps",
    body: "Dashboards, internal tools, and customer-facing platforms that stay fast as they grow.",
  },
  {
    title: "Mobile apps",
    body: "Cross-platform apps built around the moments your users actually reach for their phone.",
  },
  {
    title: "Websites",
    body: "Marketing sites and landing pages engineered to load instantly and convert.",
  },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Usability-first product studio
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl">
              We build apps and websites people actually want to use.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              dunitelabs is a small studio that designs and ships web and mobile
              products where usability is the starting point, not an afterthought.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-400"
              >
                View our work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-b border-white/10 py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              What we make
            </h2>
            <p className="mt-3 text-zinc-400">
              From a first landing page to a full platform, we build the thing you
              need — and make sure it&apos;s a pleasure to use.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-base font-semibold text-zinc-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                Featured work
              </h2>
              <p className="mt-3 text-zinc-400">
                A few products we&apos;ve shipped recently.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-violet-400 hover:text-violet-300 sm:inline"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              All projects →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 text-center sm:px-16">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Have something to build?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-400">
              Tell us what you&apos;re trying to make. We&apos;ll help you shape it
              into something usable.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-400"
            >
              Start a project
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
