import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Action Academy | Excellence in Education",
  description: "A premium learning environment for the next generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-6 border-b bg-white">
          <div className="max-w-7xl mx-auto font-bold text-xl tracking-tight">
            ACTION ACADEMY
          </div>
        </nav>
        <main>{children}</main>
        <footer className="p-10 border-t mt-20 text-center text-gray-500 text-sm">
          © 2026 Action Academy. All rights reserved.
        </footer>
      </body>
    </html>
  );
}