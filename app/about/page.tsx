import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1 text-sm">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Guenther Services</h1>
        <p className="text-[var(--muted-foreground)] mb-6">
          Fast fixes. Solid workmanship. Local service. Guenther Services was
          started to give homeowners a reliable, straightforward option for
          everyday home projects—without the runaround.
        </p>

        <p className="mb-4">
          {/* Founder bio placeholder */}
          Hi, I’m [Owner Name] (edit). I’ve been working with tools and home
          projects for years, and I started Guenther Services to bring
          dependable, fair‑priced handyman work to the Oxford area. I focus on
          clear communication, tidy work, and leaving every job better than I
          found it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
            <h2 className="font-semibold mb-1">Reliability</h2>
            <p className="text-[var(--muted-foreground)]">
              Show up when we say we will, communicate clearly, and follow
              through.
            </p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
            <h2 className="font-semibold mb-1">Transparency</h2>
            <p className="text-[var(--muted-foreground)]">
              Straightforward expectations, no surprises, and clear next steps
              for every job.
            </p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
            <h2 className="font-semibold mb-1">Quality</h2>
            <p className="text-[var(--muted-foreground)]">
              Work done with care, using the right materials and methods for
              long‑lasting results.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold mb-2">Certifications & insurance (placeholders)</h2>
          <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
            <li>Insured: [Policy details here]</li>
            <li>Background checked (if applicable)</li>
            <li>Local references available upon request</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
