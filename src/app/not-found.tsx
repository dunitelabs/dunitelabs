import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The link may be broken or the page may have moved. Let&apos;s get you
        back on track.
      </p>
      <Link
        href="/"
        data-cursor-label="Home"
        className="brutal mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-accent-strong"
      >
        Back home
      </Link>
    </Container>
  );
}
