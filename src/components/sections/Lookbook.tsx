import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getFeaturedProjects } from "@/lib/projects";

const covers = [
  "bg-ink text-paper",
  "bg-accent text-paper",
  "bg-paper-alt text-ink border border-line",
  "bg-ink/90 text-paper",
];

export function Lookbook() {
  const projects = getFeaturedProjects();

  return (
    <section className="border-b border-line py-24">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                The Collection
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                What we&apos;ve shipped
              </h2>
            </div>
            <Link
              href="/projects"
              data-cursor-label="All"
              className="hidden font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink sm:inline"
            >
              All work →
            </Link>
          </div>
        </Reveal>
      </Container>

      <div
        data-cursor
        data-cursor-label="Drag"
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            data-cursor-label="Open"
            className="group relative w-[78vw] shrink-0 snap-start sm:w-[420px]"
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden rounded-3xl border border-line ${covers[idx % covers.length]}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-white/5" />
              <span className="absolute left-6 top-6 font-mono text-xs uppercase tracking-widest opacity-70">
                Nº {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest opacity-70">
                {project.category}
              </span>
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="font-display text-4xl font-semibold leading-none tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-[28ch] font-mono text-xs leading-relaxed opacity-80">
                  {project.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  );
}
