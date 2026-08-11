import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="relative h-6 w-6 overflow-hidden rounded-md">
            <Image
              src="/logo.png"
              alt="dunitelabs logo"
              fill
              sizes="24px"
              className="object-cover"
            />
          </span>
          <p>© {new Date().getFullYear()} dunitelabs. Built with usability in mind.</p>
        </div>
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
