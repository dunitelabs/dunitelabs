import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete your data · SpeedMaths Pro",
  description:
    "Request deletion of your SpeedMaths Pro leaderboard data. Local data never leaves your device and is cleared by uninstalling the app.",
};

const lastUpdated = "August 13, 2026";

const DELETION_EMAIL = "dunitelabs.support@gmail.com";
const DELETION_SUBJECT = "SpeedMaths Pro — Data Deletion Request";
const DELETION_BODY =
  "Please delete my SpeedMaths Pro data.\n\nDisplay name on leaderboard (optional): \nReason (optional): ";

const deletableData = [
  "Your daily quiz scores stored on our servers for the global leaderboard.",
  "Your chosen display name shown on the leaderboard.",
  "The anonymous identifier (Firebase UID) linked to your device for leaderboard purposes.",
];

const localData = [
  "Practice history and quiz results from sprint mode.",
  "Streaks, badges, and achievements you’ve earned.",
  "App settings and preferences (theme, sound, etc.).",
];

const steps = [
  {
    title: "Email the developer",
    body: "Send an email using the button below, or to the address shown. No account details are required — your request is anonymous, just like your data.",
  },
  {
    title: "Tell us what to delete (optional)",
    body: "You can simply ask for all your data to be removed, or specify what you’d like deleted. Including your leaderboard display name helps us locate your entries faster.",
  },
  {
    title: "We process your request within 7 working days",
    body: "Once we receive your email, we’ll locate and delete your leaderboard entries and display name from our servers. You’ll receive a confirmation email when it’s done.",
  },
];

export default function DeleteDataPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <div className="max-w-3xl">
          <Link
            href="/projects/speedmaths-pro"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5L5.5 8L10 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to SpeedMaths Pro
          </Link>
          <p className="mt-6 text-sm uppercase tracking-wider text-violet-400">
            SpeedMaths Pro
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Delete your data
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            SpeedMaths Pro is built to be anonymous and local-first. You can
            request deletion of your leaderboard data at any time — no account,
            no login, no questions asked.
          </p>
          <p className="mt-4 text-sm text-zinc-500">Last updated: {lastUpdated}</p>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-4">
        <StaggerItem>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.04] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
              What we can delete from our servers
            </h2>
            <ul className="mt-4 space-y-2">
              {deletableData.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 leading-relaxed text-zinc-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
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
              The following data is stored only on your device and never leaves
              it. The simplest way to delete this data is to uninstall SpeedMaths
              Pro — all local data is removed with the app:
            </p>
            <ul className="mt-4 space-y-2">
              {localData.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 leading-relaxed text-zinc-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
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
              <a
                href={`mailto:${DELETION_EMAIL}?subject=${encodeURIComponent(
                  DELETION_SUBJECT,
                )}&body=${encodeURIComponent(DELETION_BODY)}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200"
              >
                Email to delete your data
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="mt-3 text-sm text-zinc-500">
                Or email{" "}
                <span className="text-zinc-400">{DELETION_EMAIL}</span> directly.
                No account details are required — just mention SpeedMaths Pro.
              </p>
            </div>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </Container>
  );
}