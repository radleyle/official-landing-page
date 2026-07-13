import { notFound } from "next/navigation";
import { getProjectById } from "../../../lib/projects";
import ProjectDetail from "./ProjectDetail";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
