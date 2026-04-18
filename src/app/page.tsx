import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";

const quickLinks = [
  {
    title: "Admissions",
    description: "Join our school community. Learn about our intake process and requirements.",
    href: "/admissions",
  },
  {
    title: "Academics",
    description: "Explore our curriculum, programmes, and approach to learning excellence.",
    href: "/academics",
  },
  {
    title: "News & Events",
    description: "Stay up to date with school announcements, events, and community news.",
    href: "/news",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our admissions team or general enquiries office.",
    href: "/contact",
  },
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
    "A premium learning environment where every student can thrive.";
  const missionStatement =
    siteSettings?.mission_statement ??
    "We are committed to academic excellence, character growth, and a welcoming school community where every learner is empowered to reach their full potential.";
  const address =
    siteSettings?.address ??
    "Located at the heart of the community, Action Academy offers a safe, inclusive, and inspiring learning experience for students from K to 12.";

  return (
    <>
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[580px] items-center gap-12 py-20 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Welcome to
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px] lg:text-[56px]">
                {schoolName}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                {tagline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
                >
                  Explore Admissions
                </Link>
                <Link
                  href="/about"
                  className="rounded-[2px] border border-[#5e5e5e] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:border-white"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image */}
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
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]">
              <Image
                src="/placeholder.jpg"
                alt="Students learning at Action Academy"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Our Mission
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
                Building tomorrow&apos;s leaders today
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#757575]">
                {missionStatement}
              </p>
              <p className="mt-4 text-sm leading-[1.67] text-[#757575]">
                {address}
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-bold uppercase tracking-[0.1em] text-black underline decoration-[#76b900] decoration-2 underline-offset-4 transition-colors hover:text-[#3860be]"
              >
                About Our School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            label="Navigate"
            title="Everything you need"
            description="From admissions to academics, find what you're looking for."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <p className="text-base font-bold text-white transition-colors group-hover:text-[#76b900]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-[1.67] text-[#a7a7a7]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Latest News */}
            <div>
              <SectionHeading
                label="Latest"
                title="School news"
                description="Stay informed with the latest announcements from the school."
              />
              <div className="space-y-4">
                {newsPosts.length > 0 ? (
                  newsPosts.map((post) => (
                    <Card key={post.id} className="border-b border-[#e5e5e5]">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString(
                              undefined,
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )
                          : "Draft"}
                      </p>
                      <h3 className="mt-3 border-b-2 border-[#76b900] pb-1 text-[20px] font-bold leading-[1.25] text-black">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                        {post.summary ?? "A recent update from our school community."}
                      </p>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <p className="text-sm text-[#757575]">
                      No news yet — check back soon.
                    </p>
                  </Card>
                )}
              </div>
              <Link
                href="/news"
                className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.1em] text-black underline decoration-[#76b900] decoration-2 underline-offset-4 transition-colors hover:text-[#3860be]"
              >
                All News
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
                  upcomingEvents.map((event) => (
                    <Card key={event.id} className="border-l-2 border-[#76b900]">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                        {new Date(event.event_date).toLocaleDateString(
                          undefined,
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </p>
                      <h3 className="mt-3 text-[20px] font-bold leading-[1.25] text-black">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#757575]">
                        {event.location ?? "On campus"}
                      </p>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <p className="text-sm text-[#757575]">
                      No upcoming events are scheduled yet.
                    </p>
                  </Card>
                )}
              </div>
              <Link
                href="/news"
                className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.1em] text-black underline decoration-[#76b900] decoration-2 underline-offset-4 transition-colors hover:text-[#3860be]"
              >
                All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Join Us
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
                Ready to be part of our community?
              </h2>
              <p className="mt-4 text-base leading-[1.67] text-[#a7a7a7]">
                Start your admissions journey today. Our team is here to guide
                you through every step of the process.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb]"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-[2px] border border-[#5e5e5e] px-[13px] py-[11px] text-base font-bold text-white transition-colors hover:border-white"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Students at Action Academy"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
