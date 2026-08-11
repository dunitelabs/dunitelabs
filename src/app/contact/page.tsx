import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to build. We'll help you shape it into something usable.",
};

export default function ContactPage() {
  return (
    <Container className="py-24">
      <Reveal>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Let&apos;s build something
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Tell us what you&apos;re trying to make. Whether it&apos;s a rough idea
          or a detailed spec, we&apos;ll get back to you within a day or two with
          honest thoughts on how to move forward.
        </p>
      </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
        <StaggerItem>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
            <a
              href="mailto:dunitelabs.support@gmail.com"
              className="mt-2 block text-base font-medium text-zinc-50 hover:text-violet-300"
            >
              dunitelabs.support@gmail.com
            </a>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Response time
            </p>
            <p className="mt-2 text-base font-medium text-zinc-50">
              Within 1–2 business days
            </p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Availability
            </p>
            <p className="mt-2 text-base font-medium text-zinc-50">
              Booking new projects
            </p>
          </div>
        </StaggerItem>
      </StaggerGroup>

      <Reveal>
      <div className="mt-12">
        <a
          href="mailto:dunitelabs.support@gmail.com"
          className="inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-violet-400"
        >
          Email us →
        </a>
      </div>
      </Reveal>
    </Container>
  );
}
