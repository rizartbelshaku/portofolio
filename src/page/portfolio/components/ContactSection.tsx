import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "../../../components/Reveal";
import SectionHeading from "./SectionHeading";
import { contacts } from "../data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpzjkeq";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const validate = (form: FormData): Errors => {
  const errors: Errors = {};
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!subject) errors.subject = "Please add a subject.";
  if (message.length < 10) errors.message = "At least 10 characters, please.";
  return errors;
};

const contactIconPaths: Record<string, ReactNode> = {
  Email: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3.5" />
      <path d="m3.6 7.2 7.3 5.2a2 2 0 0 0 2.2 0l7.3-5.2" />
    </>
  ),
  Phone: (
    <>
      <path d="M6.6 3.5h2.6l1.4 3.6-2 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-2 3.6 1.4v2.6a2.2 2.2 0 0 1-2.4 2.2A16.2 16.2 0 0 1 4.4 5.9 2.2 2.2 0 0 1 6.6 3.5Z" />
      <path d="M14.5 4.6a5.5 5.5 0 0 1 4.4 4.4M14.9 8.1a2.2 2.2 0 0 1 1.4 1.4" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <path d="M7.6 10.5V17M7.6 7.4v.1M11.6 17v-6.5M11.6 13.6a2.7 2.7 0 0 1 5.4 0V17" />
    </>
  ),
  GitHub: (
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 4.5-1.8 4.5-5a4 4 0 0 0-1.1-2.8c.2-.7.2-1.7-.1-2.6 0 0-1.2-.4-3.4 1.2a10 10 0 0 0-5 0C7.2 3.7 6 4.1 6 4.1c-.3.9-.3 1.9-.1 2.6A4 4 0 0 0 4.8 9.5c0 3.2 1.7 4.7 4.5 5-.5.5-.5 1.1-.5 2V21" />
  ),
  Location: (
    <>
      <path d="M12 21c3.6-4.2 6-7 6-10.2A6 6 0 0 0 6 10.8C6 14 8.4 16.8 12 21Z" />
      <circle cx="12" cy="10.6" r="2.3" />
    </>
  ),
};

const ContactIcon = ({ label }: { label: string }) => (
  <span className="grid h-11 w-11 flex-none place-items-center rounded-[14px] border border-white/10 bg-[#141414] text-[#3AE58C]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {contactIconPaths[label]}
    </svg>
  </span>
);

const ContactSection = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ scrollMarginTop: "32px" }}>
      <SectionHeading
        title="Contact"
        icon={
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#3AE58C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 4 3 11l7 2.5L12.5 21 21 4Z" />
          </svg>
        }
      />

      <Reveal className="mb-6 text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-tight text-white">
        Let&apos;s Get in Touch!
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-3.5">
        <Reveal className="flex flex-col gap-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.target}
              rel="noopener"
              className="flex items-center gap-3.5 rounded-[18px] border border-white/10 bg-[#0C0C0C] p-4 text-white transition hover:translate-x-1 hover:border-white/15 hover:bg-[#101010]"
            >
              <ContactIcon label={c.label} />
              <span className="min-w-0">
                <span className="block text-[12.5px] text-white">{c.label}</span>
                <span className="mt-[3px] block break-words text-sm font-semibold text-white">{c.value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal
          index={1}
          className="rounded-[22px] border border-white/10 bg-[#0C0C0C] p-[clamp(16px,2.2vw,22px)]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] text-white">Full Name *</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-[14px] border border-white/10 bg-[#111] px-4 py-[14px] text-[14.5px] text-white outline-none focus:border-[#3AE58C] focus:ring-2 focus:ring-[#3AE58C]/25"
              />
              <span className="min-h-[14px] text-xs text-[#FF8A73]">{errors.name}</span>
            </label>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] text-white">Email *</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@email.com"
                className="w-full rounded-[14px] border border-white/10 bg-[#111] px-4 py-[14px] text-[14.5px] text-white outline-none focus:border-[#3AE58C] focus:ring-2 focus:ring-[#3AE58C]/25"
              />
              <span className="min-h-[14px] text-xs text-[#FF8A73]">{errors.email}</span>
            </label>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] text-white">Subject *</span>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="w-full rounded-[14px] border border-white/10 bg-[#111] px-4 py-[14px] text-[14.5px] text-white outline-none focus:border-[#3AE58C] focus:ring-2 focus:ring-[#3AE58C]/25"
              />
              <span className="min-h-[14px] text-xs text-[#FF8A73]">{errors.subject}</span>
            </label>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[12.5px] text-white">Message *</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about the role or project"
                className="w-full resize-y rounded-[14px] border border-white/10 bg-[#111] px-4 py-[14px] text-[14.5px] leading-[1.65] text-white outline-none focus:border-[#3AE58C] focus:ring-2 focus:ring-[#3AE58C]/25"
              />
              <span className="min-h-[14px] text-xs text-[#FF8A73]">{errors.message}</span>
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-[14px] bg-[#3AE58C] py-4 text-sm font-semibold text-[#04150C] transition hover:bg-[#6FF0AD] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="m-0 text-xs leading-[1.6] text-[#3AE58C]" role="status">
                Thanks — your message is on its way. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="m-0 text-xs leading-[1.6] text-[#FF8A73]" role="alert">
                Something went wrong sending that. Please try again or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
