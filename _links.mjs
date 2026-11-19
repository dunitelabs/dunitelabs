import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = "dist";
const html = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) html.push(p);
  }
})(root);

const missing = new Map();
for (const file of html) {
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (href.startsWith("//")) continue;
    const target = join(root, href);
    const ok =
      existsSync(target) ||
      existsSync(join(target, "index.html")) ||
      existsSync(target + ".html");
    if (!ok) {
      const key = href;
      if (!missing.has(key)) missing.set(key, new Set());
      missing.get(key).add(relative(root, file));
    }
  }
}

if (!missing.size) {
  console.log("all local links resolve (" + html.length + " pages)");
} else {
  for (const [href, from] of missing) {
    console.log("MISSING", href, "<-", [...from].join(", "));
  }
}

// trailing-slash hygiene in internal links
const noSlash = new Map();
for (const file of html) {
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/(?:href)="(\/[^"#?]*[^/"#?])"/g)) {
    const href = m[1];
    if (/\.[a-z0-9]{2,5}$/i.test(href)) continue;
    if (href === "/") continue;
    if (!noSlash.has(href)) noSlash.set(href, new Set());
    noSlash.get(href).add(relative(root, file));
  }
}
if (noSlash.size) {
  console.log("\ninternal links without a trailing slash:");
  for (const [href, from] of noSlash) console.log("  ", href, "<-", [...from].join(", "));
} else {
  console.log("no extensionless internal links without a trailing slash");
}