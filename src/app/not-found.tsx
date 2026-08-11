import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium text-violet-400">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 max-w-md text-zinc-400">
        The link may be broken or the page may have moved. Let&apos;s get you
        back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-400"
      >
        Back home
      </Link>
    </Container>
  );
}
