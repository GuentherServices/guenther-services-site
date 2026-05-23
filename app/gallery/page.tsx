import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-main)]">
      <Header />

      <main className="flex-1">
        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
            <h1 className="text-3xl font-semibold">Project Gallery</h1>
            <p className="text-sm text-[var(--text-muted)]">
              A look at some of our recent work.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--card)]"
                >
                  <Image
                    src={`/placeholder${i}.jpg`}
                    alt="Project photo"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
