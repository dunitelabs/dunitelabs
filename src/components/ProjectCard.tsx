import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { STATUS_LABELS } from "@/lib/projects";

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

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-label="Open"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_2px_6px_rgba(22,19,15,0.05),0_18px_40px_rgba(22,19,15,0.1)]"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="rounded-full border border-line bg-paper px-2.5 py-0.5 font-mono uppercase tracking-widest text-muted">
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
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-paper px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink">
        View project
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
      </span>
    </Link>
  );
}
