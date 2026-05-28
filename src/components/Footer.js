import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Stephen Tobin</h3>
            <p className="text-sm text-gray-500">Full-Stack Developer</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition">Home</Link>
              <Link href="/#projects" className="text-sm text-gray-500 hover:text-gray-900 transition">Projects</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com" target="_blank" className="text-sm text-gray-500 hover:text-gray-900 transition">GitHub</a>
              <a href="https://linkedin.com" target="_blank" className="text-sm text-gray-500 hover:text-gray-900 transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          &copy; 2026 Stephen Tobin. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}