import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const imageExists = project.thumbnail && project.thumbnail !== '';

const gradients = {
  'cat-food': 'bg-gradient-to-br from-orange-400 to-amber-600',
  'task-manager': 'bg-gradient-to-br from-blue-400 to-indigo-600',
  'vision-manager': 'bg-gradient-to-br from-emerald-400 to-teal-600'
};

export default function ProjectPage({ project }) {
  return (
    <div className="pt-20">
      <div className={`h-64 md:h-80 ${gradients[project.id] || 'bg-gray-200'} flex items-center justify-center relative`}>
        <h1 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h1>
        <span className={`absolute top-4 right-4 text-sm font-medium px-3 py-1.5 rounded-full ${
          project.status === 'complete'
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}>
          {project.status === 'complete' ? 'Complete' : 'In Development'}
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.fullDesc}</p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    </div>
  );
}