"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Truck,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Truck Load", href: "/truckload" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Check if the current page matches the navigation link
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#071A33]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4C430] shadow-lg shadow-yellow-500/10">
            <Truck
              size={25}
              strokeWidth={2.2}
              className="text-[#071A33]"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white">
              Trucking
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#F4C430]">
              West Africa Logistics
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <a
                key={link.name}
                href={link.href}
                className={`group relative py-2 text-[14px] font-medium transition-colors duration-200 ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active / Hover Line */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#F4C430] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="/quoteform"
          className="hidden items-center gap-2 rounded-lg bg-[#F4C430] px-5 py-3 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20 lg:flex"
        >
          Get a Quote
          <ChevronRight size={17} strokeWidth={2.5} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#F4C430] hover:text-[#F4C430] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#071A33] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-3 sm:px-8">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#F4C430]"
                      : "text-white/80 hover:text-[#F4C430]"
                  }`}
                >
                  <span>{link.name}</span>

                  <ChevronRight
                    size={17}
                    className={
                      active
                        ? "text-[#F4C430]"
                        : "text-white/50"
                    }
                  />
                </a>
              );
            })}

            {/* Mobile CTA */}
            <a
              href="/quoteform"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#F4C430] px-5 py-3.5 text-sm font-bold text-[#071A33] transition hover:bg-[#FFD84D]"
            >
              Get a Quote
              <ChevronRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}