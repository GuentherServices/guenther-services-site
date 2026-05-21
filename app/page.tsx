export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">

      {/* NAVBAR */}
      <nav className="w-full border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Guenther Services</div>

          <div className="hidden md:flex gap-8 text-[var(--foreground)]">
            <a href="/" className="hover:text-[var(--primary)]">Home</a>
            <a href="/services" className="hover:text-[var(--primary)]">Services</a>
            <a href="/booking" className="hover:text-[var(--primary)]">Booking</a>
            <a href="/gallery" className="hover:text-[var(--primary)]">Gallery</a>
            <a href="/about" className="hover:text-[var(--primary)]">About</a>
            <a href="/contact" className="hover:text-[var(--primary)]">Contact</a>
            <a href="/reviews" className="hover:text-[var(--primary)]">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[var(--foreground)]">(513) 630‑3818</span>
            <a
              href="/booking"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">Your Home, Perfected.</h1>
          <p className="text-lg text-[var(--muted-foreground)] mb-10">
            From minor repairs to full seasonal maintenance — Guenther Services delivers
            reliable, expert handyman work with transparent pricing and tidy results.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/booking"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Book a Service
            </a>

            <a
              href="/contact"
              className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Get a Quote
            </a>

            <a
              href="sms:5136303818"
              className="bg-[var(--secondary)] text-[var(--secondary-foreground)] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Text Us
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-[var(--border)] ring-0 focus:ring-0 outline-none">
          <img
            src="/Logo.PNG"
            alt="Guenther Services"
            className="w-full h-auto object-cover ring-0 focus:ring-0 outline-none"
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What We Do</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-16">
            A complete ecosystem of home services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              { title: "Repairs & Fixes", desc: "Drywall, doors, faucets, and everything in between." },
              { title: "Installations", desc: "TV mounting, shelves, fixtures, and security system setup." },
              { title: "Painting & Touch-Ups", desc: "Interior walls, trim, and accent features." },
              { title: "Basic Plumbing", desc: "Faucet swaps, toilet repairs, leak fixes." },
              { title: "Outdoor Services", desc: "Gutter cleaning, fence repair, deck maintenance, yard cleanup." },
              { title: "Furniture & Moving", desc: "Assembly, deconstruction, and move-in/out services." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)]"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--muted-foreground)]">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                quote:
                  "Guenther fixed our leaky faucet and mounted our TV the same day. Solid guy, clean work, fair price.",
                name: "Mike D.",
                location: "Oxford, OH",
              },
              {
                quote:
                  "Had furniture assembled and repairs knocked out in one visit. On time, professional, spotless work.",
                name: "Brittany R.",
                location: "Oxford, OH",
              },
              {
                quote:
                  "Patched our drywall and you can’t even tell it was damaged. Will use again for sure.",
                name: "Tom K.",
                location: "Fairfield, OH",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)]"
              >
                <p className="text-[var(--foreground)] mb-4">“{t.quote}”</p>
                <p className="font-semibold text-[var(--primary)]">
                  {t.name} — {t.location}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-[var(--card)] text-center border-t border-[var(--border)]">
        <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
        <p className="text-[var(--muted-foreground)] mb-10">
          Proudly serving Oxford and the surrounding Butler County communities.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Oxford, OH", "College Corner, OH", "Ross, OH", "Fairfield, OH"].map((city) => (
            <span
              key={city}
              className="bg-[var(--background)] px-6 py-3 rounded-lg border border-[var(--border)]"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--background)] text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-[var(--muted-foreground)] mb-8">
          Tell us what you need — we’ll handle the rest.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/booking"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Book a Service
          </a>

          <a
            href="/contact"
            className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--background)] border-t border-[var(--border)] py-16 text-[var(--muted-foreground)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Guenther Services</h3>
            <p>Reliable handyman and home services done right. Locally owned and committed to quality craftsmanship.</p>
          </div>

          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services">Services</a></li>
              <li><a href="/booking">Book a Service</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/policies">Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-3">Service Areas</h4>
            <ul className="space-y-2">
              <li>Oxford</li>
              <li>College Corner</li>
              <li>Ross</li>
              <li>Fairfield</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-3">Contact</h4>
            <p>(513) 630‑3818</p>
            <p>guentherservices@outlook.com</p>
            <p>Oxford, Ohio</p>
            <p>Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
          </div>

        </div>

        <p className="text-center text-[var(--muted-foreground)] mt-10">
          © 2026 Guenther Services. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
