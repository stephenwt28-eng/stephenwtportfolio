import Link from 'next/link';

const gradients = {
  'cat-food': 'from-orange-500/20 to-amber-600/20',
  'task-manager': 'from-blue-500/20 to-indigo-600/20',
  'vision-manager': 'from-emerald-500/20 to-teal-600/20'
};

const statusColors = {
  'complete': 'bg-green-900/40 text-green-400 border-green-800',
  'coming-soon': 'bg-blue-900/40 text-blue-400 border-blue-800',
  'development': 'bg-amber-900/40 text-amber-400 border-amber-800'
};

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 overflow-hidden flex-shrink-0 w-full"
    >
      <div className={`h-44 bg-gradient-to-br ${gradients[project.id] || 'from-gray-800 to-gray-900'} flex items-center justify-center relative`}>
        <span className="text-lg font-semibold text-white/40 group-hover:text-white/70 transition">{project.title}</span>
        <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
          {project.status === 'complete' ? 'Complete' : project.status === 'coming-soon' ? 'Coming Soon' : 'In Development'}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base mb-1.5 group-hover:text-[var(--accent)] transition">{project.title}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{project.shortDesc}</p>
      </div>
    </Link>
  );
}