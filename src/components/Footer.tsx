import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-soft">
              Let&apos;s make something
            </p>
            <Link
              href="/contact"
              data-cursor-label="Say hi"
              className="brutal mt-3 inline-block rounded-2xl bg-sun px-6 py-4 font-display text-4xl font-semibold leading-none tracking-tight text-ink transition-colors hover:bg-accent hover:text-paper sm:text-6xl"
            >
              Start a project →
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="dunitelabs logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              dunitelabs
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-ink pt-8 text-muted-soft sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} dunitelabs — an indie studio
          </p>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <Link href="/projects" className="transition-colors hover:text-ink">
              Work
            </Link>
            <Link href="/about" className="transition-colors hover:text-ink">
              Studio
            </Link>
            <Link href="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
