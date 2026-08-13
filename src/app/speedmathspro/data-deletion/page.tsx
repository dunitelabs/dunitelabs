import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Data Deletion · SpeedMaths Pro",
  description:
    "How to request deletion of your SpeedMaths Pro data, including leaderboard scores and display name.",
};

const steps = [
  {
    title: "Email the developer",
    body: "Send an email to dunitelabs.support@gmail.com with the subject line \"SpeedMaths Pro — Data Deletion Request\". No account details are required — your request is anonymous, just like your data.",
  },
  {
    title: "Tell us what to delete (optional)",
    body: "You can simply ask for all your data to be removed, or specify what you'd like deleted. We'll confirm what was found and removed.",
  },
  {
    title: "We process your request within 7 working days",
    body: "Once we receive your email, we'll locate and delete your leaderboard entries and display name from our servers. You'll receive a confirmation email when it's done.",
  },
];

export default function DataDeletionPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-violet-400">
            SpeedMaths Pro
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Request Data Deletion
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            SpeedMaths Pro is built to be anonymous and local-first. You can
            request deletion of your data at any time — no account, no login, no
            questions asked.
          </p>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-4">
        <StaggerItem>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.04] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
              What data can be deleted?
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>
                  <strong className="text-zinc-200">Leaderboard scores</strong> — your daily quiz scores stored on our servers for the global leaderboard.
                </span>
              </li>
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>
                  <strong className="text-zinc-200">Display name</strong> — the name you chose for the leaderboard.
                </span>
              </li>
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>
                  <strong className="text-zinc-200">Anonymous identifier</strong> — the random Firebase ID linked to your device for leaderboard purposes.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Leaderboard scores are also automatically removed on a rolling
              basis, typically within 7 to 14 days of being submitted.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
              What about local data?
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              The following data is stored only on your device and never leaves it.
              The simplest way to delete this data is to uninstall SpeedMaths Pro —
              all local data is removed with the app:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>Practice history and quiz results</span>
              </li>
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>Streaks, badges, and achievements</span>
              </li>
              <li className="flex gap-3 leading-relaxed text-zinc-400">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span>App settings and preferences</span>
              </li>
            </ul>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
              How to request deletion
            </h2>
            <ol className="mt-4 space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-sm font-semibold text-violet-300"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-100">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-zinc-400">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-violet-400/20 bg-violet-500/[0.04] p-5">
              <p className="text-sm text-zinc-400">
                Ready to send your request? Email the developer at{" "}
                <a
                  href="mailto:dunitelabs.support@gmail.com?subject=SpeedMaths%20Pro%20%E2%80%94%20Data%20Deletion%20Request"
                  className="font-medium text-violet-300 hover:text-violet-200"
                >
                  dunitelabs.support@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </Container>
  );
}