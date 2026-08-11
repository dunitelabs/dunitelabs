import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} dunitelabs. Built with usability in mind.</p>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="hover:text-zinc-300">
            Projects
          </Link>
          <Link href="/about" className="hover:text-zinc-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-300">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
