import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { STATUS_LABELS } from "@/lib/projects";

// Shared header for every project detail page. Renders the back link,
// status pill, title, summary, tags, and primary external link.
// Project-specific sub-links (privacy, data deletion, etc.) are passed in
// via `extraLinks` so each project page controls what it surfaces.

export type ProjectHeaderLink = {
  href: string;
  label: string;
  variant?: "primary" | "muted";
};

const statusStyles: Record<ProjectMeta["status"], string> = {
  live: "border-emerald-400/30 text-emerald-300",
  "almost-done": "border-amber-400/30 text-amber-300",
  "in-development": "border-violet-400/30 text-violet-300",
};

const statusDot: Record<ProjectMeta["status"], string> = {
  live: "bg-emerald-400",
  "almost-done": "bg-amber-400",
  "in-development": "bg-violet-400",
};

const arrowIcon = (
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
);

export function ProjectHeader({
  project,
  extraLinks = [],
}: {
  project: ProjectMeta;
  extraLinks?: ProjectHeaderLink[];
}) {
  return (
    <header className="mt-8 max-w-3xl">
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

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
        <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-zinc-400">
          {project.category}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 ${statusStyles[project.status]}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
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

      {extraLinks.length > 0 ? (
        <div className="mt-6 flex flex-col items-start gap-2">
          {extraLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.variant === "primary"
                  ? "inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300"
                  : "inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200"
              }
            >
              {link.label}
              {arrowIcon}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
