import Image from "next/image";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Contact Us | Action Academy",
  description:
    "Get in touch with Action Academy. Contact our admissions team, front office, or send a general enquiry.",
};

export default async function ContactPage() {
  const supabase = await createClient();
  const { data: settings } = await supabase
    .from("site_settings")
    .select("school_name,address,contact_email,contact_phone")
    .maybeSingle();

  const address = settings?.address ?? "123 Academy Drive, Education City";
  const email = settings?.contact_email ?? "info@actionacademy.edu";
  const phone = settings?.contact_phone ?? "+1 (555) 000-0000";

  return (
    <>
      {/* ── Hero ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[380px] items-center gap-12 py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76b900]">
                We&apos;re Here
              </p>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.25] text-white sm:text-[48px]">
                Contact Us
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-[1.67] text-[#a7a7a7]">
                Whether you have a question about admissions, academics, or
                general school matters — we&apos;d love to hear from you.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src="/placeholder.jpg"
                alt="Action Academy front office"
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Info ── light */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Send a Message
              </p>
              <h2 className="mt-3 mb-8 text-[24px] font-bold leading-[1.25] text-black sm:text-[36px]">
                General enquiry
              </h2>
              <form className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-black"
                    >
                      Full Name
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full rounded-[2px] border border-[#5e5e5e] bg-white px-4 py-3 text-sm text-black placeholder-[#a7a7a7] transition-colors focus:border-[#76b900] focus:outline-none"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-black"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-[2px] border border-[#5e5e5e] bg-white px-4 py-3 text-sm text-black placeholder-[#a7a7a7] transition-colors focus:border-[#76b900] focus:outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-black"
                    >
                      Phone{" "}
                      <span className="text-xs font-normal normal-case text-[#a7a7a7]">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-[2px] border border-[#5e5e5e] bg-white px-4 py-3 text-sm text-black placeholder-[#a7a7a7] transition-colors focus:border-[#76b900] focus:outline-none"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-black"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-[2px] border border-[#5e5e5e] bg-white px-4 py-3 text-sm text-black transition-colors focus:border-[#76b900] focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Enquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="events">Events & Activities</option>
                      <option value="fees">Tuition & Fees</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-[2px] border border-[#5e5e5e] bg-white px-4 py-3 text-sm text-black placeholder-[#a7a7a7] transition-colors focus:border-[#76b900] focus:outline-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-[2px] border-2 border-[#76b900] px-[13px] py-[11px] text-base font-bold text-black transition-colors hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white active:bg-[#007fff]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Find Us
              </p>
              <h2 className="mt-3 mb-8 text-[24px] font-bold leading-[1.25] text-black">
                Get in touch
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-[#76b900] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#757575]">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-[1.67] text-black">{address}</p>
                </div>
                <div className="border-l-2 border-[#76b900] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#757575]">
                    Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block text-sm text-black underline decoration-[#76b900] decoration-2 underline-offset-4 transition-colors hover:text-[#3860be]"
                  >
                    {email}
                  </a>
                </div>
                <div className="border-l-2 border-[#76b900] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#757575]">
                    Phone
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="mt-1 block text-sm text-black underline decoration-[#76b900] decoration-2 underline-offset-4 transition-colors hover:text-[#3860be]"
                  >
                    {phone}
                  </a>
                </div>
                <div className="border-l-2 border-[#76b900] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#757575]">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm leading-[1.67] text-black">
                    Monday – Friday
                    <br />
                    7:30 AM – 4:30 PM
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 relative aspect-square w-full overflow-hidden rounded-[2px] bg-[#f5f5f5] shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px]">
                <Image
                  src="/placeholder.jpg"
                  alt="School location map"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="rounded-[2px] bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white">
                    View on Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ── dark */}
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
            Departments
          </p>
          <h2 className="mt-3 mb-12 text-[24px] font-bold leading-[1.25] text-white sm:text-[36px]">
            Direct contacts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                dept: "Admissions Office",
                desc: "Applications, school tours, and intake queries.",
                contact: "admissions",
              },
              {
                dept: "Academic Affairs",
                desc: "Curriculum, timetables, and academic concerns.",
                contact: "academics",
              },
              {
                dept: "Finance Office",
                desc: "Tuition, fees, and payment enquiries.",
                contact: "finance",
              },
              {
                dept: "Student Support",
                desc: "Counselling, welfare, and learning support.",
                contact: "support",
              },
              {
                dept: "Sports & Activities",
                desc: "Sports teams, clubs, and extracurriculars.",
                contact: "sports",
              },
              {
                dept: "IT Help Desk",
                desc: "Student portal, device, and tech support.",
                contact: "it",
              },
            ].map((dept) => (
              <div
                key={dept.dept}
                className="rounded-[2px] border border-[#5e5e5e] bg-[#1a1a1a] p-6 transition-colors hover:border-[#76b900]"
              >
                <h3 className="text-base font-bold text-white">{dept.dept}</h3>
                <p className="mt-2 text-sm leading-[1.67] text-[#a7a7a7]">{dept.desc}</p>
                <a
                  href={`mailto:${dept.contact}@actionacademy.edu`}
                  className="mt-3 block text-xs font-bold text-[#76b900] transition-colors hover:text-[#3860be]"
                >
                  {dept.contact}@actionacademy.edu
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
