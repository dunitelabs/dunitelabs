export const site = {
  name: "Dunite Labs",
  url: "https://dunitelabs.pages.dev",
  // Once the custom domain is live, switch url above to:
  // url: "https://dunitelabs.com",
  tagline: "We build useful things.",
  description:
    "Dunite Labs builds apps, websites and tools that solve real problems — Guava Music, Speedmaths Pro, GovtJobsNotice. Est. 2024, India.",
  email: "support.dunitelabs@gmail.com",
  social: {
    github: "https://github.com/dunitelabs",
    x: "https://x.com/dunitelabs",
    linkedin: "https://www.linkedin.com/company/dunitelabs",
    youtube: "https://www.youtube.com/@dunitelabs",
    instagram: "https://www.instagram.com/dunitelabs",
  },
};

export const absoluteUrl = (path = "/") => {
  const base = site.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};
