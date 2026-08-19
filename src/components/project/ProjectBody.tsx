import type { ReactNode } from "react";

// Shared prose-style body container for project detail pages. Replaces the
// old markdown `prose` wrapper so each project page owns its own layout
// while keeping a consistent vertical rhythm and max width.

export function ProjectBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-12 max-w-3xl ${className}`}>
      {children}
    </div>
  );
}

// Lightweight prose primitives so project pages can compose long-form copy
// without dropping back to raw Tailwind everywhere. Kept intentionally small —
// reach for them when you want consistency, drop to plain JSX when you don't.

export function ProjectSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-muted">{children}</div>
    </section>
  );
}

export function ProjectParagraph({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}

export function ProjectBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
