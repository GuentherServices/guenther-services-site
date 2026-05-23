import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ServicesPage() {
  const sections = [
    {
      title: "Handyman & Repairs",
      desc: "Everyday fixes and punch‑list items to keep your home in shape.",
      bullets: [
        "Drywall patches and crack repairs",
        "Door adjustments, locks, and hardware",
        "Faucet leaks and minor plumbing fixes (non‑permit)",
        "Caulking, weatherstripping, and small repairs",
        "Honey‑do lists and small odd jobs",
      ],
    },
    {
      title: "Installations",
      desc: "Clean, secure installs with tidy finishes.",
      bullets: [
        "TV mounting and cable management",
        "Shelves, closet systems, and storage",
        "Light fixtures and ceiling fans (non‑permit)",
        "Curtain rods, blinds, and hardware",
        "Smart devices and basic security hardware",
      ],
    },
    {
      title: "Indoor Services",
      desc: "Refresh and maintain the spaces you use every day.",
      bullets: [
        "Interior painting and touch‑ups",
        "Trim, baseboards, and casing repairs",
        "Tile and grout touch‑ups (minor)",
        "Furniture assembly and disassembly",
        "Small updates and cosmetic fixes",
      ],
    },
    {
      title: "Outdoor Services",
      desc: "Keep the exterior looking sharp and functional.",
      bullets: [
        "Gutter cleaning and downspout checks",
        "Fence and gate repairs",
        "Deck and railing touch‑ups",
        "Yard cleanup and haul‑away (small loads)",
        "Exterior caulking and minor fixes",
      ],
    },
    {
      title: "Seasonal & Maintenance",
      desc: "Stay ahead of the seasons with proactive care.",
      bullets: [
        "Seasonal home checklists",
        "Filter swaps and basic maintenance tasks",
        "Storm prep and post‑storm checks",
        "Holiday light hanging (edit if offered)",
        "Custom seasonal to‑do lists",
      ],
    },
    {
      title: "Basic Plumbing & Electrical",
      desc: "Non‑permit work only—safe, simple fixes and swaps.",
      bullets: [
        "Fixture replacements (faucets, showerheads, etc.)",
        "Toilet repairs and flapper/handle fixes",
        "Outlet and switch cover replacements",
        "Light fixture swaps (non‑permit)",
        "No major plumbing/electrical or permit work",
      ],
    },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Services</h1>
        <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl">
          From quick fixes to full seasonal maintenance, Guenther Services
          offers a wide range of home ecosystem services—indoor and outdoor.
          Use this list as a starting point and send your custom to‑do list.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-1">{section.title}</h2>
              <p className="text-[var(--muted-foreground)] text-sm mb-4">
                {section.desc}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[var(--muted-foreground)]">
                Pricing: starting at $XX (placeholder). For an exact quote,
                include photos and a short description on the booking or quote
                form.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
