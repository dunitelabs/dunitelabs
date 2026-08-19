import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "dunitelabs is a product studio that builds usable apps and websites. Here's how we think and work.",
};

const principles = [
  {
    title: "Usability first",
    body: "Every decision is weighed against one question: will the person using this understand it without thinking? If the answer is no, we redesign it.",
  },
  {
    title: "Ship small, ship often",
    body: "We build in tight loops, getting real software in front of real users early. Feedback is cheaper than assumptions.",
  },
  {
    title: "Fast is a feature",
    body: "Performance is part of usability. A slow interface is a broken interface, so we treat speed as a design requirement.",
  },
  {
    title: "Own the details",
    body: "We care about the empty states, the error messages, and the transitions. The boring parts are where trust is built.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-24">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              We build software people don&apos;t have to fight.
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                dunitelabs is a product studio. We design and build web and mobile
                products for companies that care about how their software feels to
                use — because we do too.
              </p>
              <p>
                We&apos;re a small team, which means the people who scope the work
                are the ones who build it. No handoffs between layers of account
                managers; just direct, honest collaboration toward a product
                that&apos;s genuinely good.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <section className="border-t border-line bg-paper-alt py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              How we work
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  What we build
                </h2>
                <ul className="mt-6 space-y-3 text-muted">
                  {[
                    "Customer-facing web apps and dashboards",
                    "Native and cross-platform mobile apps (iOS & Android)",
                    "Marketing sites and landing pages",
                    "Design systems and component libraries",
                    "Internal tools and admin panels",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  The stack
                </h2>
                <p className="mt-3 text-sm text-muted-soft">
                  We pick the right tool for the job — not the only one we know.
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    {
                      label: "Web",
                      items: "Next.js, React, TypeScript, Tailwind CSS",
                    },
                    {
                      label: "Mobile",
                      items: "React Native, Flutter, Kotlin, Swift, Expo",
                    },
                    {
                      label: "Backend",
                      items: "Node.js, PostgreSQL, Prisma, Redis, tRPC",
                    },
                    {
                      label: "Infra & tooling",
                      items: "Vercel, Cloudflare, Docker, GitHub Actions",
                    },
                  ].map((group) => (
                    <div
                      key={group.label}
                      className="rounded-xl border border-line bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs uppercase tracking-wider text-accent">
                        {group.label}
                      </p>
                      <p className="mt-1.5 text-sm text-ink">{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
