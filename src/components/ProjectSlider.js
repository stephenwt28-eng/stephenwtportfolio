'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((p) => (
          <div key={p.id} className="snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#1a1a1a] border border-[var(--border)] rounded-full p-2 hover:bg-[#222] transition hidden md:block">
        <ChevronLeft size={18} className="text-[var(--foreground)]" />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#1a1a1a] border border-[var(--border)] rounded-full p-2 hover:bg-[#222] transition hidden md:block">
        <ChevronRight size={18} className="text-[var(--foreground)]" />
      </button>
    </div>
  );
}