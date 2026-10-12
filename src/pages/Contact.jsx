import { useState } from "react";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/config";

const field = "mt-1 w-full rounded-xl border border-brand/30 bg-card px-4 py-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or a form service (Formspree, Resend, etc.).
    setSent(true);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:grid-cols-12 md:py-20">
      <div className="md:col-span-5">
        <h1 className="font-display text-5xl font-extrabold text-brand md:text-7xl">
          Contact
        </h1>
        <p className="mt-6 max-w-sm text-lg leading-relaxed">
          Questions about an order, sizing or wholesale? Send us a message and we'll reply by email.
        </p>
        <dl className="mt-8 space-y-4">
          <div>
            <dt className="font-semibold text-brand">Email</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-brand">Instagram</dt>
            <dd>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {INSTAGRAM_HANDLE}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7">
        {sent ? (
          <div role="status" className="rounded-2xl bg-cream p-8">
            <h2 className="font-display text-3xl font-bold text-brand">
              Message sent
            </h2>
            <p className="mt-2">
              Thanks, {form.name}. We'll reply to {form.email} soon.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-5 rounded-full font-semibold text-brand underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <label className="block font-medium">
              Name
              <input
                name="name"
                required
                value={form.name}
                onChange={update}
                autoComplete="name"
                className={field}
              />
            </label>
            <label className="block font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                autoComplete="email"
                className={field}
              />
            </label>
            <label className="block font-medium">
              Message
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={update}
                className={field}
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3 font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}