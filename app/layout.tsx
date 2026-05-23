import "./globals.css";

export const metadata = {
  title: "Guenther Services | Reliable Handyman & Home Services",
  description:
    "Local handyman and home services in Oxford, OH. Repairs, installations, seasonal maintenance, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
