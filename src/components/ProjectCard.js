import Link from 'next/link';

const gradients = {
  'cat-food': 'bg-gradient-to-br from-orange-400 to-amber-600',
  'task-manager': 'bg-gradient-to-br from-blue-400 to-indigo-600',
  'vision-manager': 'bg-gradient-to-br from-emerald-400 to-teal-600'
};

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden flex-shrink-0 w-full"
    >
      <div className={`h-48 ${gradients[project.id] || 'bg-gray-200'} flex items-center justify-center relative`}>
        <span className="text-white text-lg font-semibold opacity-80">{project.title}</span>
        <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${
          project.status === 'complete'
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}>
          {project.status === 'complete' ? 'Complete' : 'In Development'}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{project.shortDesc}</p>
      </div>
    </Link>
  );
}