"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-[var(--border)] bg-[var(--background)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Guenther Services
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <a href="tel:5136303818" className="hidden sm:inline">
            (513) 630‑3818
          </a>
          <Link
            href="/booking"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
