alter table public.site_settings enable row level security;
alter table public.news_posts enable row level security;
alter table public.events enable row level security;
alter table public.staff_members enable row level security;
alter table public.resources enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.admissions_inquiries enable row level security;

create policy "Public can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

create policy "Public can read published news"
on public.news_posts
for select
to anon, authenticated
using (published = true);

create policy "Public can read published events"
on public.events
for select
to anon, authenticated
using (published = true);

create policy "Public can read published staff"
on public.staff_members
for select
to anon, authenticated
using (published = true);

create policy "Public can read published resources"
on public.resources
for select
to anon, authenticated
using (published = true);

create policy "Public can insert contact submissions"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

create policy "Public can insert admissions inquiries"
on public.admissions_inquiries
for insert
to anon, authenticated
with check (true);