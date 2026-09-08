import { Truck, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Truck Load", href: "/truckload" },
  { name: "Routes", href: "/routes" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071A33] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4C430]">
                <Truck
                  size={24}
                  strokeWidth={2.2}
                  className="text-[#071A33]"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">
                  Trucking
                </span>

                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#F4C430]">
                  West Africa Logistics
                </span>
              </div>
            </a>

            <p className="mt-6 text-sm leading-6 text-white/60">
              Professional freight and logistics solutions tailored for
              West African trade corridors. Connecting businesses,
              cargo, and communities across the region.
            </p>

            <a
              href="/quoteform"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F4C430] transition-colors hover:text-[#FFD84D]"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#F4C430]">
              Navigation
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#F4C430]">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-white/60">
              <p>
                Accra, Ghana
              </p>

              <a
                href="tel:+233530556865"
                className="block transition-colors hover:text-white"
              >
                +233 53 055 6865
              </a>

              <a
                href="mailto:newmandesmond@yahoo.com"
                className="block transition-colors hover:text-white"
              >
                newmandesmond@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Trucking West Africa Logistics.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}