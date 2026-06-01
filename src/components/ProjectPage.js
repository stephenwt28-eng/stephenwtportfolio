import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

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

export default function ProjectPage({ project }) {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className={`h-56 md:h-72 bg-gradient-to-br ${gradients[project.id] || 'from-gray-800 to-gray-900'} flex items-center justify-center relative`}>
        <h1 className="text-3xl md:text-5xl font-bold text-white/90">{project.title}</h1>
        <span className={`absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full border ${statusColors[project.status]}`}>
          {project.status === 'complete' ? 'Complete' : project.status === 'coming-soon' ? 'Coming Soon' : 'In Development'}
        </span>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed mb-10">
  {project.liveUrl ? (
    <>
      {project.fullDesc.split('Click here')[0]}
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
        Click here
      </a>
      {project.fullDesc.split('Click here')[1]}
    </>
  ) : (
    project.fullDesc
  )}
</p>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span key={t} className="bg-[var(--card-bg)] border border-[var(--border)] text-sm px-3 py-1.5 rounded-lg text-[var(--muted)]">{t}</span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                <ChevronRight size={14} className="mt-0.5 text-[var(--accent)] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition">
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>
    </div>
  );
}