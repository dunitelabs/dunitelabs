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
  live: "border-emerald-300 text-emerald-700",
  "almost-done": "border-amber-300 text-amber-700",
  "in-development": "border-accent text-accent",
};

const statusDot: Record<ProjectMeta["status"], string> = {
  live: "bg-emerald-500",
  "almost-done": "bg-amber-500",
  "in-development": "bg-accent",
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
        data-cursor-label="Back"
        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
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

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-soft">
        <span className="rounded-full border border-line bg-paper-alt px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest text-muted">
          {project.category}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest ${statusStyles[project.status]}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
          />
          {STATUS_LABELS[project.status]}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest">{project.year}</span>
        {project.client ? <span>· {project.client}</span> : null}
      </div>

      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {project.summary}
      </p>

      {project.tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-paper-alt px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted"
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
              data-cursor-label="Open"
              className={
                link.variant === "primary"
                  ? "inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-strong"
                  : "inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
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
