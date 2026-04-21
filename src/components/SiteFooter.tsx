import Link from "next/link";

const footerSections = [
  {
    heading: "Academics",
    links: [
      { label: "Curriculum", href: "/academics" },
      { label: "Programmes", href: "/academics#programs" },
      { label: "Student Support", href: "/academics#support" },
      { label: "Extracurriculars", href: "/academics#extracurriculars" },
    ],
  },
  {
    heading: "School",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Staff Directory", href: "/staff" },
      { label: "Policies", href: "/policies" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "News & Events", href: "/news" },
      { label: "Parent Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "Safeguarding", href: "/policies#safeguarding" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Grade Levels", href: "/admissions#grade-levels" },
      { label: "Requirements", href: "/admissions#fees" },
      { label: "Enquire Now", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0E2148] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-1 w-16 bg-[#C9922A]" />

        {/* Main grid */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
              Action Academy
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9922A]">
              Excellence in Education
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#94A3C8]">
              A warm, rigorous learning environment where every student is
              known by name and empowered to reach their full potential.
            </p>
            <Link
              href="/admissions"
              className="mt-6 inline-block rounded-lg bg-[#C9922A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]"
            >
              Apply Now
            </Link>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
                {section.heading}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3C8] transition-colors hover:text-[#C9922A]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-[#2A3F6A] py-6 text-xs text-[#94A3C8] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Action Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/policies" className="transition-colors hover:text-[#C9922A]">
              Privacy Policy
            </Link>
            <Link href="/policies" className="transition-colors hover:text-[#C9922A]">
              Terms of Use
            </Link>
            <Link href="/policies#safeguarding" className="transition-colors hover:text-[#C9922A]">
              Safeguarding
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
