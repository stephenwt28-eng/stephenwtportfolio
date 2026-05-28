import { projects } from '@/lib/projects';
import ProjectPage from '@/components/ProjectPage';

export default function CatFoodPage() {
  const project = projects.find(p => p.id === 'cat-food');
  return <ProjectPage project={project} />;
}