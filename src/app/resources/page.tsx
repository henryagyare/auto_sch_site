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
  { label: "Uniform Policy", icon: "👕", href: "#uniform" },
  { label: "Transport Info", icon: "🚌", href: "#transport" },
];

const forms = [
  { title: "Absence Notification Form", description: "Notify the school of a planned or unexpected student absence.", tag: "General" },
  { title: "Medical Information Update", description: "Update allergy, medication, or emergency medical details.", tag: "Health" },
  { title: "Permission Slip — Field Trips", description: "Provide consent for your child to attend school excursions.", tag: "Trips" },
  { title: "Change of Contact Details", description: "Update parent, guardian, or emergency contact information.", tag: "Admin" },
  { title: "After-School Activity Registration", description: "Sign your child up for extracurricular clubs and activities.", tag: "Activities" },
  { title: "Transport / Bus Service Request", description: "Enrol in or amend the school transport service.", tag: "Transport" },
];

const handbook = [
  { title: "Parent & Student Handbook", description: "The definitive guide to school life — expectations, routines, and conduct.", year: "2025–2026" },
  { title: "Curriculum Guide", description: "An overview of subjects, assessments, and learning objectives by grade.", year: "2025–2026" },
  { title: "Uniform & Dress Code Policy", description: "Detailed guidelines on uniform requirements for all grade levels.", year: "2025–2026" },
];

const calendar = [
  { term: "Term 1", dates: "September 2 – November 28, 2025", note: "Parent–Teacher Conferences: October 17" },
  { term: "Term 2", dates: "January 5 – March 27, 2026", note: "Mid-Term Break: February 16–20" },
  { term: "Term 3", dates: "April 13 – July 3, 2026", note: "Sports Day: May 22 | Prize Giving: June 26" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
              For Families
            </p>
            <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
              Parent Resources
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.67] text-[#a7a7a7]">
              Everything you need in one place — handbooks, calendars, forms,
              menus, and more to help you stay connected to your child&apos;s
              school life.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Jump To
          </p>
          <h2 className="mt-3 mb-10 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            Quick access
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 rounded-[2px] p-5 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] transition-shadow hover:shadow-[rgba(118,185,0,0.3)_0px_0px_8px_0px]"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-base font-bold text-black">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Handbooks ── dark */}
      <section id="handbook" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Documents
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Handbooks &amp; guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {handbook.map((doc) => (
              <div
                key={doc.title}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#76b900]">
                  {doc.year}
                </p>
                <h3 className="mt-2 text-base font-bold text-white">{doc.title}</h3>
                <p className="mt-2 text-sm leading-[1.67] text-[#a7a7a7]">
                  {doc.description}
                </p>
                <button className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-[#76b900] transition-colors hover:text-[#1eaedb]">
                  Download PDF →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Term Calendar ── light */}
      <section id="calendar" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Academic Year 2025–2026
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            Term calendar
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {calendar.map((term) => (
              <div
                key={term.term}
                className="rounded-[2px] border-t-4 border-[#76b900] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                  {term.term}
                </p>
                <p className="mt-2 text-base font-bold text-black">{term.dates}</p>
                <p className="mt-3 text-sm leading-[1.67] text-[#757575]">{term.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lunch Menu ── dark */}
      <section id="menu" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Nutrition
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
                Lunch &amp; canteen menu
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#a7a7a7]">
                Our canteen provides healthy, balanced meals prepared fresh each
                day. Weekly menus are published at the start of each term. Meals
                cater to a variety of dietary requirements.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fresh meals prepared daily on site",
                  "Vegetarian and vegan options available",
                  "Allergen information clearly labelled",
                  "No nut-based products served",
                  "Seasonal menu updated each term",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a7a7a7]">
                    <span className="mt-1 h-[6px] w-[6px] shrink-0 rounded-full bg-[#76b900]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]">
                Download Current Menu
              </button>
            </div>
            <div className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Sample Week
              </p>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
                <div
                  key={day}
                  className={`flex items-center justify-between py-3 text-sm ${
                    i < 4 ? "border-b border-[#5e5e5e]" : ""
                  }`}
                >
                  <span className="font-bold text-white">{day}</span>
                  <span className="text-[#a7a7a7]">
                    {["Jollof Rice & Chicken", "Pasta Bolognese", "Grilled Fish & Rice", "Stir-Fry Noodles", "Fried Rice & Vegetables"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Forms ── light */}
      <section id="forms" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Administration
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            School forms
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.map((form) => (
              <div
                key={form.title}
                className="flex flex-col justify-between rounded-[2px] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <div>
                  <p className="mb-2 inline-block rounded-[2px] bg-[#76b900]/10 px-2 py-0.5 text-xs font-bold uppercase tracking-[0.1em] text-[#76b900]">
                    {form.tag}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-black">{form.title}</h3>
                  <p className="mt-2 text-sm leading-[1.67] text-[#757575]">{form.description}</p>
                </div>
                <button className="mt-4 self-start text-xs font-bold uppercase tracking-[0.1em] text-[#76b900] transition-colors hover:text-[#1eaedb]">
                  Download →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport ── dark */}
      <section id="transport" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Getting Here
          </p>
          <h2 className="mt-3 mb-6 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            School transport &amp; directions
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-[1.67] text-[#a7a7a7]">
            Action Academy operates a school bus service covering key routes
            across the city. Families can also arrange drop-off at our main
            gate during school hours.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Bus Routes", value: "8 active routes", sub: "Covering major residential areas" },
              { label: "Drop-Off Hours", value: "7:00 – 8:00 AM", sub: "Morning gate opens at 7:00 AM" },
              { label: "Pick-Up Hours", value: "3:00 – 4:00 PM", sub: "Staff on duty until 4:00 PM" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#76b900]">
                  {stat.label}
                </p>
                <p className="mt-2 text-[28px] font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-[#a7a7a7]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="border-l-4 border-[#76b900] pl-8">
            <h2 className="text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
              Need something else?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              If you can&apos;t find what you&apos;re looking for, our admin
              team is happy to assist. Reach out during school hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white"
              >
                Contact the School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
