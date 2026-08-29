'use client';

import { useState } from 'react';
import { Send, Copy, Check } from 'lucide-react';

const CONTACT_EMAIL = 'stephenwt28@gmail.com';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong.');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  if (status === 'sent') {
    return (
      <div className="border border-[var(--border-emerald)] bg-[var(--card-bg)] rounded-lg p-6 text-[var(--accent)] text-sm">
        Thanks — your message is on its way. I'll get back to you soon.
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="font-label text-[11px] text-[var(--muted-dim)] block mb-2">Name</label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--border-copper)] transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-label text-[11px] text-[var(--muted-dim)] block mb-2">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--border-copper)] transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-label text-[11px] text-[var(--muted-dim)] block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--border-copper)] transition resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400">{errorMsg} Try again, or copy my email below.</p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[var(--accent)] to-[#2bb85f] text-black px-6 py-3.5 rounded-lg text-sm font-medium hover:brightness-110 transition disabled:opacity-60 mt-2"
        >
          {status === 'sending' ? 'Sending...' : <>Send Message <Send size={15} /></>}
        </button>
      </form>

      <button
        onClick={copyEmail}
        className="inline-flex items-center gap-2 text-xs text-[var(--muted-dim)] hover:text-[var(--foreground)] transition mt-5"
      >
        {copied ? <Check size={13} className="text-[var(--accent)]" /> : <Copy size={13} />}
        {copied ? 'Copied' : `Or copy: ${CONTACT_EMAIL}`}
      </button>
    </div>
  );
}
