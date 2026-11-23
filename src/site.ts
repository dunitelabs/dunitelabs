export const site = {
  name: "Dunite Labs",
  legalName: "Dunite Labs",
  /** Every spelling people actually type when looking for us. */
  alternateNames: ["Dunite Labs", "dunitelabs", "Dunite", "Dunite Lab", "dunite labs india"],
  url: "https://dunitelabs.com",
  tagline: "We build useful things.",
  description:
    "Dunite Labs is an independent app studio from India. We build Guava Music and Speedmaths Pro — offline-first, ad-free apps and tools that solve real problems.",
  email: "dunitelabs.support@gmail.com",
  foundingDate: "2024",
  social: {
    github: "https://github.com/dunitelabs",
    x: "https://x.com/dunitelabs",
    linkedin: "https://www.linkedin.com/company/dunitelabs",
    youtube: "https://www.youtube.com/@dunitelabs",
    instagram: "https://www.instagram.com/dunitelabs",
  },
  knowsAbout: [
    "Android app development",
    "offline-first mobile apps",
    "music players",
    "mental maths training apps",
    "web development",
    "Kotlin and Jetpack Compose",
  ],
  /** Site-wide keyword fallback. Pages override with their own list. */
  keywords: [
    "Dunite Labs",
    "dunitelabs",
    "Dunite",
    "dunitelabs.com",
    "Dunite Labs apps",
    "Dunite Labs India",
    "independent app studio India",
    "Android apps India",
    "Guava Music",
    "Guava Music player",
    "Guava music app",
    "Speedmaths Pro",
    "Speedmaths Pro app",
    "offline music player Android",
    "mental maths practice app",
  ],
};

export const absoluteUrl = (path = "/") => {
  const base = site.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};