import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
            <h1 className="text-3xl font-semibold">About Us</h1>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Guenther Services is a locally owned handyman and home services company
              serving Oxford and the surrounding Butler County communities. We take pride
              in delivering reliable, high‑quality work with transparent pricing and
              friendly service.
            </p>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Whether it’s repairs, installations, seasonal maintenance, or general
              home improvement, we’re committed to making your home look and function
              its best.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
