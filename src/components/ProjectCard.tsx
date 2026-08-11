import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { STATUS_LABELS } from "@/lib/projects";

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

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.04]"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:from-violet-500/10 group-hover:to-transparent group-hover:opacity-100" />

      <div className="relative flex items-center justify-between text-xs">
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
      </div>

      <h3 className="relative mt-5 text-lg font-semibold text-zinc-50 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
        {project.summary}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400">
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
