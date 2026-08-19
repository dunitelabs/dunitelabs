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
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Tell us what you&apos;re trying to make. Whether it&apos;s a rough idea
            or a detailed spec, we&apos;ll get back to you within a day or two with
            honest thoughts on how to move forward.
          </p>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
        <StaggerItem>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-muted-soft">Email</p>
            <a
              href="mailto:dunitelabs.support@gmail.com"
              className="mt-2 block text-base font-medium text-ink transition-colors hover:text-accent"
            >
              dunitelabs.support@gmail.com
            </a>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-muted-soft">
              Response time
            </p>
            <p className="mt-2 text-base font-medium text-ink">
              Within 1–2 business days
            </p>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-muted-soft">
              Availability
            </p>
            <p className="mt-2 text-base font-medium text-ink">
              Booking new projects
            </p>
          </div>
        </StaggerItem>
      </StaggerGroup>

      <Reveal>
        <div className="mt-12">
          <a
            href="mailto:dunitelabs.support@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Email us →
          </a>
        </div>
      </Reveal>
    </Container>
  );
}
