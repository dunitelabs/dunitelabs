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

const project = getProjectBySlug("speedmaths-pro")!;

export const metadata: Metadata = {
  title: "SpeedMaths Pro · dunitelabs",
  description: project.summary,
};

export default function SpeedMathsProPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <ProjectHeader
          project={project}
          extraLinks={[
            { href: "/projects/speedmaths-pro/privacy-policy", label: "Privacy Policy", variant: "muted" },
            { href: "/projects/speedmaths-pro/delete-data", label: "Delete your data", variant: "muted" },
          ]}
        />
      </Reveal>

      <Reveal>
        <ProjectBody>
          <ProjectSection heading="Overview">
            <ProjectParagraph>
              SpeedMaths Pro is a mental-math trainer where the goal is flow,
              not correctness. Problems arrive at a pace that pushes you just
              past comfortable, and the interface stays out of the way so the
              only thing on screen is the next answer.
            </ProjectParagraph>
          </ProjectSection>

          <ProjectSection heading="What we’re building">
            <ProjectBulletList
              items={[
                "Adaptive difficulty — The problem generator tunes itself to your speed and accuracy so every session sits in the productive struggle zone.",
                "Game-feel UI — Every correct answer snaps, pulses, and rewards; wrong answers stay calm and keep you moving.",
                "Streaks and daily goals — Lightweight habit hooks that make five minutes a day feel inevitable.",
                "Offline-first — Practice anywhere; progress syncs when you’re back online.",
              ]}
            />
          </ProjectSection>
        </ProjectBody>
      </Reveal>
    </Container>
  );
}
