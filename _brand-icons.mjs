import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";

const logo = readFileSync("public/dunitelabs_logo.svg", "utf8");
const inner = logo
  .replace(/^[\s\S]*?<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .replace(/<title>[\s\S]*?<\/title>/, "");

const BG = "#0E0E0E";
const FG = "#F7F3EE";

function tileSvg(size, { rounded = true, scale = 0.9, full = false } = {}) {
  const r = rounded && !full ? (size * 0.22) / size * 512 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="${r}" fill="${BG}"/>
    <g transform="translate(256 256) scale(${scale}) translate(-256 -256)">
      ${inner.replace(/fill="#[0-9a-fA-F]+"/g, `fill="${FG}"`)}
    </g>
  </svg>`;
}

const render = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();

// --- favicon.svg (rounded tile, crisp at any size) ---
writeFileSync(
  "public/favicon.svg",
  tileSvg(512, { scale: 0.96 }).replace(
    'width="512" height="512"',
    'width="512" height="512" role="img" aria-label="Dunite Labs"',
  ),
);

// --- PNG favicons (Google reads these; 48px is the minimum it accepts) ---
const pngSizes = [48, 96, 144, 192, 512];
for (const s of pngSizes) {
  writeFileSync(`public/favicon-${s}.png`, await render(tileSvg(512, { full: true, scale: 0.86 }), s));
}

// --- multi-size ICO (PNG entries) ---
const icoSizes = [16, 32, 48];
const pngs = [];
for (const s of icoSizes) pngs.push({ size: s, buf: await render(tileSvg(512, { scale: 0.92 }), s) });

const count = pngs.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(count, 4);
let offset = 6 + count * 16;
const entries = [];
const blobs = [];
for (const p of pngs) {
  const e = Buffer.alloc(16);
  e.writeUInt8(p.size >= 256 ? 0 : p.size, 0);
  e.writeUInt8(p.size >= 256 ? 0 : p.size, 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(p.buf.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += p.buf.length;
  entries.push(e);
  blobs.push(p.buf);
}
writeFileSync("public/favicon.ico", Buffer.concat([header, ...entries, ...blobs]));

// --- iOS home screen (opaque, square: iOS applies its own mask) ---
writeFileSync("public/apple-touch-icon.png", await render(tileSvg(512, { full: true, scale: 0.8 }), 180));

// --- Android maskable (content inside the safe 80% circle) ---
writeFileSync("public/icon-maskable-512.png", await render(tileSvg(512, { full: true, scale: 0.6 }), 512));

writeFileSync(
  "public/site.webmanifest",
  JSON.stringify(
    {
      name: "Dunite Labs",
      short_name: "Dunite Labs",
      description:
        "Dunite Labs — an independent app studio from India. Guava Music, Speedmaths Pro and Govt Jobs Notice.",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#F7F3EE",
      theme_color: "#0E0E0E",
      lang: "en",
      categories: ["productivity", "music", "education"],
      icons: [
        { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    },
    null,
    2,
  ) + "\n",
);

for (const stale of ["public/icon-192.png", "public/icon-512.png"]) {
  if (existsSync(stale)) unlinkSync(stale);
}

console.log("icons done");