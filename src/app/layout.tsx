import type { Metadata } from "next";
import "./globals.css";
import PageContainer from "@/components/PageContainer";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

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
        <PageContainer>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </PageContainer>
      </body>
    </html>
  );
}