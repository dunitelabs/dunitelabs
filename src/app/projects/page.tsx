import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { getAllProjects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Apps and websites designed and built by dunitelabs, organized by what we shipped.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-24">
      <Reveal>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-zinc-400">
          A selection of the products we&apos;ve designed and shipped. Each one
          started with a question about the people using it.
        </p>
      </div>
      </Reveal>
      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Container>
  );
}
