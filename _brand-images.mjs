// Derives the WebP assets the site actually ships. Run after adding new artwork:
//   node _brand-images.mjs
import sharp from "sharp";
import { existsSync } from "node:fs";

/** App logos: 128px for cards/strips, 256px for the app-page hero (device pixel ratio 2–3). */
const logos = [
  "public/guava/guava-music-logo-coompress.png",
  "public/speedmaths-pro/speedmathspro_logo.png",
  "public/govtjobsnotice/logo.png",
];

/** Screenshots referenced from src/data/apps.ts — cap the width, keep the full-size original. */
const shots = [
  "public/guava/1.png",
  "public/guava/2.png",
  "public/guava/3.png",
  "public/speedmaths-pro/1.png",
  "public/speedmaths-pro/2.png",
  "public/speedmaths-pro/3.png",
  "public/speedmaths-pro/4.png",
  "public/speedmaths-pro/5.png",
  "public/speedmaths-pro/6.png",
  "public/govtjobsnotice/1.png",
  "public/govtjobsnotice/2.png",
  "public/govtjobsnotice/3.png",
  "public/govtjobsnotice/4.png",
];

for (const src of [...logos, ...shots]) {
  if (!existsSync(src)) throw new Error(`missing source image: ${src}`);
}

for (const src of logos) {
  const base = src.replace(/\.(png|jpe?g)$/i, "");
  for (const size of [128, 256]) {
    await sharp(src)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 88, alphaQuality: 90, effort: 6 })
      .toFile(`${base.replace(/[^/]+$/, "icon")}-${size}.webp`);
  }
  console.log("logo", src);
}

for (const src of shots) {
  const meta = await sharp(src).metadata();
  const out = src.replace(/\.(png|jpe?g)$/i, ".webp");
  const pipeline = sharp(src);
  if (meta.width > 1600) pipeline.resize({ width: 1600 });
  await pipeline.webp({ quality: 80, effort: 6 }).toFile(out);
  console.log("shot", src, "->", out);
}

console.log("images done");