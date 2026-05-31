import { projects } from '@/lib/projects';
import ProjectPage from '@/components/ProjectPage';

export default function LearningTrackerPage() {
  const project = projects.find(p => p.id === 'learning-tracker');
  return <ProjectPage project={project} />;
}