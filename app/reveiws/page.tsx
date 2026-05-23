import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ReviewsPage() {
  const reviews = [
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
    {
      quote:
        "Super friendly, fast, and professional. He handled multiple tasks in one visit and everything looks perfect.",
      name: "Sarah L.",
      location: "Ross, OH",
    },
    {
      quote:
        "Affordable, reliable, and high‑quality work. I’ve already recommended him to my neighbors.",
      name: "James P.",
      location: "College Corner, OH",
    },
    {
      quote:
        "Showed up on time, worked efficiently, and cleaned up after the job. Couldn’t ask for more.",
      name: "Emily R.",
      location: "Oxford, OH",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-3">
            <h1 className="text-3xl font-semibold">Customer Reviews</h1>
            <p className="text-sm text-[var(--text-muted)]">
              Real feedback from real homeowners across Butler County.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6 flex flex-col"
                >
                  <div className="text-[var(--accent)] text-xs mb-2">★★★★★</div>
                  <p className="text-sm mb-4">“{r.quote}”</p>
                  <p className="mt-auto text-xs text-[var(--text-muted)]">
                    {r.name} · {r.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-3">
            <h2 className="text-xl font-semibold">Ready to book your service?</h2>
            <p className="text-sm text-[var(--text-muted)]">
              Tell us what you need — we’ll handle the rest.
            </p>
            <a
              href="/booking"
              className="inline-block rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
            >
              Book a Service
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
