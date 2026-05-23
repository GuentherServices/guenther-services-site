"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border-subtle)] bg-[rgba(5,8,22,0.9)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold tracking-tight">
          Guenther <span className="text-[var(--accent)]">Services</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:15136303818"
            className="hidden text-sm font-medium text-[var(--text-main)] md:inline"
          >
            (513) 630-3818
          </a>
          <Link
            href="/booking"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-[rgba(34,197,94,0.35)] hover:bg-emerald-400 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
