export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">Your Home, Perfected.</h1>
          <p className="text-lg text-gray-300 mb-10">
            From minor repairs to full seasonal maintenance — Guenther Services delivers
            reliable, expert handyman work with transparent pricing and tidy results.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/booking" className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition">
              Book a Service
            </a>
            <a href="/contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get a Quote
            </a>
            <a href="sms:5136303818" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              Text Us
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/hero-placeholder.jpg"
            alt="Handyman working"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#111] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Repairs & Fixes</h3>
              <p className="text-gray-400">
                Drywall, doors, faucets, and everything in between.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Installations</h3>
              <p className="text-gray-400">
                TV mounting, shelves, fixtures, and security system setup.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Painting & Touch-Ups</h3>
              <p className="text-gray-400">
                Interior walls, trim, and accent features.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Basic Plumbing</h3>
              <p className="text-gray-400">
                Faucet swaps, toilet repairs, leak fixes.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Outdoor Services</h3>
              <p className="text-gray-400">
                Gutter cleaning, fence repair, deck maintenance, yard cleanup.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Furniture & Moving</h3>
              <p className="text-gray-400">
                Assembly, deconstruction, and move-in/out services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 mb-4">
                “Guenther fixed our leaky faucet and mounted our TV the same day. Solid guy, clean work, fair price.”
              </p>
              <p className="font-semibold text-green-400">Mike D. — Oxford, OH</p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 mb-4">
                “Had furniture assembled and repairs knocked out in one visit. On time, professional, spotless work.”
              </p>
              <p className="font-semibold text-green-400">Brittany R. — Oxford, OH</p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 mb-4">
                “Patched our drywall and you can’t even tell it was damaged. Will use again for sure.”
              </p>
              <p className="font-semibold text-green-400">Tom K. — Fairfield, OH</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-[#111] text-center">
        <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
        <p className="text-gray-400 mb-10">
          Proudly serving Oxford and the surrounding Butler County communities.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Oxford, OH", "College Corner, OH", "Ross, OH", "Fairfield, OH"].map((city) => (
            <span key={city} className="bg-[#1a1a1a] px-6 py-3 rounded-lg border border-gray-700">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              "What’s your minimum service charge?",
              "Do you offer same-day service?",
              "What materials do I need to provide?",
              "Are you licensed and insured?",
              "What work do you NOT do?",
              "How do I get a quote?"
            ].map((q) => (
              <div key={q} className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
                <p className="text-lg font-semibold">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Guenther Services</h3>
            <p>Reliable handyman and home services done right. Locally owned and committed to quality craftsmanship.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
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
            <h4 className="text-white font-semibold mb-3">Service Areas</h4>
            <ul className="space-y-2">
              <li>Oxford</li>
              <li>College Corner</li>
              <li>Ross</li>
              <li>Fairfield</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p>(513) 630-3818</p>
            <p>guentherservices@outlook.com</p>
            <p>Oxford, Ohio</p>
            <p>Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-10">
          © 2026 Guenther Services. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
