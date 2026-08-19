import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { STATUS_LABELS } from "@/lib/projects";
import { getAppIcon } from "@/lib/appIcons";

const statusStyles: Record<ProjectMeta["status"], string> = {
  live: "border-emerald-300 text-emerald-700",
  "almost-done": "border-amber-300 text-amber-700",
  "in-development": "border-accent text-accent",
};

export function ProjectCard({ project }: { project: ProjectMeta }) {
  const icon = getAppIcon(project.slug);
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-label="Open"
      className="brutal group flex h-full flex-col rounded-2xl bg-paper p-6 transition-colors hover:bg-paper-alt"
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 border-ink text-3xl ${icon.color}`}
        >
          {icon.emoji}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest ${statusStyles[project.status]}`}
        >
          {STATUS_LABELS[project.status]}
        </span>
      </div>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-soft">
        {project.category}
      </p>
      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-ink/20 bg-paper-alt px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink">
        Know more
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
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
