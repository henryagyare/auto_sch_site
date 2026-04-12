export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
        Empowering Future Leaders
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
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