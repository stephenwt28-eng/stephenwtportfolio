import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const statusLabel = {
  complete: 'Live',
  development: 'In Development',
  'coming-soon': 'Coming Soon',
};

const statusColor = {
  complete: 'var(--accent)',
  development: 'var(--copper)',
  'coming-soon': 'var(--muted)',
};

export default function ProjectPage({ project }) {
  const color = statusColor[project.status] || 'var(--muted)';

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-3xl mx-auto animate-fade-up">
      <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{project.title}</h1>
        <span
          className="font-label text-xs shrink-0 border px-3 py-1.5 rounded-sm mt-2"
          style={{ color, borderColor: color }}
        >
          {statusLabel[project.status] || project.status}
        </span>
      </div>

      <div className="relative w-full h-56 md:h-80 mb-10 overflow-hidden rounded-sm border border-[var(--border)]">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed mb-12">
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

      <div className="mb-10">
        <h2 className="font-label text-xs text-[var(--muted-dim)] mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.tech.map((t) => (
            <span key={t} className="font-label text-[11px] bg-[var(--card-bg)] border border-[var(--border)] px-3 py-1.5 rounded-sm text-[var(--muted)]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="font-label text-xs text-[var(--muted-dim)] mb-4">Features</h2>
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
  );
}
