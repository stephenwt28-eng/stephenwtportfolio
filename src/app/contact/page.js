import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Stephen Tobin',
  description: 'Get in touch with Stephen Tobin for full-time roles or freelance work.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-2xl mx-auto animate-fade-up">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
      <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed mb-10">
        Whether you're hiring for a full-time role or have a freelance project you'd like to scope out, I'd love to hear from you. Send a message below and I'll get back to you quickly.
      </p>
      <ContactForm />

      <div className="mt-20 pt-10 border-t border-[var(--border)]">
        <h2 className="font-label text-xs text-[var(--copper)] mb-4">My Story</h2>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed mb-4">
          I came to development through design. I earned my B.A. in Art Media &amp; Design
          (Summa Cum Laude) at Cal State San Marcos and added the Google UX Design
          Professional Certificate, but I kept wanting to build the thing, not just draw it.
          In March 2026 I set out to become a developer, so I could take an idea from a Figma
          frame all the way to a deployed product.
        </p>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed mb-4">
          I completed a full-stack web development bootcamp, then started building. Learning
          Tracker is a solo Next.js and Supabase app with authentication and row-level
          security, and the cat food delivery app is a React and Node project. I also
          stabilized and deployed VisionManager, a collaborative optical-store management
          platform built primarily by a teammate, tracking down missing database tables,
          row-level security gaps, and broken flows along the way.
        </p>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          I'm looking for a fully remote junior role in full-stack development or UX/UI design,
          working with React, Next.js, Node, Supabase/PostgreSQL, Tailwind, and Figma.
        </p>
      </div>
    </div>
  );
}
