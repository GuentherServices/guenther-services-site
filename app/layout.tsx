import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guenther Services | Reliable Handyman & Home Services",
  description:
    "From minor repairs to full seasonal maintenance — Guenther Services delivers reliable, expert handyman work with transparent pricing and tidy results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
        {children}
      </body>
    </html>
  );
}
