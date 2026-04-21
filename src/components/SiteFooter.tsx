import Link from "next/link";

const footerSections = [
  {
    heading: "Academics",
    links: [
      { label: "Curriculum", href: "/academics" },
      { label: "Programs", href: "/academics#programs" },
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
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "News & Events", href: "/news" },
      { label: "Parent Resources", href: "/resources" },
      { label: "Alumni", href: "/about#alumni" },
      { label: "Policies", href: "/policies" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Tuition & Fees", href: "/admissions#fees" },
      { label: "FAQs", href: "/admissions#faqs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.15em] text-white">
              Action Academy
            </p>
            <p className="mt-4 max-w-xs text-sm leading-[1.67] text-[#a7a7a7]">
              A premium learning environment where students grow
              intellectually, socially, and creatively.
            </p>
            <Link
              href="/admissions"
              className="mt-6 inline-block rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-sm font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
            >
              Apply Now
            </Link>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
                {section.heading}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#a7a7a7] transition-colors hover:text-[#76b900]"
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
        <div className="flex flex-col gap-4 border-t border-[#5e5e5e] py-6 text-xs text-[#757575] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Action Academy. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/policies"
              className="transition-colors hover:text-[#76b900]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/policies"
              className="transition-colors hover:text-[#76b900]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
