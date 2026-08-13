import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · SpeedMaths Pro",
  description:
    "What data the SpeedMaths Pro app collects, why it collects it, and the choices you have. Anonymous by default, local-first, and your data is never sold.",
};

const lastUpdated = "August 13, 2026";

const sections = [
  {
    id: "what-we-collect",
    heading: "What SpeedMaths Pro collects",
    body: [
      "SpeedMaths Pro is built to be local-first and anonymous. You don’t need an account to use the app — practice, sprint mode, and streaks work entirely on your device.",
      "If you take part in the daily leaderboard challenge, the app collects only what’s needed to make that work:",
    ],
    bullets: [
      "An anonymous identifier, generated automatically using Firebase Authentication. This is a random string — it is not linked to your email address, phone number, or any personal account.",
      "Your chosen display name for the leaderboard. You can use any name and change it at any time from the Profile screen.",
      "Your daily quiz score, so it can appear on the global leaderboard alongside other players for that day.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How the app uses it",
    body: ["Your data is used only to run SpeedMaths Pro:"],
    bullets: [
      "Display your score and display name on the daily and weekly leaderboards.",
      "Compute your streaks, badges, and personal progress.",
      "Run the daily challenge so everyone gets the same questions on the same day.",
    ],
  },
  {
    id: "what-we-dont-do",
    heading: "What the app doesn’t do",
    body: ["A few things you should be able to take for granted:"],
    bullets: [
      "SpeedMaths Pro never sells your data, in any form.",
      "It never shares your data with advertisers or advertising networks — the app contains no advertising at all.",
      "It doesn’t track you across other apps or websites.",
      "It doesn’t use advertising identifiers.",
      "It doesn’t collect your email address, phone number, location, contacts, photos, financial information, or any health data.",
    ],
  },
  {
    id: "where-data-lives",
    heading: "Where your data lives",
    body: [
      "Most of your data — practice history, achievements, streaks, and app preferences — is stored locally on your device using on-device storage. This data never leaves your device.",
      "Only your daily quiz score and display name are sent over an encrypted HTTPS connection to Google Firebase (Cloud Firestore) so they can appear on the global leaderboard. Firebase processes this data on the app’s behalf under Google’s privacy and security standards.",
      "If you uninstall SpeedMaths Pro, all locally stored data (practice history, settings, badges) is removed with it. Leaderboard scores are automatically removed on a rolling basis, typically within 7 to 14 days.",
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices",
    body: ["You’re in control of your data at every step:"],
    bullets: [
      "Use the app without ever appearing on the leaderboard — practice mode works entirely offline and anonymously.",
      "Clear all local data at any time by uninstalling the app.",
      "Request deletion of your leaderboard entries by emailing the developer. Requests are actioned within 7 working days.",
    ],
  },
  {
    id: "children",
    heading: "Children’s privacy",
    body: [
      "SpeedMaths Pro is targeted at users aged 13 and older. Because all identification is anonymous and no personal information (name, email, etc.) is collected, the app is appropriate for general use. The app does not knowingly collect personal information from children under 13. If you believe a child has provided information to SpeedMaths Pro, contact the developer and it will be deleted.",
    ],
  },
  {
    id: "security",
    heading: "Security",
    body: [
      "SpeedMaths Pro uses industry-standard practices to protect your data: all network communication is encrypted in transit using HTTPS/TLS, access to the Firebase project is restricted to authorised maintainers, and Firestore security rules ensure a user can only write their own leaderboard scores. No method of transmission or storage is perfectly secure, but the app aims to collect so little that the risk to you stays minimal.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "If how SpeedMaths Pro handles data changes in a way that affects you, this page will be updated and the date above bumped. For material changes, you’ll also be notified inside the app.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            This policy covers the SpeedMaths Pro app only. It explains what
            data the app collects, why it collects it, and the choices you have.
            The short version: SpeedMaths Pro is anonymous and local-first,
            keeps your practice data on your device by default, and never sells
            it.
          </p>
          <p className="mt-4 text-sm text-zinc-500">Last updated: {lastUpdated}</p>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-4">
        {sections.map((section) => (
          <StaggerItem key={section.id}>
            <section
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-2">
                    {section.bullets.map((item, i) => (
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
                ) : null}
              </div>
            </section>
          </StaggerItem>
        ))}

        <StaggerItem>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.04] p-6 sm:p-8">
            <p className="text-sm text-zinc-400">
              Questions about your data in SpeedMaths Pro? Email the developer,{" "}
              <a
                href="mailto:dunitelabs.support@gmail.com"
                className="font-medium text-violet-300 hover:text-violet-200"
              >
                dunitelabs.support@gmail.com
              </a>
              , and you'll get a response within a few business days. You can
              also request data deletion from the{" "}
              <Link
                href="/projects/speedmaths-pro/delete-data"
                className="font-medium text-violet-300 hover:text-violet-200"
              >
                Delete your data
              </Link>{" "}
              page.
            </p>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </Container>
  );
}