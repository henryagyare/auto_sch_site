import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Directory | Action Academy",
  description:
    "Meet the dedicated faculty and staff who make Action Academy exceptional. Browse our team by department.",
};

const departments = [
  {
    name: "Academic Leadership",
    staff: [
      { name: "Dr. Ama Mensah", role: "Principal", email: "principal@actionacademy.edu.gh" },
      { name: "Mr. Kofi Asante", role: "Vice Principal — Academics", email: "vp.academics@actionacademy.edu.gh" },
      { name: "Mrs. Efua Boateng", role: "Vice Principal — Pastoral", email: "vp.pastoral@actionacademy.edu.gh" },
    ],
  },
  {
    name: "Teaching Staff",
    staff: [
      { name: "Mr. Samuel Ofori", role: "Head of Mathematics", email: "" },
      { name: "Ms. Abena Darkwa", role: "Head of Sciences", email: "" },
      { name: "Mrs. Joyce Amponsah", role: "Head of English & Languages", email: "" },
      { name: "Mr. Kwame Acheampong", role: "Head of Humanities", email: "" },
      { name: "Ms. Nana Adjei", role: "Head of Creative Arts", email: "" },
      { name: "Mr. Emmanuel Tetteh", role: "Head of Technology", email: "" },
    ],
  },
  {
    name: "Student Support",
    staff: [
      { name: "Mrs. Akua Frimpong", role: "Head of Counselling", email: "" },
      { name: "Mr. Daniel Quaye", role: "Special Needs Coordinator", email: "" },
      { name: "Ms. Grace Asare", role: "School Librarian", email: "" },
    ],
  },
  {
    name: "Administration",
    staff: [
      { name: "Mrs. Abena Owusu", role: "Head of Admissions", email: "admissions@actionacademy.edu.gh" },
      { name: "Mr. Yaw Barimah", role: "Finance Officer", email: "" },
      { name: "Ms. Adwoa Mensah", role: "School Secretary", email: "secretary@actionacademy.edu.gh" },
    ],
  },
];

export default function StaffPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[520px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Our People</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">Staff Directory</h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                Meet the educators, counsellors, and administrators who make Action Academy the
                exceptional place it is.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/placeholder.jpg" alt="Action Academy staff" fill className="object-cover opacity-70" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── gold bar */}
      <section className="bg-[#C9922A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/20 lg:grid-cols-4">
            {[
              { value: "60+", label: "Teaching Staff" },
              { value: "15+", label: "Support Staff" },
              { value: "18:1", label: "Student–Teacher Ratio" },
              { value: "85%", label: "Postgraduate Qualified" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departments ── alternating cream/navy */}
      {departments.map((dept, deptIndex) => (
        <section key={dept.name} className={deptIndex % 2 === 0 ? "bg-[#FAF8F4]" : "bg-[#0E2148]"}>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Department</p>
            <h2 className={`mt-3 text-4xl font-bold ${deptIndex % 2 === 0 ? "text-[#1C1C2E]" : "text-white"}`}>
              {dept.name}
            </h2>
            <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dept.staff.map((member) => (
                <div
                  key={member.name}
                  className={`overflow-hidden rounded-xl transition-all ${
                    deptIndex % 2 === 0
                      ? "border border-[#DDD4C5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(14,33,72,0.1)]"
                      : "border border-[#2A3F6A] bg-[#162B52] hover:border-[#C9922A]"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image src="/placeholder.jpg" alt={member.name} fill className="object-cover opacity-50" />
                    <div className={`absolute inset-0 ${deptIndex % 2 === 0 ? "bg-gradient-to-t from-[#1C1C2E]/70 to-transparent" : "bg-gradient-to-t from-[#0E2148]/80 to-transparent"}`} />
                  </div>
                  <div className="p-5">
                    <p className={`text-base font-bold ${deptIndex % 2 === 0 ? "text-[#1C1C2E]" : "text-white"}`}>
                      {member.name}
                    </p>
                    <p className={`mt-1 text-sm ${deptIndex % 2 === 0 ? "text-[#6B7280]" : "text-[#94A3C8]"}`}>
                      {member.role}
                    </p>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="mt-2 block text-xs font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]">
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Join Us ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-white p-10 shadow-[0_4px_32px_rgba(14,33,72,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Interested in joining our team?</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  We are always looking for passionate, qualified educators and support staff.
                  Get in touch to learn about current opportunities.
                </p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
