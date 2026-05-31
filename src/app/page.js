import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProjectSlider from '@/components/ProjectSlider';

export default function Home() {
  return (
    <div>
            {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-medium text-[var(--accent)] mb-4 tracking-widest uppercase">Full-Stack Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Stephen <span className="text-[var(--accent)]">Tobin</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mb-10 leading-relaxed">
              I build full-stack web applications with clean architecture and sharp UX. Focused on shipping real products that solve real problems — from subscription platforms to business management tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
                View Projects <ArrowRight size={16} />
              </Link>
              <a href="https://github.com/stephenwt28-eng" target="_blank" className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[var(--card-bg)] transition">
                GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold text-white/60">ST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium text-[var(--accent)] mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
          <p className="text-[var(--muted)] mt-2">Full-stack applications built from the ground up.</p>
        </div>
        <ProjectSlider />
      </section>
    </div>
  );
}