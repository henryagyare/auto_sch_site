import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";

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

  return (
    <div className="space-y-20 py-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-white shadow-xl sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            Welcome to
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {siteSettings?.school_name ?? "Action Academy"}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteSettings?.tagline ??
              "A premium learning environment where every student can thrive."}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100"
            >
              Explore Admissions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              title="Our mission"
              description={
                siteSettings?.mission_statement ??
                "We are committed to academic excellence, character growth, and a welcoming school community."
              }
            />
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              {siteSettings?.address ??
                "Located at the heart of the community, Action Academy offers a safe, inclusive, and inspiring learning experience."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Admissions", href: "/admissions" },
              { title: "Academics", href: "/academics" },
              { title: "News & Events", href: "/news" },
              { title: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Latest news"
              description="Stay informed with the latest announcements and updates from the school."
            />
            <div className="grid gap-4">
              {newsPosts.length > 0 ? (
                newsPosts.map((post) => (
                  <Card key={post.id} className="border-slate-200">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Draft"}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {post.summary ?? "A recent update from our school community."}
                    </p>
                  </Card>
                ))
              ) : (
                <Card>
                  <p className="text-slate-600">No news yet — check back soon.</p>
                </Card>
              )}
            </div>
          </div>

          <div>
            <SectionHeading
              title="Upcoming events"
              description="Learn about the next important dates and school activities."
            />
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <Card key={event.id} className="border-slate-200">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {new Date(event.event_date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {event.location ?? "On campus"}
                    </p>
                  </Card>
                ))
              ) : (
                <Card>
                  <p className="text-slate-600">No upcoming events are scheduled yet.</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
