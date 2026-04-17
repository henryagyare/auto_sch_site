import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .limit(1);

  const statusMessage = error
    ? "Supabase connected, but the site_settings table is not ready yet."
    : "Supabase connected successfully.";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
        Empowering Future Leaders
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Welcome to the new digital home of our institution. We are currently
        crafting a premium experience for our students, parents, and faculty.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700">
          Explore Programs
        </button>
        <button className="text-sm font-semibold leading-6 text-slate-900">
          Contact Us <span aria-hidden="true">→</span>
        </button>
      </div>

    </div>
  );
}