"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold uppercase tracking-tight text-ink"
          data-cursor-label="Home"
        >
          dunitelabs
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor-label={item.label}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
