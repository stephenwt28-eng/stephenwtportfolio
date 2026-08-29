'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    const projectsEl = document.getElementById('projects');
    if (!projectsEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActiveSection(entry.isIntersecting ? 'projects' : 'home'),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    observer.observe(projectsEl);
    return () => observer.disconnect();
  }, [pathname]);

  const linkClass = (isActive) =>
    `font-label text-xs transition ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`;

  const isHome = pathname === '/' && activeSection === 'home';
  const isProjects = pathname === '/' && activeSection === 'projects';
  const isContact = pathname === '/contact';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[var(--border-copper)]' : 'bg-transparent'}`}>
      {pathname === '/' && <div className="nav-progress" style={{ width: `${progress}%` }} />}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/SWT_signature_inconvenienced.png" alt="Stephen Tobin" className="h-7 md:h-9" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass(isHome)}>Home</Link>
          <Link href="/#projects" className={linkClass(isProjects)}>Projects</Link>
          <Link href="/contact" className={linkClass(isContact)}>Contact</Link>
        </div>
        <button className="md:hidden text-[var(--foreground)]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className={linkClass(isHome)}>Home</Link>
          <Link href="/#projects" onClick={() => setOpen(false)} className={linkClass(isProjects)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={linkClass(isContact)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
