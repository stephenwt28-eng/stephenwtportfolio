'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-start flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition hidden md:block"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition hidden md:block"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}