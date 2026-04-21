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
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[480px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Our People
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                Staff Directory
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                Meet the educators, counsellors, and administrators who make
                Action Academy the exceptional place it is.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Action Academy staff"
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "60+", label: "Teaching Staff" },
              { value: "15+", label: "Support Staff" },
              { value: "18:1", label: "Student–Teacher Ratio" },
              { value: "85%", label: "Staff with Postgraduate Qualifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2px] p-6 text-center shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
              >
                <p className="text-[36px] font-bold text-[#76b900]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#757575]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departments ── alternating */}
      {departments.map((dept, deptIndex) => (
        <section
          key={dept.name}
          className={deptIndex % 2 === 0 ? "bg-black" : "bg-white"}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
              Department
            </p>
            <h2
              className={`mt-3 mb-12 text-[24px] font-bold leading-[1.25] sm:text-[36px] ${
                deptIndex % 2 === 0 ? "text-white" : "text-black"
              }`}
            >
              {dept.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dept.staff.map((member) => (
                <div
                  key={member.name}
                  className={`rounded-[2px] overflow-hidden ${
                    deptIndex % 2 === 0
                      ? "border border-[#5e5e5e] bg-[#1a1a1a] hover:border-[#76b900]"
                      : "shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]"
                  } transition-colors`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/placeholder.jpg"
                      alt={member.name}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div
                      className={`absolute inset-0 ${
                        deptIndex % 2 === 0
                          ? "bg-gradient-to-t from-[#1a1a1a] to-transparent"
                          : "bg-gradient-to-t from-black/60 to-transparent"
                      }`}
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className={`text-base font-bold ${
                        deptIndex % 2 === 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {member.name}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        deptIndex % 2 === 0 ? "text-[#a7a7a7]" : "text-[#757575]"
                      }`}
                    >
                      {member.role}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-2 block text-xs text-[#76b900] transition-colors hover:text-[#1eaedb]"
                      >
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

      {/* ── Join Us ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="border-l-4 border-[#76b900] pl-8">
            <h2 className="text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
              Interested in joining our team?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              We are always looking for passionate, qualified educators and
              support staff. Get in touch to learn about current opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white"
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
