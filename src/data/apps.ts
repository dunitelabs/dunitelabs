export type App = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  type: string;
  platform: string;
  accent: string;
  bg: string;
  icon: string;
  screenshots: string[];
  links: { label: string; href: string; kind: "playstore" | "website" | "github" }[];
  stats: { label: string; value: string }[];
  features: string[];
  color: string;
};

export const apps: App[] = [
  {
    slug: "guava-music",
    name: "Guava Music",
    short: "GUAVA",
    tagline: "Bring your music. Guava turns it into a streaming-grade experience — lyrics, recommendations, and your library, synced across every device.",
    description: "Lightweight Android music player built for offline listening. No ads, no clutter — just your library, playlists, and buttery playback.",
    type: "Android App",
    platform: "ANDROID",
    accent: "#D2FF4D",
    bg: "#101010",
    color: "#D2FF4D",
    icon: "/guava/guava-music-logo-coompress.png",
    screenshots: ["/guava/1.png", "/guava/2.png", "/guava/3.png"],
    links: [],
    stats: [
      { label: "Phase", value: "v1 • Beta" },
      { label: "Size", value: "~12 MB" },
      { label: "Mode", value: "Offline" },
    ],
    features: ["Offline playback", "Folder browser", "EQ + Sleep timer", "No ads, no tracking"],
  },
  {
    slug: "speedmaths-pro",
    name: "Speedmaths Pro",
    short: "SPEED",
    tagline: "Daily ranked quizzes, custom drills, and a mastery game — train your speedmaths and climb the leaderboard.",
    description: "Speedmaths Pro turns mental maths into a daily ranked challenge. Practice custom operation mixes, learn tips & tricks, track heatmaps and badges, and battle your way to mastery with full attempt history.",
    type: "Android App",
    platform: "ANDROID",
    accent: "#6AE4FF",
    bg: "#0A0F1A",
    color: "#6AE4FF",
    icon: "/speedmaths-pro/speedmathspro_logo.png",
    screenshots: ["/speedmaths-pro/1.png", "/speedmaths-pro/2.png", "/speedmaths-pro/3.png", "/speedmaths-pro/4.png", "/speedmaths-pro/5.png", "/speedmaths-pro/6.png"],
    links: [],
    stats: [
      { label: "Phase", value: "Early Access" },
      { label: "Platform", value: "Android" },
      { label: "Focus", value: "Daily Drills" },
    ],
    features: ["Daily ranked quiz + leaderboard", "Custom practice: mix operations & difficulty", "Mastery game", "Tips & tricks with practice", "Profile heatmaps + badges", "Full attempt history"],
  },
  {
    slug: "govtjobsnotice",
    name: "Govt Jobs Notice",
    short: "GJNOTICE",
    tagline: "Sarkari naukri, without the noise.",
    description: "Clean, fast website that aggregates government job notices. No popups, no fake updates — just verified listings with filters that work.",
    type: "Website",
    platform: "WEB",
    accent: "#FF6B2C",
    bg: "#14110F",
    color: "#FF6B2C",
    icon: "/govtjobsnotice/logo.png",
    screenshots: ["/govtjobsnotice/1.png", "/govtjobsnotice/2.png", "/govtjobsnotice/3.png", "/govtjobsnotice/4.png"],
    links: [
      { label: "Visit Website", href: "https://www.govtjobsnotice.com/", kind: "website" },
    ],
    stats: [
      { label: "Status", value: "Live" },
      { label: "Coverage", value: "Pan-India" },
      { label: "Updates", value: "Daily" },
    ],
    features: ["Instant filters", "Telegram alerts", "Admit card / Result tracker", "Zero spam"],
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
