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

const project = getProjectBySlug("guava-music")!;

export const metadata: Metadata = {
  title: "Guava Music · dunitelabs",
  description: project.summary,
};

export default function GuavaMusicPage() {
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
              Guava Music is a streaming app reimagined around the way people
              actually listen — jumping between a favorite, something new, and a
              friend’s recommendation in the span of a minute. The interface is
              built to keep that momentum alive.
            </ProjectParagraph>
          </ProjectSection>

          <ProjectSection heading="What we’re building">
            <ProjectBulletList
              items={[
                "Gapless playback — Transitions between tracks feel continuous instead of stopping your flow.",
                "Discovery-first home — The opening screen leads with what you haven’t heard, not what you already know.",
                "A strict design system — One component library, one spacing scale, one motion language across the whole app.",
                "Shared listening — Sessions where friends can drop in and listen together in real time.",
              ]}
            />
          </ProjectSection>
        </ProjectBody>
      </Reveal>
    </Container>
  );
}
