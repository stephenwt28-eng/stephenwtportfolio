import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-copper)] bg-[#080807]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-2">Stephen Tobin</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Full-stack developer crafting production web apps.</p>
            <span className="font-label text-[10px] text-[var(--accent)] border border-[var(--border-emerald)] px-2.5 py-1 rounded-sm inline-block">
              Available for work
            </span>
          </div>
          <div>
            <h4 className="font-label text-[11px] mb-4 text-[var(--muted-dim)]">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Home</Link>
              <Link href="/#projects" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Projects</Link>
              <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[11px] mb-4 text-[var(--muted-dim)]">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/stephenwt28-eng" target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">GitHub</a>
              <a href="https://www.linkedin.com/in/stephen-tobin-46a462276/" target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--muted-dim)] font-label">
          &copy; {new Date().getFullYear()} Stephen Tobin — Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
