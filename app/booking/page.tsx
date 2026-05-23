import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function BookingPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Book a service or request a quote
        </h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          Choose a date and time that works for you, tell us what you need, and
          we’ll confirm your visit. You can also upload photos or videos to help
          us give a faster, more accurate quote.
        </p>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 mb-10 text-sm">
          <h2 className="text-xl font-semibold mb-4">Scheduling & quote form</h2>
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
                <label className="block mb-1">Phone</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="Best number to reach you"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Email</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1">Service address</label>
                <input
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                  placeholder="Street, city"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Preferred date</label>
                <input
                  type="date"
                  className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Preferred time window</label>
                <select className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2">
                  <option>Morning (8–11)</option>
                  <option>Midday (11–2)</option>
                  <option>Afternoon (2–5)</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1">Service type</label>
              <select className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2">
                <option>Handyman & Repairs</option>
                <option>Installations</option>
                <option>Indoor Services</option>
                <option>Outdoor Services</option>
                <option>Seasonal & Maintenance</option>
                <option>Basic Plumbing/Electrical (non‑permit)</option>
                <option>Multiple / Honey‑do list</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Brief description</label>
              <textarea
                className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2 min-h-[100px]"
                placeholder="Tell us what you need done. Include room/area, how long it’s been an issue, and any details."
              />
            </div>

            <div>
              <label className="block mb-1">
                Photos / videos (optional, placeholder)
              </label>
              <input
                type="file"
                multiple
                className="w-full bg-[var(--background)] border border-[var(--input)] rounded px-3 py-2"
              />
              <p className="text-[var(--muted-foreground)] text-xs mt-1">
                Attach clear photos or short videos to help us quote faster.
                (Connect to storage/email later.)
              </p>
            </div>

            <button
              type="button"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Submit request (placeholder – wire to email/SMS)
            </button>

            <p className="text-[var(--muted-foreground)] text-xs mt-3">
              Typical response time: within X hours (edit). You’ll receive a
              confirmation and follow‑up by phone, text, or email.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
