import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

const HERO_IMG = "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "News & Events | Action Academy",
  description:
    "Stay up to date with the latest news, announcements, and upcoming events at Action Academy.",
};

export default async function NewsPage() {
  const supabase = await createClient();

  const [newsResult, eventsResult] = await Promise.all([
    supabase
      .from("news_posts")
      .select("id,title,summary,published_at,featured_image_url")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(12),
    supabase
      .from("events")
      .select("id,title,description,event_date,start_time,end_time,location")
      .eq("published", true)
      .order("event_date", { ascending: true })
      .limit(10),
  ]);

  const newsPosts = newsResult.data ?? [];
  const upcomingEvents = eventsResult.data ?? [];

  return (
    <>
      {/* ── Hero ── navy */}
      <section className="relative overflow-hidden bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[440px] items-center gap-12 py-24 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9922A]">Stay Informed</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl">
                News &amp; Events
              </h1>
              <div className="mt-4 h-1 w-16 rounded bg-[#C9922A]" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#94A3C8]">
                The latest announcements, stories, and upcoming activities from our school community.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src={HERO_IMG} alt="School events" fill className="object-cover opacity-70" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2148]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest News ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Latest</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1C1C2E]">School news</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />

          {newsPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl border border-[#DDD4C5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_32px_rgba(14,33,72,0.1)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3EDE3]">
                    <Image
                      src={post.featured_image_url ?? HERO_IMG}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C9922A]">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString("en-GB", {
                            day: "numeric", month: "short", year: "numeric",
                          })
                        : "Draft"}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-[#1C1C2E]">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                      {post.summary ?? "Read the latest update from Action Academy."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-[#DDD4C5] bg-white p-16 text-center shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <p className="text-sm text-[#6B7280]">No news posts yet — check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Events ── navy */}
      <section className="bg-[#0E2148]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">Mark Your Calendar</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Upcoming events</h2>
          <div className="mt-4 mb-12 h-1 w-12 rounded bg-[#C9922A]" />

          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => {
                const d = new Date(event.event_date);
                return (
                  <div
                    key={event.id}
                    className="grid gap-6 rounded-xl border border-[#2A3F6A] bg-[#162B52] p-6 transition-all hover:border-[#C9922A] sm:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#C9922A]">
                      <p className="text-[10px] font-bold uppercase text-white/80">
                        {d.toLocaleDateString("en-GB", { month: "short" })}
                      </p>
                      <p className="text-2xl font-bold leading-none text-white">
                        {d.getDate()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#94A3C8]">
                        {event.location && <span>📍 {event.location}</span>}
                        {event.start_time && (
                          <span>⏰ {event.start_time}{event.end_time ? ` – ${event.end_time}` : ""}</span>
                        )}
                      </div>
                      {event.description && (
                        <p className="mt-3 text-sm leading-relaxed text-[#94A3C8]">{event.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-[#2A3F6A] p-16 text-center">
              <p className="text-sm text-[#94A3C8]">No upcoming events scheduled — check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── cream */}
      <section className="bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-white p-10 shadow-[0_4px_32px_rgba(14,33,72,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1C1C2E]">Stay connected</h2>
                <p className="mt-2 max-w-lg text-base text-[#6B7280]">
                  For the most up-to-date news and event information, reach out to our school office.
                </p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-lg bg-[#C9922A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A67820]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
