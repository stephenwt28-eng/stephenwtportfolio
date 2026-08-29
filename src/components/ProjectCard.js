import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const statusLabel = {
  complete: 'Live',
  development: 'In Dev',
  'coming-soon': 'Soon',
};

const statusColor = {
  complete: 'var(--accent)',
  development: 'var(--copper)',
  'coming-soon': 'var(--muted)',
};

const statusGlow = {
  complete: 'rgba(63, 243, 129, 0.35)',
  development: 'rgba(193, 122, 79, 0.4)',
  'coming-soon': 'rgba(156, 150, 140, 0.3)',
};

export default function ProjectCard({ project }) {
  const color = statusColor[project.status] || 'var(--muted)';
  const glow = statusGlow[project.status] || 'rgba(193, 122, 79, 0.4)';

  return (
    <Link
      href={`/projects/${project.id}`}
      className="project-card group flex-shrink-0 w-[280px] md:w-[340px] snap-start rounded-lg overflow-hidden block"
      style={{ '--card-glow': glow }}
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="thumb-overlay absolute inset-0"
          style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.8) 100%), linear-gradient(160deg, ${glow} 0%, transparent 45%)` }}
        />
        <span
          className="font-label absolute top-3 right-3 text-[10px] border px-2.5 py-1 rounded-sm backdrop-blur-sm"
          style={{ color, borderColor: color, backgroundColor: 'rgba(10,10,10,0.5)' }}
        >
          {statusLabel[project.status] || project.status}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-1.5 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2 mb-3">
          {project.shortDesc}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted-dim)] group-hover:text-[var(--accent)] transition-colors">
          View project
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
