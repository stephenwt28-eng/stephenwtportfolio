import { projects } from '@/lib/projects';
import ProjectPage from '@/components/ProjectPage';

export default function VisionManagerPage() {
  const project = projects.find(p => p.id === 'vision-manager');
  return <ProjectPage project={project} />;
}