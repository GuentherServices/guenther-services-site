import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
            <h1 className="text-3xl font-semibold">Contact Us</h1>

            <div className="space-y-3 text-sm text-[var(--text-muted)]">
              <p><strong className="text-[var(--text-main)]">Phone:</strong> (513) 630‑3818</p>
              <p><strong className="text-[var(--text-main)]">Email:</strong> guentherservices@outlook.com</p>
              <p><strong className="text-[var(--text-main)]">Location:</strong> Oxford, Ohio</p>
              <p><strong className="text-[var(--text-main)]">Hours:</strong> Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
            </div>

            <form className="space-y-5 pt-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              />
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full rounded-xl bg-[var(--card)] border border-[var(--border-subtle)] px-4 py-3 text-sm"
              ></textarea>

              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
