import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/project-detail";
import { projectById, projectsContent } from "@/content/projects";

export function generateStaticParams() {
  return projectsContent.items.map((project) => ({ id: project.id }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projectById(params.id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
