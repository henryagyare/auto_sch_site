import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Action Academy",
  description:
    "Learn about Action Academy's mission, values, history, and the people who make our school community exceptional.",
};

const values = [
  {
    title: "Academic Excellence",
    description:
      "We hold ourselves to the highest standards, fostering a culture of rigorous inquiry, intellectual curiosity, and continuous improvement.",
  },
  {
    title: "Character & Integrity",
    description:
      "We develop principled, empathetic individuals who lead with honesty, take responsibility, and act with courage in all they do.",
  },
  {
    title: "Inclusive Community",
    description:
      "We celebrate diversity and ensure every student, family, and staff member feels seen, valued, and supported.",
  },
  {
    title: "Innovation & Growth",
    description:
      "We embrace new ideas and evolving best practices to prepare students for a rapidly changing world.",
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

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[480px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Our Story
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                About Action Academy
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                A school built on the conviction that every child deserves an
                exceptional education in a community that cares.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Action Academy campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── light */}
      <section id="mission" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Purpose
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#757575]">
                We are committed to academic excellence, character growth, and a
                welcoming school community. Through world-class teaching and a
                rich co-curricular programme, we equip every student with the
                knowledge, skills, and values to make a positive difference.
              </p>
              <p className="mt-4 text-base leading-[1.67] text-[#757575]">
                Our vision is to be a leading centre of K-12 education — one
                where every learner is known by name and empowered to reach
                their full potential.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]">
              <Image
                src="/placeholder.jpg"
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            What We Stand For
          </p>
          <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Our core values
          </h2>
          <p className="mt-4 mb-12 max-w-2xl text-base leading-[1.67] text-[#a7a7a7]">
            These principles guide every decision we make — from curriculum
            design to how we treat one another in the hallways.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <h3 className="text-base font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#a7a7a7]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            How We Teach
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            Our approach to education
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="border-t-2 border-[#76b900] pt-6">
                <p className="text-xs font-bold text-[#76b900]">{pillar.label}</p>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.25] text-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staff preview ── dark */}
      <section id="staff" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Our People
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
                Meet our dedicated team
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#a7a7a7]">
                Our faculty and staff bring expertise, passion, and genuine care
                to their work. They are the heart of everything Action Academy
                stands for.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Principal", role: "Academic Leadership" },
                { name: "Head of Curriculum", role: "Teaching & Learning" },
                { name: "Student Support", role: "Wellbeing & Guidance" },
                { name: "Admissions Office", role: "Enrolment & Welcome" },
              ].map((person) => (
                <div
                  key={person.name}
                  className="relative overflow-hidden rounded-[2px] bg-[#1a1a1a]"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/placeholder.jpg"
                      alt={person.name}
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm font-bold text-white">{person.name}</p>
                    <p className="text-xs text-[#a7a7a7]">{person.role}</p>
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
              Ready to learn more?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              We&apos;d love to welcome you to our school. Contact our team or
              start your admissions journey today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white"
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className="rounded-[2px] border border-black px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
