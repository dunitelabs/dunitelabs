// Project registry — single source of truth for project metadata.
//
// The projects grid (src/app/projects/page.tsx) and ProjectCard read from
// this list. Each project's detail page is a hand-coded TSX page living at
// src/app/projects/[slug]/<slug>/page.tsx — add fields here as you need them.

export type ProjectStatus = "live" | "almost-done" | "in-development";

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  client: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  "almost-done": "Almost done",
  "in-development": "In development",
};

export const projects: ProjectMeta[] = [
  {
    slug: "speedmaths-pro",
    title: "SpeedMaths Pro",
    summary:
      "A speed-math practice app that turns mental calculation into a game you keep coming back to.",
    category: "Mobile App",
    year: "2025",
    client: "",
    status: "almost-done",
    tags: ["React Native", "Flutter", "TypeScript", "Animation", "Gamification"],
    featured: true,
  },
  {
    slug: "guava-music",
    title: "Guava Music",
    summary:
      "A music streaming experience that puts discovery and listening flow ahead of everything else.",
    category: "Mobile App",
    year: "2025",
    client: "",
    status: "almost-done",
    tags: ["React Native", "TypeScript", "Audio", "Design System"],
    featured: true,
  },
  {
    slug: "govtjobsnotice",
    title: "Govt Jobs Notice",
    summary:
      "A fast, no-nonsense portal that surfaces government job openings the moment they're posted.",
    category: "Web App",
    year: "2024",
    client: "",
    status: "live",
    url: "https://www.govtjobsnotice.com/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Realtime", "SEO"],
    featured: true,
  },
  {
    slug: "upkeepr",
    title: "Upkeepr",
    summary:
      "A maintenance and upkeep tracker that helps households and teams stay ahead of what breaks.",
    category: "Web App",
    year: "2025",
    client: "",
    status: "in-development",
    tags: ["Next.js", "TypeScript", "Tailwind", "Scheduling", "Offline"],
    featured: false,
  },
];

export function getAllProjects(): ProjectMeta[] {
  return [...projects].sort((a, b) => (a.year < b.year ? 1 : -1));
}

export function getFeaturedProjects(): ProjectMeta[] {
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

export function getProjectBySlug(slug: string): ProjectMeta | null {
  return projects.find((p) => p.slug === slug) ?? null;
}
