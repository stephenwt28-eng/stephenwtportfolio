'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectSlider() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges);
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('a')?.offsetWidth || 320;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="hide-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Previous project"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-copper)] hover:text-[var(--foreground)] disabled:opacity-30 disabled:cursor-default transition"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Next project"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-copper)] hover:text-[var(--foreground)] disabled:opacity-30 disabled:cursor-default transition"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
