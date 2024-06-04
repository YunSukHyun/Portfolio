import { NextApiRequest } from 'next';
import { projects } from '../projectData';

export async function GET(req: NextApiRequest) {
  return Response.json(projects);
}
