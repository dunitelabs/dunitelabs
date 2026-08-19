import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export function AppShowcase() {
  const projects = getFeaturedProjects();

  return (
    <section className="border-b-2 border-ink py-28">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between border-b-2 border-ink pb-5">
            <div>
              <p className="marker">§ Our work</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Apps &amp; websites we&apos;ve shipped
              </h2>
            </div>
            <Link
              href="/projects"
              data-cursor-label="All"
              className="hidden font-mono text-xs uppercase tracking-widest text-muted-soft transition-colors hover:text-ink sm:inline"
            >
              All work →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
