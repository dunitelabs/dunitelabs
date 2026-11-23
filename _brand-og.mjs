import sharp from "sharp";
import { readFileSync } from "node:fs";

const logo = readFileSync("public/dunitelabs_logo.svg", "utf8");
const markPath = logo
  .replace(/^[\s\S]*?<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .replace(/<title>[\s\S]*?<\/title>/, "")
  .replace(/fill="#[0-9a-fA-F]+"/g, 'fill="#F7F3EE"');

const W = 1200;
const H = 630;
const INK = "#0E0E0E";
const CREAM = "#F7F3EE";
const MUTED = "#4A4A4A";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function og({ kicker, headline, sub, accent, footerLeft = "dunitelabs.com", footerRight, big = false }) {
  const headSize = big ? 96 : 84;
  const headLead = big ? 104 : 92;
  const headStart = big ? 300 : 320;
  const headBottom = headStart + (headline.length - 1) * headLead;

  const accentY = headBottom + 28;
  const subY = accentY + 52;

  const head = headline
    .map(
      (l, i) =>
        `<text x="72" y="${headStart + i * headLead}" font-family="Arial, Helvetica, sans-serif" font-size="${headSize}" font-weight="bold" letter-spacing="-2" fill="${INK}">${esc(l)}</text>`,
    )
    .join("\n  ");

  const subLines = (Array.isArray(sub) ? sub : [sub])
    .map(
      (l, i) =>
        `<text x="72" y="${subY + i * 36}" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="${MUTED}">${esc(l)}</text>`,
    )
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="${INK}" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>

  <!-- brand lockup -->
  <rect x="78" y="62" width="72" height="72" rx="16" fill="${INK}" opacity="0.18"/>
  <rect x="72" y="56" width="72" height="72" rx="16" fill="${INK}"/>
  <g transform="translate(108 92) scale(${56 / 512}) translate(-256 -256)">${markPath}</g>
  <text x="162" y="104" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="bold" letter-spacing="4" fill="${INK}">DUNITE LABS</text>
  <text x="1128" y="102" text-anchor="end" font-family="Consolas, 'Courier New', monospace" font-size="19" letter-spacing="2" fill="${MUTED}">${esc(footerRight || "")}</text>

  <!-- rule -->
  <rect x="72" y="168" width="1056" height="2" fill="${INK}"/>
  <rect x="72" y="168" width="${big ? 180 : 120}" height="2" fill="${accent}"/>

  <!-- kicker -->
  <text x="72" y="${headStart - 96}" font-family="Consolas, 'Courier New', monospace" font-size="20" letter-spacing="4" fill="${MUTED}">${esc(kicker)}</text>

  <!-- headline -->
  ${head}

  <!-- accent bar -->
  <rect x="72" y="${accentY}" width="96" height="10" fill="${accent}"/>
  <rect x="176" y="${accentY + 3}" width="952" height="4" fill="${INK}" opacity="0.75"/>

  <!-- sub -->
  ${subLines}

  <!-- footer -->
  <rect x="72" y="544" width="1056" height="2" fill="${INK}" opacity="0.35"/>
  <text x="72" y="592" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="1" fill="${INK}">${esc(footerLeft)}</text>
  <text x="1128" y="592" text-anchor="end" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="2" fill="${MUTED}">APPS · WEBSITES · TOOLS</text>
</svg>`;
}

const pages = {
  "og-home": og({
    kicker: "INDEPENDENT APP STUDIO — INDIA",
    headline: ["WE BUILD", "USEFUL THINGS."],
    sub: [
      "Guava Music · Speedmaths Pro",
      "Offline-first Android apps, websites and tools. No ads, no tracking.",
    ],
    accent: "#D2FF4D",
    footerRight: "EST. 2024",
    big: true,
  }),
  "og-guava-music": og({
    kicker: "ANDROID APP — OFFLINE FIRST",
    headline: ["GUAVA", "MUSIC"],
    sub: [
      "Your library, on your device. Lyrics, folders, playlists, sync.",
      "A personal cloud locker for the music you already own.",
    ],
    accent: "#D2FF4D",
    footerRight: "GUAVA MUSIC",
  }),
  "og-speedmaths-pro": og({
    kicker: "ANDROID APP — DAILY RANKED QUIZ",
    headline: ["SPEEDMATHS", "PRO"],
    sub: [
      "Train mental maths with daily ranked quizzes and custom drills.",
      "Heatmaps, badges and a mastery mode that keeps you coming back.",
    ],
    accent: "#6AE4FF",
    footerRight: "SPEEDMATHS PRO",
  }),
};

for (const [name, svg] of Object.entries(pages)) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`public/${name}.png`);
}
console.log("og done");