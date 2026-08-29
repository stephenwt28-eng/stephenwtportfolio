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
        {/* TODO(Stephen): replace this with your real answer — why you became a developer,
            what got you into building products, whatever you actually want a stranger reading
            your contact page to know about you. Keep it a short paragraph or two. */}
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          Placeholder — tell your story here. A couple of sentences on why you got into
          development, what pulled you from design into building full products, and what
          you're looking for next works well in this spot.
        </p>
      </div>
    </div>
  );
}
