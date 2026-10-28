import { projects } from '@/lib/projects';
import ProjectPage from '@/components/ProjectPage';

export default function SalazarsProFinishesPage() {
  const project = projects.find(p => p.id === 'salazars-pro-finishes');
  return <ProjectPage project={project} />;
}
