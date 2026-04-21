"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactState =
  | { success: true }
  | { error: string }
  | null;

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const full_name = (formData.get("full_name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() || null;
  const subject = (formData.get("subject") as string | null)?.trim() || null;
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!full_name || !email || !message) {
    return { error: "Please fill in your name, email, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_submissions").insert({
    full_name,
    email,
    phone,
    subject,
    message,
  });

  if (error) {
    return { error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}
