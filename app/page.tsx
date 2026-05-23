import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-3">
            Your reliable handyman for the whole home.
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Reliable handyman and home services done right.
          </h1>
          <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-8">
            From gutters to garages—done right the first time. Fast fixes, solid
            workmanship, and local service you can count on.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/booking"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Get a Quote
            </Link>
            <Link
              href="/booking"
              className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Book Now
            </Link>
            <a
              href="sms:5136303818"
              className="bg-[var(--secondary)] text-[var(--secondary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Text / Message Us
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-2 bg-[var(--card)] px-3 py-2 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              Fast response · Same‑week availability (edit)
            </span>
            <span className="inline-flex items-center gap-2 bg-[var(--card)] px-3 py-2 rounded-full">
              Clear pricing & tidy work
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border-0 ring-0 focus:ring-0 outline-none">
          <img
            src="/Logo.PNG"
            alt="Guenther Services"
            className="w-full h-auto object-cover ring-0 focus:ring-0 outline-none"
          />
        </div>
      </section>

      {/* QUICK SERVICE HIGHLIGHTS */}
      <section className="bg-[var(--card)] border-t border-[var(--border)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            A complete ecosystem of home services.
          </h2>
          <p className="text-[var(--muted-foreground)] mb-10">
            One trusted local pro for repairs, installs, indoor and outdoor
            projects, and seasonal maintenance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Handyman & Repairs",
                desc: "Drywall patches, doors, faucets, fixtures, and honey‑do lists.",
              },
              {
                title: "Installations",
                desc: "TV mounting, shelves, hardware, light fixtures, and more.",
              },
              {
                title: "Indoor Services",
                desc: "Painting, touch‑ups, caulking, trim, and small updates.",
              },
              {
                title: "Outdoor Services",
                desc: "Gutter cleaning, yard cleanup, fence and deck touch‑ups.",
              },
              {
                title: "Seasonal & Maintenance",
                desc: "Seasonal checks, filter swaps, prep and cleanup.",
              },
              {
                title: "Basic Plumbing/Electrical",
                desc: "Non‑permit fixture swaps and minor fixes. (No major/permit work.)",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Service areas</h2>
          <p className="text-[var(--muted-foreground)] mb-8">
            Proudly serving Oxford and the surrounding Butler County
            communities. Edit this list as needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Oxford, OH", "College Corner, OH", "Ross, OH", "Fairfield, OH"].map(
              (city) => (
                <span
                  key={city}
                  className="bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-full text-sm"
                >
                  {city}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--card)] text-center border-t border-[var(--border)]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to start?
        </h2>
        <p className="text-[var(--muted-foreground)] mb-6">
          Tell us what you need—we’ll handle the rest. Send a quick message or
          book a visit.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/booking"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Book a Service
          </Link>
          <Link
            href="/contact"
            className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
