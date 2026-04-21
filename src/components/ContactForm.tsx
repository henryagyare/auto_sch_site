"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactState } from "@/app/actions/contact";

const inputClass =
  "w-full rounded-lg border border-[#DDD4C5] bg-white px-4 py-3 text-sm text-[#1C1C2E] placeholder-[#9CA3AF] transition-colors focus:border-[#C9922A] focus:outline-none focus:ring-2 focus:ring-[#C9922A]/20";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContactForm,
    null
  );

  const baseCard =
    "rounded-2xl border border-[#DDD4C5] bg-white p-8 shadow-[0_4px_32px_rgba(14,33,72,0.07)] sm:p-10";

  if (state && "success" in state) {
    return (
      <div className={baseCard}>
        <div className="flex flex-col items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9922A]/10">
            <svg className="h-6 w-6 text-[#C9922A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C2E]">Message received</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              Thank you for getting in touch. A member of our team will respond within 2 school days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={baseCard}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Send a Message</p>
      <h2 className="mt-2 text-3xl font-bold text-[#1C1C2E]">General enquiry</h2>
      <div className="mt-3 mb-8 h-1 w-10 rounded bg-[#C9922A]" />

      {state && "error" in state && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="full_name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Full Name
            </label>
            <input id="full_name" name="full_name" type="text" autoComplete="name" required className={inputClass} placeholder="Jane Smith" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Email Address
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} placeholder="jane@example.com" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Phone <span className="font-normal normal-case text-[#9CA3AF]">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+1 555 000 0000" />
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Subject
            </label>
            <select id="subject" name="subject" className={inputClass}>
              <option value="">Select a subject</option>
              <option value="admissions">Admissions Enquiry</option>
              <option value="academics">Academic Information</option>
              <option value="events">Events &amp; Activities</option>
              <option value="fees">Tuition &amp; Fees</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Message
          </label>
          <textarea id="message" name="message" rows={5} required className={inputClass} placeholder="Tell us how we can help..." />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
