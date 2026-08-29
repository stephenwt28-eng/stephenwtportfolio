import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProjectSlider from '@/components/ProjectSlider';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Stephen{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[#7ef7ae] bg-clip-text text-transparent">
                Tobin
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mb-5 leading-relaxed">
              I build full-stack web applications with clean architecture and sharp UX. Focused on shipping real products that solve real problems — from subscription platforms to business management tools.
            </p>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mb-10 leading-relaxed">
              I'm also open to freelance and contract work. If you've got a project in mind, <Link href="/contact" className="text-[var(--accent)] hover:underline">get in touch</Link> and we can talk through scope and rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-br from-[var(--accent)] to-[#2bb85f] text-black px-6 py-3 rounded-lg text-sm font-medium hover:brightness-110 transition">
                View Projects <ArrowRight size={16} />
              </Link>
              <a href="https://github.com/stephenwt28-eng" target="_blank" className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[var(--card-bg)] transition">
                GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="hero-glow" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-[var(--border-copper)] p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/SwT_profile.jpeg"
                  alt="Stephen Tobin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider max-w-5xl mx-auto" />

      {/* Projects */}
      <section id="projects" className="px-6 md:px-12 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16 flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
          <p className="text-sm text-[var(--muted)] max-w-xs">
            Full-stack applications built from the ground up.
          </p>
        </div>
        <ProjectSlider />
      </section>
    </div>
  );
}
