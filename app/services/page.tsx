import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <h1 className="text-3xl font-semibold">Our Services</h1>
            <p className="text-sm text-[var(--text-muted)]">
              Everything your home needs — organized, transparent, and done right the first time.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Handyman & Repairs */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-[var(--accent)]">Handyman & Repairs</h2>
                <ul className="text-sm text-[var(--text-muted)] space-y-1">
                  <li>• Drywall patching & repair</li>
                  <li>• Cabinet hardware swaps</li>
                  <li>• Furniture assembly</li>
                  <li>• Door adjustments & replacements</li>
                  <li>• Caulking & weatherstripping</li>
                  <li>• Faucet & fixture repairs</li>
                  <li>• Tile grout repair</li>
                </ul>
                <p className="text-[var(--accent)] font-semibold">Starting at $100</p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get Quote
                </Link>
              </div>

              {/* Installations */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-[var(--accent)]">Installations</h2>
                <ul className="text-sm text-[var(--text-muted)] space-y-1">
                  <li>• TV mounting (all sizes)</li>
                  <li>• Shelf & shelving systems</li>
                  <li>• Ceiling fan installation</li>
                </ul>
                <p className="text-[var(--accent)] font-semibold">Starting at $100</p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get Quote
                </Link>
              </div>

              {/* Outdoor Services */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-[var(--accent)]">Outdoor Services</h2>
                <ul className="text-sm text-[var(--text-muted)] space-y-1">
                  <li>• Gutter cleaning & guard install</li>
                  <li>• Yard cleanup & debris removal</li>
                  <li>• Outdoor fixture replacements</li>
                  <li>• Fence repair & staining</li>
                  <li>• Mailbox installation</li>
                  <li>• Deck maintenance & sealing</li>
                  <li>• Exterior lighting</li>
                </ul>
                <p className="text-[var(--accent)] font-semibold">Starting at $150</p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get Quote
                </Link>
              </div>

              {/* Furniture & Moving */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-[var(--accent)]">Furniture & Moving</h2>
                <ul className="text-sm text-[var(--text-muted)] space-y-1">
                  <li>• Furniture assembly (all brands)</li>
                  <li>• Move-out breakdown & prep</li>
                  <li>• Home office setup</li>
                  <li>• Furniture deconstruction</li>
                  <li>• Large item relocation (within home)</li>
                  <li>• Move-in setup & arrangement</li>
                  <li>• Flat-pack assembly (IKEA, Wayfair, etc.)</li>
                </ul>
                <p className="text-[var(--accent)] font-semibold">Starting at $100</p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent)] hover:bg-[rgba(34,197,94,0.08)] transition-colors"
                >
                  Get Quote
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
