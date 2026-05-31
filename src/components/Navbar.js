'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[var(--border)]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
  <img src="/images/SWT_signature_inconvenienced.png" alt="Stephen Tobin" className="h-7 md:h-9" />
</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Home</Link>
          <Link href="/#projects" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Projects</Link>
        </div>
        <button className="md:hidden text-[var(--foreground)]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Home</Link>
          <Link href="/#projects" onClick={() => setOpen(false)} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Projects</Link>
        </div>
      )}
    </nav>
  );
}