export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-12 mt-16 text-sm text-[var(--muted-foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            Guenther Services
          </h3>
          <p>
            Reliable handyman and home services done right. Locally owned and
            committed to quality craftsmanship.
          </p>
          <div className="mt-3 space-y-1">
            <span className="inline-block bg-[var(--card)] px-2 py-1 rounded text-xs mr-2">
              Locally Owned
            </span>
            <span className="inline-block bg-[var(--card)] px-2 py-1 rounded text-xs mr-2">
              Insured (placeholder)
            </span>
            <span className="inline-block bg-[var(--card)] px-2 py-1 rounded text-xs">
              Satisfaction Guaranteed
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-[var(--foreground)] font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Book a Service</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--foreground)] font-semibold mb-3">
            Service Areas
          </h4>
          <ul className="space-y-2">
            <li>Oxford, OH</li>
            <li>College Corner, OH</li>
            <li>Ross, OH</li>
            <li>Fairfield, OH</li>
            <li>+ surrounding areas (edit)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--foreground)] font-semibold mb-3">
            Contact
          </h4>
          <p>(513) 630‑3818 (edit)</p>
          <p>guentherservices@outlook.com (edit)</p>
          <p>Oxford, Ohio (edit)</p>
          <p>Mon–Fri 8AM–6PM · Sat 9AM–3PM (edit)</p>
        </div>
      </div>

      <p className="text-center mt-8">
        © {new Date().getFullYear()} Guenther Services. All rights reserved.
      </p>
    </footer>
  );
}
