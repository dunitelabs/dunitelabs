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
    tagline: "Music that tastes like summer.",
    description: "Lightweight Android music player built for offline listening. No ads, no clutter — just your library, playlists, and buttery playback.",
    type: "Android App",
    platform: "ANDROID",
    accent: "#D2FF4D",
    bg: "#101010",
    color: "#D2FF4D",
    icon: "/guava/guava-music-logo-coompress.png",
    screenshots: ["/guava/1.png", "/guava/2.png", "/guava/3.png"],
    links: [
      { label: "Get it on Google Play", href: "#", kind: "playstore" },
      { label: "View on Play Store", href: "#", kind: "playstore" },
    ],
    stats: [
      { label: "Downloads", value: "10K+" },
      { label: "Rating", value: "4.6★" },
      { label: "Size", value: "12 MB" },
    ],
    features: ["Offline playback", "Folder browser", "EQ + Sleep timer", "No ads, no tracking"],
  },
  {
    slug: "speedmaths-pro",
    name: "Speedmaths Pro",
    short: "SPEED",
    tagline: "Calculate faster than you think.",
    description: "Drill-based maths training for competitive exams. Timed quizzes, mental tricks, and streaks that make practice addictive.",
    type: "Android App",
    platform: "ANDROID",
    accent: "#6AE4FF",
    bg: "#0A0F1A",
    color: "#6AE4FF",
    icon: "/speedmaths-pro/speedmathspro_logo.png",
    screenshots: ["/speedmaths-pro/1.png", "/speedmaths-pro/2.png", "/speedmaths-pro/3.png", "/speedmaths-pro/4.png", "/speedmaths-pro/5.png", "/speedmaths-pro/6.png"],
    links: [
      { label: "Get it on Google Play", href: "#", kind: "playstore" },
    ],
    stats: [
      { label: "Questions", value: "5K+" },
      { label: "Users", value: "8K+" },
      { label: "Streak", value: "Daily" },
    ],
    features: ["Vedic tricks", "Timed challenges", "Leaderboards", "Exam presets: SSC / Bank / Railway"],
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
      { label: "Listings", value: "2K+" },
      { label: "Updated", value: "Daily" },
      { label: "States", value: "All India" },
    ],
    features: ["Instant filters", "Telegram alerts", "Admit card / Result tracker", "Zero spam"],
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
