export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-lg font-semibold">Guenther Services</h3>
          <p className="text-sm text-[var(--text-muted)]">
            Reliable handyman and home services done right. Locally owned and
            committed to quality craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-[var(--text-main)]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li>Services</li>
            <li>Book a Service</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Policies</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-[var(--text-main)]">
            Contact
          </h4>
          <ul className="space-y-1 text-sm text-[var(--text-muted)]">
            <li>(513) 630-3818</li>
            <li>guentherservices@outlook.com</li>
            <li>Oxford, Ohio</li>
            <li>Mon–Fri 8AM–6PM · Sat 9AM–3PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)] py-4 text-center text-xs text-[var(--text-muted)]">
        © 2026 Guenther Services. All rights reserved.
      </div>
    </footer>
  );
}
