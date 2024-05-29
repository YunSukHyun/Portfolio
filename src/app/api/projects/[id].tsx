import { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  fileUrl?: string;
};

const projects: Project[] = [
  // {
  //   id: '1',
  //   title: 'Project One',
  //   description: 'Description for project one.',
  //   imageUrl: '/path/to/image.jpg',
  //   fileUrl: '/path/to/file.pdf',
  // },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.status(200).json(project);
}
