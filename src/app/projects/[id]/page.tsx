import ProjectTemplate from '@/components/ProjectTemplate';
import { notFound } from 'next/navigation';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  fileUrl?: string;
};

async function fetchProject(id: string): Promise<Project | null> {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`);

  if (!res.ok) {
    return null;
  }

  const project = await res.json();
  return project;
}

type ProjectPageProps = {
  params: {
    id: string;
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await fetchProject(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
};

export default ProjectPage;
