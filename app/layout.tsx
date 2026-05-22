import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "LegalWork – A single platform to manage every part of your legal work",
  description:
    "Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
