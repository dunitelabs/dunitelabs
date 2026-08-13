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

const project = getProjectBySlug("govtjobsnotice")!;

export const metadata: Metadata = {
  title: "Govt Jobs Notice · dunitelabs",
  description: project.summary,
};

export default function GovtJobsNoticePage() {
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
              Govt Jobs Notice is a public-sector jobs portal built for one
              thing: getting the right opening in front of the right candidate
              before the deadline closes. We obsess over freshness — listings
              update in near real-time and stale posts fall away automatically.
            </ProjectParagraph>
          </ProjectSection>

          <ProjectSection heading="What we built">
            <ProjectBulletList
              items={[
                "Instant listings — A streaming ingestion pipeline keeps the job board current without manual publishing.",
                "Search that respects intent — Filter by qualification, state, department, and deadline with results that update as you type.",
                "SEO-first architecture — Every listing and category gets its own prerendered route, so posts rank and get indexed fast.",
                "Notification layer — Users can subscribe to alerts for the exact roles they care about.",
              ]}
            />
          </ProjectSection>
        </ProjectBody>
      </Reveal>
    </Container>
  );
}
