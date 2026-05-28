import ProjectSlider from '@/components/ProjectSlider';

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Stephen Tobin</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light mb-6">Full-Stack Developer</p>
        <p className="text-gray-400 max-w-md mb-10">
          I build full-stack web applications that solve real problems. Focused on clean architecture and shipping products that work.
        </p>
        <a
          href="#projects"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          View My Work
        </a>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <ProjectSlider />
      </section>
    </div>
  );
}