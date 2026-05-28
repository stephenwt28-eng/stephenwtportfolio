import { projects } from '@/lib/projects';
import ProjectPage from '@/components/ProjectPage';

export default function TaskManagerPage() {
  const project = projects.find(p => p.id === 'task-manager');
  return <ProjectPage project={project} />;
}