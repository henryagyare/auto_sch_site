import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Action Academy",
  description:
    "Begin your journey at Action Academy. Learn about our admissions process, grade intake, and how to apply.",
};

const HERO_IMG = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80";
const DOCS_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80";

const reasons = [
  { title: "Academic Rigour", description: "A curriculum designed to challenge and inspire, with strong results and a track record of preparing students for higher education." },
  { title: "Whole-Child Focus", description: "Beyond academics, we invest in arts, sports, leadership, and character development at every level." },
  { title: "Caring Community", description: "Small class sizes and dedicated staff ensure every student is known, supported, and celebrated." },
];

const steps = [
  { number: "01", title: "Submit an Enquiry", description: "Complete our online enquiry form. Our admissions team will respond within two business days." },
  { number: "02", title: "School Tour", description: "Visit campus, meet staff, and experience the Action Academy environment first-hand." },
  { number: "03", title: "Application Form", description: "Submit a completed application form with required documentation for the relevant grade." },
  { number: "04", title: "Assessment & Interview", description: "Selected applicants are invited for an assessment and informal interview." },
  { number: "05", title: "Offer & Enrolment", description: "Successful applicants receive an offer letter. Accept your place and complete enrolment." },
  { number: "06", title: "Welcome to the Academy", description: "Attend our orientation programme and join the Action Academy community." },
];

const gradeInfo = [
  { label: "Foundation", grades: "Pre-K – Grade 1", ages: "Ages 4–7" },
  { label: "Junior School", grades: "Grades 2–5", ages: "Ages 7–11" },
  { label: "Middle School", grades: "Grades 6–8", ages: "Ages 11–14" },
  { label: "Senior School", grades: "Grades 9–12", ages: "Ages 14–18" },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[520px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Join Us</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">Admissions</h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                We welcome applications for all grade levels. Discover whether Action Academy
                is the right fit for your family.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                  Enquire Now
                </Link>
                <Link href="#process" className="rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10">
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src={HERO_IMG} alt="Students at Action Academy" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Why Action Academy</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">A school worth choosing</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-xl border border-[#DDD4C5] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-bold text-[#1C1C2E]">{reason.title}</h3>
                <div className="mt-3 h-0.5 w-8 rounded bg-[#C9922A]" />
                <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grade Levels ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Grade Intake</p>
          <h2 className="mt-3 text-4xl font-bold text-white">We accept students from K to 12</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gradeInfo.map((info) => (
              <div key={info.label} className="rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A]">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C9922A]">{info.label}</p>
                <p className="mt-3 text-2xl font-bold text-white">{info.grades}</p>
                <p className="mt-1 text-sm text-[#94A3C8]">{info.ages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── cream */}
      <section id="process" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Step by Step</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">How to apply</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-xl border border-[#DDD4C5] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <p className="text-3xl font-bold text-[#C9922A]/30">{step.number}</p>
                <h3 className="mt-2 text-lg font-bold text-[#1C1C2E]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents ── navy */}
      <section id="fees" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Requirements</p>
              <h2 className="mt-3 text-4xl font-bold text-white">What to prepare</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#94A3C8]">
                Ensure you have the following documents ready when completing your application form.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Completed application form",
                  "Copy of student's birth certificate",
                  "Most recent school report / transcript",
                  "Passport-size photograph",
                  "Copy of parent/guardian ID",
                  "Immunisation records",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#94A3C8]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9922A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={DOCS_IMG} alt="School documents and admissions" fill className="object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0E2148]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-white p-10 shadow-[0_4px_32px_rgba(14,33,72,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Have questions?</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  Our admissions team is available Monday to Friday to help with enquiries and applications.
                </p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
