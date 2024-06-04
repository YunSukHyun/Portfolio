import ProjectTemplate from '@/components/ProjectTemplate';
import { Project } from '@/types/projects';
import { notFound } from 'next/navigation';

async function fetchProject(id: string): Promise<Project | null> {
  const res = await fetch(`http://localhost:3000/api/projects`);

  if (!res.ok) {
    return null;
  }

  const project = await res.json();
  return project;
}

type ProjectId = {
  params: {
    id: string;
  };
};

const ProjectPage = async ({ params: { id } }: ProjectId) => {
  const project = await fetchProject(id);
  console.log(project);
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
};

export default ProjectPage;
