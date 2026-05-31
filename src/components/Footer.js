import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-2">Stephen Tobin</h3>
            <p className="text-sm text-[var(--muted)]">Full-stack developer crafting production web apps. Available for work.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[var(--foreground)]">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Home</Link>
              <Link href="/#projects" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">Projects</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[var(--foreground)]">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/stephenwt28-eng" target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">GitHub</a>
              <a href="https://www.linkedin.com/in/stephen-tobin-46a462276/" target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Stephen Tobin. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}