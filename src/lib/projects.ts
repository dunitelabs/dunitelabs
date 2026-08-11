import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

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

export type Project = ProjectMeta & {
  content: string;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  "almost-done": "Almost done",
  "in-development": "In development",
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");

function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

function parseProject(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    category: data.category ?? "Project",
    year: data.year ?? "",
    client: data.client ?? "",
    status: (data.status as ProjectStatus) ?? "in-development",
    tags: data.tags ?? [],
    url: data.url,
    repoUrl: data.repoUrl,
    featured: data.featured ?? false,
    content,
  };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => parseProject(slug))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => (a.year < b.year ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  const featured = getAllProjects().filter((p) => p.featured);
  return featured.length > 0 ? featured : getAllProjects().slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | null {
  return parseProject(slug);
}

export async function renderMarkdown(content: string): Promise<string> {
  marked.setOptions({ gfm: true, breaks: false });
  return await marked.parse(content);
}
