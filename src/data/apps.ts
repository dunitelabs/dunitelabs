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
  /** 128px WebP for cards, strips and next-project links */
  iconSmall: string;
  /** 256px WebP for the app-page hero */
  iconLarge: string;
  screenshots: string[];
  /** Same order as `screenshots`, WebP-capped at 1600px wide */
  shots: string[];
  links: { label: string; href: string; kind: "playstore" | "windows" | "website" | "github" }[];
  stats: { label: string; value: string }[];
  /** Short bullets — used on the home cards */
  features: string[];
  /** Feature-by-feature showcase on the app page (image + copy, alternating) */
  highlights: Highlight[];
  color: string;
  /** Social preview card (1200×630) */
  ogImage: string;
  /** Page-level keyword list */
  keywords: string[];
  /** Names people search for that are not the display name */
  alternateNames: string[];
  /** Whether /app/<slug>/privacy/ and /delete-data/ are published */
  hasLegal: boolean;
};

export type Highlight = {
  /** Headline for the feature row */
  title: string;
  /** One short supporting paragraph */
  body: string;
  /** Quick sub-points shown as chips */
  points: string[];
  /** Screenshot that illustrates the feature (matches an entry in `shots`) */
  image: string;
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
    iconSmall: "/guava/icon-128.webp",
    iconLarge: "/guava/icon-256.webp",
    screenshots: ["/guava/1.png", "/guava/2.png", "/guava/3.png"],
    shots: ["/guava/1.webp", "/guava/2.webp", "/guava/3.webp"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.guava.music", kind: "playstore" },
      { label: "Windows", href: "https://play.google.com/store/apps/details?id=com.guava.music", kind: "windows" },
    ],
    stats: [
      { label: "Phase", value: "v1 • Beta" },
      { label: "Size", value: "~12 MB" },
      { label: "Mode", value: "Offline" },
    ],
    features: ["Offline playback", "Folder browser", "EQ + Sleep timer", "No ads, no tracking"],
    highlights: [
      {
        title: "Playback that stays out of the way",
        body: "Album art, one-thumb controls and artist info on a single screen. Tap the artwork for lyrics — everything else moves aside.",
        points: ["Tap-for-lyrics", "Shuffle & repeat", "Queue, EQ and share"],
        image: "/guava/1.webp",
      },
      {
        title: "Your whole library, one tap away",
        body: "Every track on your device, indexed and searchable — no account, no upload. Shuffle the lot or jump straight to a song.",
        points: ["Offline folder browser", "Shuffle all", "Persistent mini-player"],
        image: "/guava/2.webp",
      },
      {
        title: "A home that knows your taste",
        body: "Quick picks and “Jump back in” surface the songs you actually play, drawn from your own listening — never a server-side feed.",
        points: ["Quick picks", "Jump back in", "No ads, no tracking"],
        image: "/guava/3.webp",
      },
    ],
    ogImage: "/og-guava-music.png",
    alternateNames: ["Guava", "Guava music app", "Guava player", "Guava-music"],
    hasLegal: true,
    keywords: [
      "Guava Music",
      "Guava music player",
      "Guava music app",
      "Guava Android music player",
      "offline music player Android",
      "local music player Android",
      "music player with cloud locker",
      "lyrics music player Android",
      "Dunite Labs Guava Music",
      "dunitelabs Guava",
    ],
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
    iconSmall: "/speedmaths-pro/icon-128.webp",
    iconLarge: "/speedmaths-pro/icon-256.webp",
    screenshots: ["/speedmaths-pro/1.png", "/speedmaths-pro/2.png", "/speedmaths-pro/3.png", "/speedmaths-pro/4.png", "/speedmaths-pro/5.png", "/speedmaths-pro/6.png"],
    shots: ["/speedmaths-pro/1.webp", "/speedmaths-pro/2.webp", "/speedmaths-pro/3.webp", "/speedmaths-pro/4.webp", "/speedmaths-pro/5.webp", "/speedmaths-pro/6.webp"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.speedmathspro", kind: "playstore" },
    ],
    stats: [
      { label: "Phase", value: "Early Access" },
      { label: "Platform", value: "Android" },
      { label: "Focus", value: "Daily Drills" },
    ],
    features: ["Daily ranked quiz + leaderboard", "Custom practice: mix operations & difficulty", "Mastery game", "Tips & tricks with practice", "Profile heatmaps + badges", "Full attempt history"],
    highlights: [
      {
        title: "A daily ranked challenge",
        body: "Take the Daily Challenge, bank your score and keep the streak alive. Practice mode is always one tap away.",
        points: ["Ranked daily quiz", "Streaks", "Instant scoring"],
        image: "/speedmaths-pro/1.webp",
      },
      {
        title: "Build your own drill",
        body: "Mix any operations — from addition to trigonometry — set the difficulty and session length, then go.",
        points: ["10 operation types", "Easy → Custom", "1–15 min sessions"],
        image: "/speedmaths-pro/2.webp",
      },
      {
        title: "Learn the tricks behind the speed",
        body: "Short, teachable tricks with practice built in — left-to-right addition, adding 9 or 11 in a blink, and more unlock as you learn.",
        points: ["Guided trick library", "Progress per trick", "Learn-by-doing"],
        image: "/speedmaths-pro/3.webp",
      },
      {
        title: "A mastery game, not a grind",
        body: "Climb a level path from Addition Basics all the way to Speed Master, and watch your global rank move as you go.",
        points: ["Level path", "Global rank", "Coins & unlocks"],
        image: "/speedmaths-pro/4.webp",
      },
      {
        title: "Watch your brain get faster",
        body: "A profile that tracks accuracy, average time, badges and a practice heatmap — so streaks are visible, not guessed.",
        points: ["Accuracy & avg. time", "Badges", "Practice heatmap"],
        image: "/speedmaths-pro/5.webp",
      },
      {
        title: "Every attempt, on the record",
        body: "Each quiz and drill is logged with a score trend and a per-attempt breakdown, so progress over weeks is obvious.",
        points: ["Score trend", "Past attempts", "Daily vs practice"],
        image: "/speedmaths-pro/6.webp",
      },
    ],
    ogImage: "/og-speedmaths-pro.png",
    alternateNames: ["Speed Maths Pro", "SpeedMaths", "Speedmaths Pro app", "speedmaths-pro"],
    hasLegal: true,
    keywords: [
      "Speedmaths Pro",
      "Speed maths app",
      "speed math practice app",
      "mental maths practice app",
      "mental math quiz app India",
      "ranked maths quiz app",
      "maths drill app Android",
      "Vedic maths practice app",
      "Dunite Labs Speedmaths Pro",
      "dunitelabs speedmaths",
    ],
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
