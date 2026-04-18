import Link from "next/link";

const footerLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Action Academy</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            A premium learning environment where students grow intellectually, socially, and creatively.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
