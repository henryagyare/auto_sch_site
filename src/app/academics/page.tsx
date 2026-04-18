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
  { name: "Arts", description: "Visual arts, music, drama, and design technology." },
  { name: "Technology", description: "Computer Science, digital literacy, and coding from Grade 1." },
];

const programs = [
  {
    label: "STEM",
    title: "Science & Technology",
    description:
      "Our STEM programme integrates science, technology, engineering, and mathematics in hands-on, inquiry-based learning experiences.",
    image: "/placeholder.jpg",
  },
  {
    label: "Arts",
    title: "Creative Arts",
    description:
      "Students explore visual art, music, theatre, and design — building creativity, self-expression, and artistic confidence.",
    image: "/placeholder.jpg",
  },
  {
    label: "Sports",
    title: "Physical Education & Sport",
    description:
      "A comprehensive sports programme promotes fitness, teamwork, discipline, and a lifelong love of physical activity.",
    image: "/placeholder.jpg",
  },
];

const support = [
  {
    title: "Academic Tutoring",
    description: "Individual and small-group support for students who need extra help in core subjects.",
  },
  {
    title: "Learning Enrichment",
    description: "Extension programmes for students performing above grade level, including competitions and research projects.",
  },
  {
    title: "Counselling Services",
    description: "Qualified counsellors available to support students' social-emotional wellbeing and academic confidence.",
  },
  {
    title: "Special Needs Support",
    description: "Inclusive learning plans and specialist support for students with diverse learning needs.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[480px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Learning & Growth
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                Academics
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                A rigorous, well-rounded curriculum designed to inspire every
                learner from K through Grade 12.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#programs"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
                >
                  Our Programmes
                </Link>
                <Link
                  href="/admissions"
                  className="rounded-[2px] border border-[#5e5e5e] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:border-white"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Classroom at Action Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Core Curriculum
          </p>
          <h2 className="mt-3 mb-4 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            Broad, balanced, and brilliant
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-[1.67] text-[#757575]">
            Our K-12 curriculum is built on a broad, balanced foundation that
            develops critical thinking, communication, and the love of learning
            across all disciplines.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-[2px] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <h3 className="border-b-2 border-[#76b900] pb-2 text-[20px] font-bold leading-[1.25] text-black">
                  {subject.name}
                </h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes ── dark */}
      <section id="programs" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Special Programmes
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Beyond the classroom
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((prog) => (
              <div
                key={prog.label}
                className="group rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] overflow-hidden transition-colors hover:border-[#76b900]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  <p className="absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                    {prog.label}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-bold leading-[1.25] text-white">
                    {prog.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.67] text-[#a7a7a7]">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extracurriculars ── light */}
      <section id="extracurriculars" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]">
              <Image
                src="/placeholder.jpg"
                alt="Extracurricular activities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                After School
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
                Extracurricular activities
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#757575]">
                We offer a rich selection of clubs, societies, and activities to
                help students discover their passions outside the classroom.
                From robotics to debate, chess to community service — there is
                something for everyone.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Robotics & Coding Club",
                  "Debate Society",
                  "Student Government",
                  "School Choir",
                  "Chess Club",
                  "Community Service",
                  "Drama & Theatre",
                  "School Newsletter",
                ].map((activity) => (
                  <li key={activity} className="flex items-center gap-3 text-sm text-[#757575]">
                    <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#76b900]" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Support ── dark */}
      <section id="support" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            We&apos;ve Got You
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Student support services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((item) => (
              <div
                key={item.title}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#a7a7a7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
