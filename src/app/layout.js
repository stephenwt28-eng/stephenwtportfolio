import { Cabin, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Stephen Tobin | Full-Stack Developer',
  description: 'Full-stack developer building production-ready web applications with Next.js, Supabase, and Tailwind CSS.',
  openGraph: { title: 'Stephen Tobin | Full-Stack Developer', description: 'Full-stack developer portfolio.' },
  icons: {
    icon: '/images/SWT_signature_inconvenienced.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cabin.variable} ${plexMono.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
