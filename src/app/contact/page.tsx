import Image from "next/image";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";
const MAP_IMG = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80";

export const metadata: Metadata = {
  title: "Contact Us | Action Academy",
  description:
    "Get in touch with Action Academy. Contact our admissions team, front office, or send a general enquiry.",
};

export default async function ContactPage() {
  const supabase = await createClient();
  const { data: settings } = await supabase
    .from("site_settings")
    .select("school_name,address,contact_email,contact_phone")
    .maybeSingle();

  const address = settings?.address ?? "123 Academy Drive, Education City";
  const email = settings?.contact_email ?? "info@actionacademy.edu";
  const phone = settings?.contact_phone ?? "+1 (555) 000-0000";

  const inputClass =
    "w-full rounded-lg border border-[#DDD4C5] bg-white px-4 py-3 text-sm text-[#1C1C2E] placeholder-[#9CA3AF] transition-colors focus:border-[#C9922A] focus:outline-none focus:ring-2 focus:ring-[#C9922A]/20";

  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[440px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">We&apos;re Here</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">Contact Us</h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                Whether you have a question about admissions, academics, or general school matters —
                we&apos;d love to hear from you.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src={HERO_IMG} alt="Action Academy front office" fill className="object-cover opacity-70" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <div className="rounded-2xl border border-[#DDD4C5] bg-white p-8 shadow-[0_4px_32px_rgba(14,33,72,0.07)] sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Send a Message</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1C1C2E]">General enquiry</h2>
              <div className="mt-3 mb-8 h-1 w-10 rounded bg-[#C9922A]" />
              <form className="space-y-5" noValidate>
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
                      <option value="events">Events & Activities</option>
                      <option value="fees">Tuition & Fees</option>
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
                  className="w-full rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820] sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Find Us</p>
                <h2 className="mt-2 text-3xl font-bold text-[#1C1C2E]">Get in touch</h2>
                <div className="mt-3 h-1 w-10 rounded bg-[#C9922A]" />
              </div>

              {[
                { label: "Address", value: address, href: undefined },
                { label: "Email", value: email, href: `mailto:${email}` },
                { label: "Phone", value: phone, href: `tel:${phone}` },
                { label: "Office Hours", value: "Mon – Fri · 7:30 AM – 4:30 PM", href: undefined },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#DDD4C5] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm font-medium text-[#1C1C2E] transition-colors hover:text-[#C9922A]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-[#1C1C2E]">{item.value}</p>
                  )}
                </div>
              ))}

              {/* Map */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <Image src={MAP_IMG} alt="School location map" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="rounded-lg bg-[#0E2148]/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    View on Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Departments</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Direct contacts</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { dept: "Admissions Office", desc: "Applications, school tours, and intake queries.", contact: "admissions" },
              { dept: "Academic Affairs", desc: "Curriculum, timetables, and academic concerns.", contact: "academics" },
              { dept: "Finance Office", desc: "Tuition, fees, and payment enquiries.", contact: "finance" },
              { dept: "Student Support", desc: "Counselling, welfare, and learning support.", contact: "support" },
              { dept: "Sports & Activities", desc: "Sports teams, clubs, and extracurriculars.", contact: "sports" },
              { dept: "IT Help Desk", desc: "Student portal, device, and tech support.", contact: "it" },
            ].map((dept) => (
              <div key={dept.dept} className="rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A]">
                <h3 className="text-base font-bold text-white">{dept.dept}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3C8]">{dept.desc}</p>
                <a
                  href={`mailto:${dept.contact}@actionacademy.edu.gh`}
                  className="mt-3 block text-xs font-semibold text-[#C9922A] transition-colors hover:text-[#F5E6CC]"
                >
                  {dept.contact}@actionacademy.edu.gh
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
