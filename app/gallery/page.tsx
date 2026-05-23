import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const items = [
  {
    title: "TV Mount & Cable Management",
    category: "Indoor · Install",
    desc: "Mounted TV with hidden cables and soundbar. ~2 hours.",
  },
  {
    title: "Drywall Patch & Paint",
    category: "Indoor · Repair",
    desc: "Hole patched, textured, and painted to match. ~3 hours.",
  },
  {
    title: "Gutter Cleaning",
    category: "Outdoor · Seasonal",
    desc: "Full clean and downspout check. ~1.5 hours.",
  },
  {
    title: "Fence Repair",
    category: "Outdoor · Repair",
    desc: "Replaced damaged boards and re‑secured posts.",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl">
          A look at the kind of work we do—before/after photos, small
          transformations, and everyday fixes. Replace these placeholders with
          your own photos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden text-sm"
            >
              <div className="h-40 bg-[var(--background)] flex items-center justify-center text-xs text-[var(--muted-foreground)]">
                Photo placeholder (replace with real image)
              </div>
              <div className="p-4">
                <p className="text-[var(--primary)] font-semibold mb-1">
                  {item.category}
                </p>
                <h2 className="font-semibold mb-1">{item.title}</h2>
                <p className="text-[var(--muted-foreground)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
