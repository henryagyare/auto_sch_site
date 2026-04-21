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
      { title: "Attendance Policy", updated: "August 2025", summary: "Expectations for student attendance, managing absences, and supporting students with health-related challenges." },
      { title: "Behaviour & Discipline Policy", updated: "August 2025", summary: "A framework for expected conduct, restorative practices, and consequences for serious breaches." },
    ],
  },
  {
    category: "Health & Safety",
    items: [
      { title: "Health & Safety Policy", updated: "August 2025", summary: "Standards for maintaining a safe campus environment for students, staff, and visitors." },
      { title: "First Aid & Medical Policy", updated: "August 2025", summary: "Procedures for administering first aid, managing medical emergencies, and handling student medications." },
      { title: "Infectious Disease Protocol", updated: "August 2025", summary: "Guidelines for managing illness outbreaks and communicable disease prevention on campus." },
    ],
  },
  {
    category: "Data & Privacy",
    items: [
      { title: "Privacy Notice", updated: "August 2025", summary: "How Action Academy collects, uses, stores, and protects personal data in compliance with applicable laws." },
      { title: "Data Protection Policy", updated: "August 2025", summary: "Our obligations as a data controller and the rights of students, parents, and staff regarding their data." },
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
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
              Governance
            </p>
            <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
              Policies &amp; Safeguarding
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.67] text-[#a7a7a7]">
              Transparency, accountability, and the safety of every child are
              core to how we operate at Action Academy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Safeguarding commitment ── light */}
      <section id="safeguarding" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Child Protection
          </p>
          <h2 className="mt-3 mb-6 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            Our safeguarding commitment
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-[1.67] text-[#757575]">
            Action Academy is committed to safeguarding and promoting the
            welfare of all children and young people in our care. We expect
            every member of staff, parent, and visitor to share this
            commitment. Our safeguarding policy is reviewed annually.
          </p>
          <p className="mb-12 max-w-3xl text-base leading-[1.67] text-[#757575]">
            If you have a concern about a child&apos;s safety or welfare —
            whether it relates to a student at our school or elsewhere — please
            contact our Designated Safeguarding Lead immediately. Do not wait.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {safeguardingContacts.map((contact) => (
              <div
                key={contact.role}
                className="rounded-[2px] border-t-4 border-[#76b900] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#76b900]">
                  {contact.role}
                </p>
                <p className="mt-2 text-base font-bold text-black">{contact.name}</p>
                <p className="mt-1 text-sm text-[#757575]">{contact.contact}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2px] border border-[#76b900] bg-[#76b900]/5 p-6">
            <p className="text-sm font-bold text-black">
              Urgent concern?
            </p>
            <p className="mt-1 text-sm leading-[1.67] text-[#757575]">
              If a child is in immediate danger, call emergency services first (Ghana Emergency: 999 / 112),
              then notify the school.
            </p>
          </div>
        </div>
      </section>

      {/* ── Policies by category ── alternating */}
      {policies.map((group, groupIndex) => (
        <section
          key={group.category}
          className={groupIndex % 2 === 0 ? "bg-black" : "bg-white"}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
              {group.category}
            </p>
            <h2
              className={`mt-3 mb-12 text-[24px] font-bold leading-[1.25] sm:text-[36px] ${
                groupIndex % 2 === 0 ? "text-white" : "text-black"
              }`}
            >
              {group.category} policies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((policy) => (
                <div
                  key={policy.title}
                  className={`flex flex-col rounded-[2px] p-6 ${
                    groupIndex % 2 === 0
                      ? "border border-[#5e5e5e] bg-[#1a1a1a] hover:border-[#76b900]"
                      : "shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
                  } transition-colors`}
                >
                  <div className="flex-1">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.1em] ${
                        groupIndex % 2 === 0 ? "text-[#76b900]" : "text-[#76b900]"
                      }`}
                    >
                      Updated {policy.updated}
                    </p>
                    <h3
                      className={`mt-2 text-base font-bold ${
                        groupIndex % 2 === 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {policy.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-[1.67] ${
                        groupIndex % 2 === 0 ? "text-[#a7a7a7]" : "text-[#757575]"
                      }`}
                    >
                      {policy.summary}
                    </p>
                  </div>
                  <button
                    className="mt-4 self-start text-xs font-bold uppercase tracking-[0.1em] text-[#76b900] transition-colors hover:text-[#1eaedb]"
                  >
                    Download PDF →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Complaints ── light (after 4 groups, index 3 is dark, next is light) */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Feedback &amp; Concerns
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
                Complaints procedure
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#a7a7a7]">
                We take all concerns seriously and aim to resolve issues at
                the earliest stage. If you have a concern, please follow the
                steps outlined below.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "01", title: "Speak to the Class Teacher", body: "Most concerns can be resolved quickly at classroom level. Contact your child's teacher as a first step." },
                { step: "02", title: "Contact the Head of Year", body: "If the matter is unresolved, escalate to the relevant Head of Year or Pastoral Lead." },
                { step: "03", title: "Formal Written Complaint", body: "Submit a written complaint to the Vice Principal. All formal complaints are acknowledged within 5 school days." },
                { step: "04", title: "Appeal to the Principal", body: "If you remain unsatisfied, you may appeal directly to the Principal for a final school-level review." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-5"
                >
                  <p className="shrink-0 text-xs font-bold text-[#76b900]">{item.step}</p>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-[1.67] text-[#a7a7a7]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="border-l-4 border-[#76b900] pl-8">
            <h2 className="text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
              Have a question about our policies?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              Our school office can provide further detail on any policy
              document or connect you with the right member of staff.
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
