import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Resources | Action Academy",
  description:
    "Access school handbooks, term calendars, lunch menus, forms, and other useful resources for Action Academy families.",
};

const quickLinks = [
  { label: "School Handbook", icon: "📘", href: "#handbook" },
  { label: "Term Calendar", icon: "📅", href: "#calendar" },
  { label: "Lunch Menu", icon: "🍽️", href: "#menu" },
  { label: "School Forms", icon: "📄", href: "#forms" },
  { label: "Uniform Policy", icon: "👔", href: "#handbook" },
  { label: "Transport Info", icon: "🚌", href: "#transport" },
];

const handbook = [
  { title: "Parent & Student Handbook", description: "The definitive guide to school life — expectations, routines, and conduct.", year: "2025–2026" },
  { title: "Curriculum Guide", description: "An overview of subjects, assessments, and learning objectives by grade.", year: "2025–2026" },
  { title: "Uniform & Dress Code Policy", description: "Detailed guidelines on uniform requirements for all grade levels.", year: "2025–2026" },
];

const calendar = [
  { term: "Term 1", dates: "September 2 – November 28, 2025", note: "Parent–Teacher Conferences: October 17" },
  { term: "Term 2", dates: "January 5 – March 27, 2026", note: "Mid-Term Break: February 16–20" },
  { term: "Term 3", dates: "April 13 – July 3, 2026", note: "Sports Day: May 22 · Prize Giving: June 26" },
];

const forms = [
  { title: "Absence Notification Form", description: "Notify the school of a planned or unexpected student absence.", tag: "General" },
  { title: "Medical Information Update", description: "Update allergy, medication, or emergency medical details.", tag: "Health" },
  { title: "Permission Slip — Field Trips", description: "Provide consent for your child to attend school excursions.", tag: "Trips" },
  { title: "Change of Contact Details", description: "Update parent, guardian, or emergency contact information.", tag: "Admin" },
  { title: "After-School Activity Registration", description: "Sign your child up for extracurricular clubs and activities.", tag: "Activities" },
  { title: "Transport / Bus Service Request", description: "Enrol in or amend the school transport service.", tag: "Transport" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">For Families</p>
            <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">Parent Resources</h1>
            <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#94A3C8]">
              Everything you need in one place — handbooks, calendars, forms, menus, and more to
              help you stay connected to your child&apos;s school life.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Jump To</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Quick access</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 rounded-xl border border-[#DDD4C5] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all hover:border-[#C9922A] hover:shadow-[0_4px_20px_rgba(201,146,42,0.12)]"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm font-semibold text-[#1C1C2E]">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Handbooks ── navy */}
      <section id="handbook" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Documents</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Handbooks &amp; guides</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {handbook.map((doc) => (
              <div key={doc.title} className="flex flex-col rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">{doc.year}</p>
                <h3 className="mt-2 text-base font-bold text-white">{doc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#94A3C8]">{doc.description}</p>
                <button className="mt-5 self-start text-xs font-semibold text-[#C9922A] transition-colors hover:text-[#F5E6CC]">
                  Download PDF →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Term Calendar ── cream */}
      <section id="calendar" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Academic Year 2025–2026</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Term calendar</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-5 lg:grid-cols-3">
            {calendar.map((term) => (
              <div key={term.term} className="overflow-hidden rounded-xl border border-[#DDD4C5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <div className="bg-[#0E2148] px-6 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">{term.term}</p>
                </div>
                <div className="p-6">
                  <p className="text-base font-bold text-[#1C1C2E]">{term.dates}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{term.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lunch Menu ── navy */}
      <section id="menu" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Nutrition</p>
              <h2 className="mt-3 text-4xl font-bold text-white">Lunch &amp; canteen menu</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#94A3C8]">
                Our canteen provides healthy, balanced meals prepared fresh each day. Weekly menus
                are published at the start of each term with options for all dietary requirements.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fresh meals prepared daily on site",
                  "Vegetarian and vegan options available",
                  "Allergen information clearly labelled",
                  "No nut-based products served",
                  "Seasonal menu updated each term",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#94A3C8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9922A]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                Download Current Menu
              </button>
            </div>
            <div className="rounded-xl border border-[#2A3F6A] bg-[#162B52] overflow-hidden">
              <div className="bg-[#C9922A]/10 border-b border-[#2A3F6A] px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">Sample Week</p>
              </div>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
                <div key={day} className={`flex items-center justify-between px-6 py-4 text-sm ${i < 4 ? "border-b border-[#2A3F6A]" : ""}`}>
                  <span className="font-semibold text-white">{day}</span>
                  <span className="text-[#94A3C8]">
                    {["Jollof Rice & Chicken", "Pasta Bolognese", "Grilled Fish & Rice", "Stir-Fry Noodles", "Fried Rice & Vegetables"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Forms ── cream */}
      <section id="forms" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Administration</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">School forms</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.map((form) => (
              <div key={form.title} className="flex flex-col rounded-xl border border-[#DDD4C5] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <p className="inline-block self-start rounded-full bg-[#F5E6CC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#A67820]">
                  {form.tag}
                </p>
                <h3 className="mt-3 text-base font-bold text-[#1C1C2E]">{form.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7280]">{form.description}</p>
                <button className="mt-4 self-start text-xs font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]">
                  Download →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport ── navy */}
      <section id="transport" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Getting Here</p>
          <h2 className="mt-3 text-4xl font-bold text-white">School transport &amp; directions</h2>
          <div className="mt-4 mb-10 h-1 w-12 rounded bg-[#C9922A]" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#94A3C8]">
            Action Academy operates a school bus service covering key routes across the city.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Bus Routes", value: "8", sub: "Covering major residential areas" },
              { label: "Drop-Off Hours", value: "7–8 AM", sub: "Morning gate opens at 7:00 AM" },
              { label: "Pick-Up Hours", value: "3–4 PM", sub: "Staff on duty until 4:00 PM" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">{stat.label}</p>
                <p className="mt-3 text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-[#94A3C8]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-white p-10 shadow-[0_4px_32px_rgba(14,33,72,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Need something else?</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  If you can&apos;t find what you&apos;re looking for, our admin team is happy to help.
                </p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                Contact the School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
