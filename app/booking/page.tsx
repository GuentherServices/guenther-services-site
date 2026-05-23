import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
            <h1 className="text-3xl font-semibold">Book a Service</h1>
            <p className="text-sm text-[var(--text-muted)]">
              Tell us what you need — we’ll confirm availability and get you scheduled.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              />
              <textarea
                placeholder="Describe the work you need done"
                rows={5}
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              ></textarea>

              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
