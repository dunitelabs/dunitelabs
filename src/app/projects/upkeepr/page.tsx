import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import {
  ProjectBody,
  ProjectSection,
  ProjectParagraph,
  ProjectBulletList,
} from "@/components/project/ProjectBody";
import { getProjectBySlug } from "@/lib/projects";

const project = getProjectBySlug("upkeepr")!;

export const metadata: Metadata = {
  title: "Upkeepr · dunitelabs",
  description: project.summary,
};

export default function UpkeeprPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <ProjectHeader
          project={project}
          extraLinks={project.url ? [{ href: project.url, label: "Visit live project", variant: "primary" }] : []}
        />
      </Reveal>

      <Reveal>
        <ProjectBody>
          <ProjectSection heading="Overview">
            <ProjectParagraph>
              Upkeepr turns the invisible work of keeping things running —
              filters, servicing, renewals, repairs — into a calm, shared
              checklist. Instead of remembering when something is due, you let
              the app carry that weight.
            </ProjectParagraph>
          </ProjectSection>

          <ProjectSection heading="What we’re building">
            <ProjectBulletList
              items={[
                "A shared maintenance ledger — Households and teams can see everything that’s due, done, and overdue in one view.",
                "Smart reminders — Recurring upkeep schedules itself, and the app nudges the right person at the right time.",
                "History per asset — Every appliance, vehicle, and system keeps a tidy log of what’s been done and when.",
                "Works offline — Add a task from the basement or the road; it syncs when you’re back online.",
              ]}
            />
          </ProjectSection>
        </ProjectBody>
      </Reveal>
    </Container>
  );
}
