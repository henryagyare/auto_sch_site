import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Action Academy",
  description:
    "Learn about Action Academy's mission, values, history, and the people who make our school community exceptional.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80";
const MISSION_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";

const values = [
  {
    title: "Academic Excellence",
    description:
      "We hold ourselves to the highest standards, fostering rigorous inquiry, intellectual curiosity, and a genuine love of learning.",
  },
  {
    title: "Character & Integrity",
    description:
      "We develop principled, empathetic individuals who lead with honesty, take responsibility, and act with courage.",
  },
  {
    title: "Inclusive Community",
    description:
      "We celebrate diversity and ensure every student, family, and staff member feels seen, valued, and supported.",
  },
  {
    title: "Innovation & Growth",
    description:
      "We embrace evolving best practices to prepare students for a rapidly changing and interconnected world.",
  },
];

const pillars = [
  {
    label: "01",
    title: "Holistic Development",
    description:
      "We balance academic rigour with social-emotional learning, sports, arts, and community service to develop the whole person.",
  },
  {
    label: "02",
    title: "Expert Educators",
    description:
      "Our teachers are passionate professionals committed to inspiring every student through thoughtful, responsive instruction.",
  },
  {
    label: "03",
    title: "Safe Environment",
    description:
      "We maintain a nurturing, structured environment where students feel safe to explore, take risks, and grow.",
  },
];

const teamRoles = [
  { initials: "AM", name: "Principal", role: "Academic Leadership", bg: "from-[#0E2148] to-[#1E3A70]" },
  { initials: "KA", name: "Head of Curriculum", role: "Teaching & Learning", bg: "from-[#162B52] to-[#254882]" },
  { initials: "AF", name: "Student Support", role: "Wellbeing & Guidance", bg: "from-[#1A3060] to-[#2A4878]" },
  { initials: "AB", name: "Admissions Office", role: "Enrolment & Welcome", bg: "from-[#0E2148] to-[#1E3A70]" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[520px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Our Story</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">
                About Action Academy
              </h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                A school built on the conviction that every child deserves an
                exceptional education in a community that cares.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src={HERO_IMG} alt="Action Academy campus" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── cream */}
      <section id="mission" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Purpose</p>
              <h2 className="mt-3 text-4xl font-bold leading-snug text-[#1C1C2E]">Our Mission</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                We are committed to academic excellence, character growth, and a welcoming school
                community. Through world-class teaching and a rich co-curricular programme, we
                equip every student with the knowledge, skills, and values to make a positive
                difference in the world.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
                Our vision is to be a leading centre of K-12 education — one where every learner
                is known by name and empowered to reach their full potential.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(14,33,72,0.12)]">
              <Image src={MISSION_IMG} alt="Students in classroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">What We Stand For</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Our core values</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A] hover:shadow-[0_4px_20px_rgba(201,146,42,0.12)]"
              >
                <h3 className="text-base font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3C8]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">How We Teach</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Our approach to education</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="rounded-xl border border-[#DDD4C5] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <p className="text-xs font-bold tracking-wider text-[#C9922A]">{pillar.label}</p>
                <h3 className="mt-3 text-xl font-bold text-[#1C1C2E]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staff preview ── navy */}
      <section id="staff" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Our People</p>
              <h2 className="mt-3 text-4xl font-bold text-white">Meet our dedicated team</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#94A3C8]">
                Our faculty and staff bring expertise, passion, and genuine care to their work.
                They are the heart of everything Action Academy stands for.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/staff" className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                  View Staff Directory
                </Link>
                <Link href="/contact" className="rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {teamRoles.map((person) => (
                <div key={person.name} className="overflow-hidden rounded-xl">
                  <div className={`flex aspect-square w-full items-center justify-center bg-gradient-to-br ${person.bg}`}>
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white/20">
                      {person.initials}
                    </span>
                  </div>
                  <div className="bg-[#162B52] p-4">
                    <p className="text-sm font-bold text-white">{person.name}</p>
                    <p className="text-xs text-[#C9922A]">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-white p-10 shadow-[0_4px_32px_rgba(14,33,72,0.08)]">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Ready to learn more?</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  We&apos;d love to welcome you to our school. Start your admissions journey today.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/admissions" className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                  Admissions
                </Link>
                <Link href="/contact" className="rounded-lg border-2 border-[#DDD4C5] px-6 py-3 text-sm font-semibold text-[#1C1C2E] transition-colors hover:border-[#C9922A] hover:text-[#C9922A]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
