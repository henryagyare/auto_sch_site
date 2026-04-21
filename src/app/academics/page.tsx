import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Action Academy",
  description:
    "Explore Action Academy's curriculum, academic programmes, and our approach to learning excellence.",
};

const subjects = [
  { name: "Mathematics", description: "From foundational numeracy to advanced calculus and statistics." },
  { name: "Sciences", description: "Biology, Chemistry, Physics, and integrated STEM programming." },
  { name: "Languages", description: "English Literature, Creative Writing, and modern languages." },
  { name: "Humanities", description: "History, Geography, Social Studies, and critical thinking." },
  { name: "Creative Arts", description: "Visual arts, music, drama, and design technology." },
  { name: "Technology", description: "Computer Science, digital literacy, and coding from Grade 1." },
];

const programs = [
  {
    label: "STEM",
    title: "Science & Technology",
    description:
      "Our STEM programme integrates science, technology, engineering, and mathematics in hands-on, inquiry-based learning experiences.",
  },
  {
    label: "Arts",
    title: "Creative Arts",
    description:
      "Students explore visual art, music, theatre, and design — building creativity, self-expression, and artistic confidence.",
  },
  {
    label: "Sports",
    title: "Physical Education",
    description:
      "A comprehensive sports programme promotes fitness, teamwork, discipline, and a lifelong love of physical activity.",
  },
];

const support = [
  { title: "Academic Tutoring", description: "Individual and small-group support for students who need extra help in core subjects." },
  { title: "Learning Enrichment", description: "Extension programmes for high-achieving students, including competitions and research projects." },
  { title: "Counselling Services", description: "Qualified counsellors supporting students' social-emotional wellbeing and academic confidence." },
  { title: "Special Needs Support", description: "Inclusive learning plans and specialist support for students with diverse learning needs." },
];

export default function AcademicsPage() {
  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[520px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Learning & Growth</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">Academics</h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                A rigorous, well-rounded curriculum designed to inspire every learner from K through Grade 12.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="#programs" className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                  Our Programmes
                </Link>
                <Link href="/admissions" className="rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/placeholder.jpg" alt="Classroom at Action Academy" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Core Curriculum</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Broad, balanced, and brilliant</h2>
          <div className="mt-4 mb-4 h-1 w-12 rounded bg-[#C9922A]" />
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#6B7280]">
            Our K-12 curriculum is built on a broad, balanced foundation that develops critical thinking,
            communication, and the love of learning across all disciplines.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div key={subject.name} className="rounded-xl border border-[#DDD4C5] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                <h3 className="text-lg font-bold text-[#1C1C2E]">{subject.name}</h3>
                <div className="mt-2 h-0.5 w-8 rounded bg-[#C9922A]" />
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes ── navy */}
      <section id="programs" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Special Programmes</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Beyond the classroom</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((prog) => (
              <div key={prog.label} className="group overflow-hidden rounded-xl border border-[#2A3F6A] bg-[#162B52] transition-all hover:border-[#C9922A]">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image src="/placeholder.jpg" alt={prog.title} fill className="object-cover opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162B52] to-transparent" />
                  <p className="absolute top-4 left-4 rounded-full bg-[#C9922A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {prog.label}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{prog.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3C8]">{prog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extracurriculars ── cream */}
      <section id="extracurriculars" className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(14,33,72,0.12)]">
              <Image src="/placeholder.jpg" alt="Extracurricular activities" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">After School</p>
              <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">Extracurricular activities</h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                We offer a rich selection of clubs, societies, and activities to help students discover
                their passions outside the classroom. From robotics to debate, chess to community service.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {[
                  "Robotics & Coding Club", "Debate Society",
                  "Student Government", "School Choir",
                  "Chess Club", "Community Service",
                  "Drama & Theatre", "School Newsletter",
                ].map((activity) => (
                  <li key={activity} className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9922A]" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Support ── navy */}
      <section id="support" className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">We&apos;ve Got You</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Student support services</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />
          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A]">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3C8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
