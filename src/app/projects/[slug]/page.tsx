import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import {
  getAllProjects,
  getProjectBySlug,
  renderMarkdown,
  STATUS_LABELS,
} from "@/lib/projects";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const html = await renderMarkdown(project.content);

  return (
    <Container className="py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200"
      >
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 3.5L5.5 8L10 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-zinc-400">
            {project.category}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 ${
              project.status === "live"
                ? "border-emerald-400/30 text-emerald-300"
                : project.status === "almost-done"
                ? "border-amber-400/30 text-amber-300"
                : "border-violet-400/30 text-violet-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "live"
                  ? "bg-emerald-400"
                  : project.status === "almost-done"
                  ? "bg-amber-400"
                  : "bg-violet-400"
              }`}
            />
            {STATUS_LABELS[project.status]}
          </span>
          <span>{project.year}</span>
          {project.client ? <span>· {project.client}</span> : null}
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          {project.summary}
        </p>
        {project.tags.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            Visit live project
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 3.5L10.5 8L6 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : null}
        {slug === "speedmaths-pro" ? (
          <Link
            href="/speedmathspro/privacy-policy"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200"
          >
            Privacy Policy
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 3.5L10.5 8L6 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : null}
      </header>

      <article
        className="prose mt-12 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  );
}
