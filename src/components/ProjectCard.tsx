import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-violet-400/40 hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-zinc-400">
          {project.category}
        </span>
        <span>{project.year}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-zinc-50 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400">
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
