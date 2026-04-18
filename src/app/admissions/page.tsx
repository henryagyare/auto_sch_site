import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Action Academy",
  description:
    "Begin your journey at Action Academy. Learn about our admissions process, grade intake, and how to apply.",
};

const reasons = [
  {
    title: "Academic Rigour",
    description:
      "A curriculum designed to challenge and inspire, with strong results and a track record of preparing students for higher education.",
  },
  {
    title: "Whole-Child Focus",
    description:
      "Beyond academics, we invest in arts, sports, leadership, and character development at every level.",
  },
  {
    title: "Caring Community",
    description:
      "Our small class sizes and dedicated staff ensure every student is known, supported, and celebrated.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit an Enquiry",
    description:
      "Complete our online enquiry form to express interest. Our admissions team will reach out within two business days.",
  },
  {
    number: "02",
    title: "School Tour",
    description:
      "Visit our campus, meet our staff, and get a feel for the Action Academy environment and culture.",
  },
  {
    number: "03",
    title: "Application Form",
    description:
      "Submit a completed application form with required documentation for the relevant grade level.",
  },
  {
    number: "04",
    title: "Assessment & Interview",
    description:
      "Selected applicants are invited for an assessment and informal interview with our academic team.",
  },
  {
    number: "05",
    title: "Offer & Enrolment",
    description:
      "Successful applicants receive an offer letter. Accept your place and complete the enrolment process.",
  },
  {
    number: "06",
    title: "Welcome to the Academy",
    description:
      "Attend our orientation programme and join the Action Academy community.",
  },
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
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[480px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Join Us
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                Admissions
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                We welcome applications for all grade levels. Discover whether
                Action Academy is the right fit for your family.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
                >
                  Enquire Now
                </Link>
                <Link
                  href="#process"
                  className="rounded-[2px] border border-[#5e5e5e] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:border-white"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Students at Action Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Why Action Academy
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            A school worth choosing
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[2px] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <h3 className="border-b-2 border-[#76b900] pb-2 text-[20px] font-bold leading-[1.25] text-black">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grade Levels ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Grade Intake
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            We accept students from K to 12
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gradeInfo.map((info) => (
              <div
                key={info.label}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                  {info.label}
                </p>
                <p className="mt-2 text-[20px] font-bold text-white">{info.grades}</p>
                <p className="mt-1 text-sm text-[#a7a7a7]">{info.ages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── light */}
      <section id="process" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Step by Step
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            How to apply
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#76b900] pt-6">
                <p className="text-xs font-bold text-[#76b900]">{step.number}</p>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.25] text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents ── dark */}
      <section id="fees" className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Requirements
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
                What to prepare
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#a7a7a7]">
                Ensure you have the following documents ready when completing
                your application form.
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
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a7a7a7]">
                    <span className="mt-1 h-[6px] w-[6px] shrink-0 rounded-full bg-[#76b900]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="School documents"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry CTA ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="border-l-4 border-[#76b900] pl-8">
            <h2 className="text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
              Have questions?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              Our admissions team is available Monday to Friday to assist with
              enquiries, school tours, and application support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
