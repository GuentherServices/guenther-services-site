import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1 text-sm">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-[var(--muted-foreground)] mb-6">
          Have a project in mind or a list that’s been waiting too long? Send a
          quick message and we’ll follow up with next steps, timing, and
          pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="font-semibold mb-2">Contact details</h2>
            <p>Phone: (513) 630‑3818 (edit)</p>
            <p>Email: guentherservices@outlook.com (edit)</p>
            <p>Service area: Oxford, OH + surrounding communities (edit)</p>
            <p>Hours: Mon–Fri 8AM–6PM · Sat 9AM–3PM (edit)</p>
            <p className="mt-3 text-[var(--muted-foreground)]">
              SMS/text available. Add note here if you want to encourage texting
              or messaging.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Service area map (placeholder)</h2>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl h-40 flex items-center justify-center text-xs text-[var(--muted-foreground)]">
              Embed Google Map or static map image here.
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Send a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="Best number to reach you"
                />
              </div>
              <div>
                <label className="block mb-1">Address (optional)</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="Service address"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2 min-h-[100px]"
                placeholder="Tell us what you need help with."
              />
            </div>

            <button
              type="button"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Send message (placeholder – wire to email/SMS)
            </button>

            <p className="text-[var(--muted-foreground)] text-xs mt-2">
              This form is a placeholder. Connect it to your email/SMS provider
              or backend to receive submissions.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
