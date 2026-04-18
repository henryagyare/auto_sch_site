import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

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
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[380px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                Stay Informed
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                News &amp; Events
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                The latest announcements, stories, and upcoming activities from
                our school community.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="School events"
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest News ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Latest
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
            School news
          </h2>

          {newsPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-[2px] shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] overflow-hidden"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={post.featured_image_url ?? "/placeholder.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-opacity group-hover:opacity-90"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString(
                            undefined,
                            { month: "short", day: "numeric", year: "numeric" }
                          )
                        : "Draft"}
                    </p>
                    <h3 className="mt-3 border-b-2 border-[#76b900] pb-1 text-[20px] font-bold leading-[1.25] text-black">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.67] text-[#757575]">
                      {post.summary ?? "Read the latest update from Action Academy."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2px] border border-[#e5e5e5] p-12 text-center">
              <p className="text-sm text-[#757575]">
                No news posts yet — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Events ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Mark Your Calendar
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Upcoming events
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="grid gap-6 rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900] sm:grid-cols-[auto_1fr]"
                >
                  {/* Date block */}
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-[2px] border-2 border-[#76b900]">
                    <p className="text-xs font-bold uppercase text-[#76b900]">
                      {new Date(event.event_date).toLocaleDateString(undefined, {
                        month: "short",
                      })}
                    </p>
                    <p className="text-2xl font-bold leading-none text-white">
                      {new Date(event.event_date).getDate()}
                    </p>
                  </div>

                  {/* Event info */}
                  <div>
                    <h3 className="text-[20px] font-bold leading-[1.25] text-white">
                      {event.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#a7a7a7]">
                      {event.location && (
                        <span>{event.location}</span>
                      )}
                      {event.start_time && (
                        <span>
                          {event.start_time}
                          {event.end_time ? ` – ${event.end_time}` : ""}
                        </span>
                      )}
                    </div>
                    {event.description && (
                      <p className="mt-3 text-sm leading-[1.67] text-[#a7a7a7]">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2px] border border-[#5e5e5e] p-12 text-center">
              <p className="text-sm text-[#a7a7a7]">
                No upcoming events scheduled — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Subscribe CTA ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="border-l-4 border-[#76b900] pl-8">
            <h2 className="text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
              Stay connected
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.67] text-[#757575]">
              For the most up-to-date news and event information, reach out to
              our school office or check the parent portal regularly.
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
