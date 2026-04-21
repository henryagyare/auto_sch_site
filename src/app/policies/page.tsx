import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies & Safeguarding | Action Academy",
  description:
    "Review Action Academy's school policies, safeguarding commitment, privacy notice, and key compliance documents.",
};

const policies = [
  {
    category: "Student Welfare",
    items: [
      { title: "Anti-Bullying Policy", updated: "August 2025", summary: "Our commitment to maintaining a safe, respectful environment free from all forms of bullying and harassment." },
      { title: "Attendance Policy", updated: "August 2025", summary: "Expectations for student attendance, managing absences, and supporting students with health challenges." },
      { title: "Behaviour & Discipline Policy", updated: "August 2025", summary: "A framework for expected conduct, restorative practices, and consequences for serious breaches." },
    ],
  },
  {
    category: "Health & Safety",
    items: [
      { title: "Health & Safety Policy", updated: "August 2025", summary: "Standards for maintaining a safe campus environment for students, staff, and visitors." },
      { title: "First Aid & Medical Policy", updated: "August 2025", summary: "Procedures for administering first aid, managing medical emergencies, and handling medications." },
      { title: "Infectious Disease Protocol", updated: "August 2025", summary: "Guidelines for managing illness outbreaks and communicable disease prevention on campus." },
    ],
  },
  {
    category: "Data & Privacy",
    items: [
      { title: "Privacy Notice", updated: "August 2025", summary: "How Action Academy collects, uses, stores, and protects personal data in compliance with applicable laws." },
      { title: "Data Protection Policy", updated: "August 2025", summary: "Our obligations as a data controller and the rights of students, parents, and staff." },
      { title: "Photography & Media Policy", updated: "August 2025", summary: "Guidelines on capturing, sharing, and using images or recordings of students and school activities." },
    ],
  },
  {
    category: "Academic",
    items: [
      { title: "Assessment & Reporting Policy", updated: "August 2025", summary: "How student learning is assessed, graded, and communicated to parents across all grade levels." },
      { title: "Special Educational Needs Policy", updated: "August 2025", summary: "Our approach to identifying, supporting, and monitoring students with diverse learning needs." },
      { title: "Academic Integrity Policy", updated: "August 2025", summary: "Expectations around honesty in academic work and consequences for plagiarism or dishonest conduct." },
    ],
  },
];

const safeguardingContacts = [
  { role: "Designated Safeguarding Lead", name: "Mrs. Akua Frimpong", contact: "Head of Counselling" },
  { role: "Deputy Safeguarding Lead", name: "Mr. Kofi Asante", contact: "Vice Principal — Academics" },
  { role: "Safeguarding Governor", name: "Board Representative", contact: "c/o School Administration" },
];

export default function PoliciesPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Governance</p>
            <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">
              Policies &amp; Safeguarding
            </h1>
            <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#94A3C8]">
              Transparency, accountability, and the safety of every child are core to how we
              operate at Action Academy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Safeguarding ── cream */}
      <section id="safeguarding" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Child Protection</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Our safeguarding commitment</h2>
          <div className="mt-4 mb-6 h-1 w-12 rounded bg-[#C9922A]" />
          <p className="mb-4 max-w-3xl text-base leading-relaxed text-[#6B7280]">
            Action Academy is committed to safeguarding and promoting the welfare of all children
            and young people in our care. We expect every member of staff, parent, and visitor
            to share this commitment. Our safeguarding policy is reviewed annually.
          </p>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-[#6B7280]">
            If you have a concern about a child&apos;s safety or welfare — whether it relates to
            a student at our school or elsewhere — please contact our Designated Safeguarding Lead
            immediately. Do not wait.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {safeguardingContacts.map((contact) => (
              <div key={contact.role} className="overflow-hidden rounded-xl border border-[#DDD4C5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <div className="bg-[#0E2148] px-6 py-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">{contact.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-base font-bold text-[#1C1C2E]">{contact.name}</p>
                  <p className="mt-1 text-sm text-[#6B7280]">{contact.contact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-[#C9922A] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-bold text-[#1C1C2E]">Urgent concern?</p>
            <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
              If a child is in immediate danger, call emergency services first (Ghana Emergency: 999 / 112),
              then notify the school.
            </p>
          </div>
        </div>
      </section>

      {/* ── Policies ── alternating navy/cream */}
      {policies.map((group, groupIndex) => (
        <section key={group.category} className={groupIndex % 2 === 0 ? "bg-[#0E2148]" : "bg-[#FAF8F4]"}>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">{group.category}</p>
            <h2 className={`mt-3 text-4xl font-bold ${groupIndex % 2 === 0 ? "text-white" : "text-[#1C1C2E]"}`}>
              {group.category} policies
            </h2>
            <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((policy) => (
                <div
                  key={policy.title}
                  className={`flex flex-col rounded-xl p-6 transition-all ${
                    groupIndex % 2 === 0
                      ? "border border-[#2A3F6A] bg-[#162B52] hover:border-[#C9922A]"
                      : "border border-[#DDD4C5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(14,33,72,0.08)]"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">
                    Updated {policy.updated}
                  </p>
                  <h3 className={`mt-2 flex-1 text-base font-bold ${groupIndex % 2 === 0 ? "text-white" : "text-[#1C1C2E]"}`}>
                    {policy.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${groupIndex % 2 === 0 ? "text-[#94A3C8]" : "text-[#6B7280]"}`}>
                    {policy.summary}
                  </p>
                  <button className="mt-4 self-start text-xs font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]">
                    Download PDF →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Complaints ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Feedback &amp; Concerns</p>
              <h2 className="mt-3 text-4xl font-bold text-white">Complaints procedure</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#94A3C8]">
                We take all concerns seriously and aim to resolve issues at the earliest stage.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: "01", title: "Speak to the Class Teacher", body: "Most concerns can be resolved quickly at classroom level." },
                { step: "02", title: "Contact the Head of Year", body: "If unresolved, escalate to the relevant Head of Year or Pastoral Lead." },
                { step: "03", title: "Formal Written Complaint", body: "Submit a written complaint to the Vice Principal. Acknowledged within 5 school days." },
                { step: "04", title: "Appeal to the Principal", body: "If you remain unsatisfied, appeal directly to the Principal for a final school-level review." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 rounded-xl border border-[#2A3F6A] bg-[#162B52] p-5">
                  <p className="shrink-0 text-xl font-bold text-[#C9922A]/40">{item.step}</p>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#94A3C8]">{item.body}</p>
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
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Have a question about our policies?</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  Our school office can provide further detail on any policy document or connect
                  you with the right member of staff.
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
