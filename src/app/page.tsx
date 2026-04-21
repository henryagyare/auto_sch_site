import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";

const HERO_IMG = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80";
const MISSION_IMG = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80";

const quickLinks = [
  {
    title: "Admissions",
    description: "Join our school community. Learn about our intake process and entry requirements.",
    href: "/admissions",
    icon: "🎓",
  },
  {
    title: "Academics",
    description: "Explore our curriculum, special programmes, and approach to learning.",
    href: "/academics",
    icon: "📚",
  },
  {
    title: "News & Events",
    description: "Stay up to date with school announcements, events, and community news.",
    href: "/news",
    icon: "📰",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our admissions team or general enquiries office.",
    href: "/contact",
    icon: "✉️",
  },
];

const stats = [
  { value: "K–12", label: "Grade Levels" },
  { value: "25+", label: "Years of Excellence" },
  { value: "98%", label: "University Placement" },
  { value: "40+", label: "Clubs & Activities" },
];

export default async function Home() {
  const supabase = await createClient();

  const [settingsResult, newsResult, eventsResult] = await Promise.all([
    supabase.from("site_settings").select("*").maybeSingle(),
    supabase
      .from("news_posts")
      .select("id,title,summary,published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(3),
    supabase
      .from("events")
      .select("id,title,event_date,location")
      .eq("published", true)
      .order("event_date", { ascending: true })
      .limit(3),
  ]);

  const siteSettings = settingsResult.data;
  const newsPosts = newsResult.data ?? [];
  const upcomingEvents = eventsResult.data ?? [];

  const schoolName = siteSettings?.school_name ?? "Action Academy";
  const tagline =
    siteSettings?.tagline ??
    "Where every student is known, challenged, and empowered to reach their full potential.";
  const missionStatement =
    siteSettings?.mission_statement ??
    "We are committed to academic excellence, character growth, and a welcoming school community — equipping every learner with the knowledge, skills, and values to make a positive difference in the world.";

  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[600px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">
                Welcome to
              </p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                {schoolName}
              </h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                {tagline}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]"
                >
                  Explore Admissions
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  About Our School
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={HERO_IMG}
                alt="Action Academy campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#0E2148]">
                  25+
                </p>
                <p className="text-xs font-medium text-[#6B7280]">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── gold */}
      <section className="bg-[#C9922A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(14,33,72,0.15)]">
              <Image
                src={MISSION_IMG}
                alt="Students learning at Action Academy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">
                Our Mission
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-snug text-[#1C1C2E]">
                Building tomorrow&apos;s leaders today
              </h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                {missionStatement}
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]"
              >
                Learn about our school
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            label="Navigate"
            title="Everything you need"
            description="From admissions to academics — find what you're looking for."
            light
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A] hover:shadow-[0_4px_20px_rgba(201,146,42,0.15)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-4 text-base font-semibold text-white transition-colors group-hover:text-[#C9922A]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3C8]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Latest News */}
            <div>
              <SectionHeading
                label="Latest"
                title="School news"
                description="Stay informed with the latest announcements from Action Academy."
              />
              <div className="space-y-4">
                {newsPosts.length > 0 ? (
                  newsPosts.map((post) => (
                    <div
                      key={post.id}
                      className="rounded-xl border border-[#DDD4C5] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "Draft"}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-[#1C1C2E]">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                        {post.summary ?? "A recent update from our school community."}
                      </p>
                    </div>
                  ))
                ) : (
                  <Card>
                    <p className="text-sm text-[#6B7280]">No news yet — check back soon.</p>
                  </Card>
                )}
              </div>
              <Link
                href="/news"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]"
              >
                View all news <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Upcoming Events */}
            <div>
              <SectionHeading
                label="Coming Up"
                title="Upcoming events"
                description="Important dates and school activities to mark on your calendar."
              />
              <div className="space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => {
                    const d = new Date(event.event_date);
                    return (
                      <div
                        key={event.id}
                        className="flex gap-4 rounded-xl border border-[#DDD4C5] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                      >
                        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#0E2148]">
                          <p className="text-[10px] font-bold uppercase text-[#C9922A]">
                            {d.toLocaleDateString("en-GB", { month: "short" })}
                          </p>
                          <p className="text-xl font-bold leading-none text-white">
                            {d.getDate()}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base font-bold leading-snug text-[#1C1C2E]">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-xs text-[#6B7280]">
                            {event.location ?? "On campus"}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Card>
                    <p className="text-sm text-[#6B7280]">No upcoming events scheduled yet.</p>
                  </Card>
                )}
              </div>
              <Link
                href="/news"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C9922A] transition-colors hover:text-[#A67820]"
              >
                View all events <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">
                Join Us
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-snug text-white">
                Ready to be part of our community?
              </h2>
              <div className="mt-4 h-1 w-12 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#94A3C8]">
                Start your admissions journey today. Our team is here to guide
                you through every step of the process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={CTA_IMG}
                alt="Students at Action Academy"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
