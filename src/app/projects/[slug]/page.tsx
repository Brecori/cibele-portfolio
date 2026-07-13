import type { Metadata } from "next";
import { buildProjectMetadata } from "@/lib/metadata";
import { projects } from "@/slugs/projects";
import { ProjectsTemplate } from "@/templates/projects";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return buildProjectMetadata(project);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectsTemplate project={project} />;
}
