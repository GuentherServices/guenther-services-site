import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-[var(--border-subtle)] bg-[radial-gradient(circle_at_top,_#1f2937_0,_#050816_55%)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center">
            {/* Left */}
            <div className="flex-1 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Oxford · Butler County
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Your Home, <span className="text-[var(--accent)]">Perfected.</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                From minor repairs to full seasonal maintenance — Guenther Services
                delivers reliable, expert handyman work with transparent pricing and
                tidy results. For all your needs.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/booking"
                  className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
                >
                  Book a Service
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href="sms:15136303818"
                  className="rounded-full bg-[var(--card)] px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Text Us
                </a>
              </div>
            </div>

            {/* Right – logo instead of faucet, NO badge */}
            <div className="flex-1">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-soft)] shadow-[0_0_60px_rgba(34,197,94,0.25)]">
                <Image
                  src="/Logo.PNG"
                  alt="Guenther Services logo"
                  width={220}
                  height={220}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO – first row */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">What We Do</h2>
              <p className="text-sm text-[var(--text-muted)]">
                A complete ecosystem of home services.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Repairs & Fixes
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Drywall, doors, faucets, and everything in between.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Installations
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  TV mounting, shelves, fixtures, and security system setup.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Painting & Touch-Ups
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Interior walls, trim, and accent features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO – second row (Basic Plumbing / Outdoor / Furniture & Moving) */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Basic Plumbing
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Faucet swaps, toilet repairs, leak fixes.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Outdoor Services
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Gutter cleaning, fence repair, deck maintenance, and yard cleanup.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5">
                <h3 className="text-sm font-semibold mb-2 text-[var(--accent)]">
                  Furniture & Moving
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Assembly, deconstruction, and move-in/out services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">What Our Clients Say</h2>
              <p className="text-sm text-[var(--text-muted)]">
                Real feedback from real homeowners.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  quote:
                    "Guenther fixed our leaky faucet and mounted our TV the same day. Solid guy, clean work, fair price. Highly recommend.",
                  name: "Mike D.",
                  location: "Oxford, OH",
                },
                {
                  quote:
                    "Had furniture assembled and a bunch of little repairs knocked out in one visit. He was on time, professional, and left the place spotless.",
                  name: "Brittany R.",
                  location: "Oxford, OH",
                },
                {
                  quote:
                    "Great experience. Patched our drywall and you cannot even tell it was ever damaged. Will use again for sure.",
                  name: "Tom K.",
                  location: "Fairfield, OH",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-5"
                >
                  <div className="mb-2 text-[var(--accent)] text-xs">
                    ★★★★★
                  </div>
                  <p className="text-sm text-[var(--text-main)] mb-4">
                    “{t.quote}”
                  </p>
                  <p className="mt-auto text-xs text-[var(--text-muted)]">
                    {t.name} · {t.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ (from your other screenshot) */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {[
                "What’s your minimum service charge?",
                "Do you offer same-day service?",
                "What materials do I need to provide?",
                "Are you licensed and insured?",
                "What work do you NOT do?",
                "How do I get a quote?",
              ].map((q) => (
                <div
                  key={q}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text-main)]"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS + CTA */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-2">Service Areas</h2>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Proudly serving Oxford and the surrounding Butler County communities.
              </p>
              <p className="text-sm text-[var(--text-main)]">
                Oxford, OH · College Corner, OH · Ross, OH · Fairfield, OH
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Ready to Start?</h2>
              <p className="text-sm text-[var(--text-muted)]">
                Tell us what you need — we’ll handle the rest.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/booking"
                  className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
                >
                  Book a Service
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
