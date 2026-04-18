"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#76b900]"
        >
          Action Academy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:text-[#3860be]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[8px] text-sm font-bold uppercase text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-[#5e5e5e] pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1a1a1a] hover:text-[#76b900]"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="inline-block rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-sm font-bold uppercase text-white transition-colors hover:bg-[#1eaedb]"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
