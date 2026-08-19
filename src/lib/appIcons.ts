// Visual identity for each app, used by the showcase grid, project cards,
// and project detail headers. Pure CSS/SVG — no external image assets.

export type AppIcon = {
  emoji: string;
  color: string; // tailwind classes for the tile fill
};

export const appIcons: Record<string, AppIcon> = {
  "speedmaths-pro": {
    emoji: "∑",
    color: "bg-grape text-white",
  },
  "guava-music": {
    emoji: "♪",
    color: "bg-coral text-white",
  },
  govtjobsnotice: {
    emoji: "▦",
    color: "bg-sky text-ink",
  },
  upkeepr: {
    emoji: "⚙",
    color: "bg-lime text-ink",
  },
};

export function getAppIcon(slug: string): AppIcon {
  return (
    appIcons[slug] ?? {
      emoji: "◆",
      color: "bg-ink text-paper",
    }
  );
}
