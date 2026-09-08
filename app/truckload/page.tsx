import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Container,
  Package,
  Truck,
  Weight,
} from "lucide-react";

import FleetShowcase from "@/components/FleetShowcase"

const cargoTypes = [
  {
    title: "General Cargo",
    description:
      "Packaged goods, retail products, and everyday commercial cargo.",
    icon: Package,
  },
  {
    title: "Heavy & Oversized",
    description:
      "Heavy machinery, equipment, and oversized commercial loads.",
    icon: Weight,
  },
  {
    title: "Bulk Cargo",
    description:
      "Large-volume materials and bulk commercial goods.",
    icon: Boxes,
  },
  {
    title: "Machinery & Equipment",
    description:
      "Industrial machinery, generators, equipment, and large assets.",
    icon: Container,
  },
];

const truckTypes = [
  {
    number: "01",
    title: "Flatbed Truck",
    description:
      "Ideal for machinery, steel, construction materials, and oversized cargo.",
  },
  {
    number: "02",
    title: "Box Truck",
    description:
      "Suitable for general commercial goods requiring enclosed transportation.",
  },
  {
    number: "03",
    title: "Curtainsider",
    description:
      "Flexible loading access for palletized and general commercial cargo.",
  },
  {
    number: "04",
    title: "Lowboy / Heavy Haul",
    description:
      "Designed for heavy machinery and large oversized equipment.",
  },
];

export default function TruckLoadPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#071A33]">
      {/* =========================
          HERO / LANDING
      ========================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#071A33]">
        {/* Main truck image */}
        <Image
          src="/truck.jpg"
          alt="Freight truck transporting cargo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-[#071A33]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/80 to-[#071A33]/20" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4C430]/30 bg-[#F4C430]/10 px-4 py-2">
              <Truck size={16} className="text-[#F4C430]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
                Truck Load
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Right Truck
              <span className="block text-[#F4C430]">
                For Every Load.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Reliable truckload transportation for commercial cargo
              across Ghana and major West African trade corridors.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/quoteform"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F4C430] px-6 py-3.5 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20"
              >
                Get a Quote
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>

              <a
                href="#cargo"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#F4C430] hover:text-[#F4C430]"
              >
                Explore Our Loads
              </a>
            </div>
          </div>
        </div>

        {/* Bottom information bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#071A33]/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            <div className="border-r border-white/10 px-5 py-5 sm:px-8">
              <p className="text-sm font-bold text-white">
                Commercial Cargo
              </p>

              <p className="mt-1 text-xs text-white/45">
                Reliable transportation
              </p>
            </div>

            <div className="border-r-0 px-5 py-5 sm:px-8 lg:border-r lg:border-white/10">
              <p className="text-sm font-bold text-white">
                Heavy Loads
              </p>

              <p className="mt-1 text-xs text-white/45">
                Specialized equipment
              </p>
            </div>

            <div className="hidden border-r border-white/10 px-8 py-5 lg:block">
              <p className="text-sm font-bold text-white">
                Cross-Border
              </p>

              <p className="mt-1 text-xs text-white/45">
                West African routes
              </p>
            </div>

            <div className="hidden px-8 py-5 lg:block">
              <p className="text-sm font-bold text-white">
                Professional
              </p>

              <p className="mt-1 text-xs text-white/45">
                Logistics coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CARGO TYPES
      ========================== */}
      <section id="cargo" className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">
              What We Carry
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071A33] sm:text-4xl">
              Cargo Solutions Built Around Your Load
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Whether you are moving everyday commercial goods or
              heavy equipment, we provide transportation solutions
              suited to your cargo.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cargoTypes.map((cargo) => {
              const Icon = cargo.icon;

              return (
                <div
                  key={cargo.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430] hover:shadow-xl"
                >
                  <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-[#F4C430]" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071A33] transition-all duration-300 group-hover:bg-[#F4C430]">
                    <Icon
                      size={22}
                      className="text-[#F4C430] transition-colors duration-300 group-hover:text-[#071A33]"
                    />
                  </div>

                  <h3 className="mt-6 text-base font-bold text-[#071A33]">
                    {cargo.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {cargo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          TRUCK OPTIONS
      ========================== */}
      <FleetShowcase />

      {/* =========================
          TRUCK OPTIONS
      ========================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A33]">
                <Truck
                  size={27}
                  className="text-[#F4C430]"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">
                Truck Options
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071A33] sm:text-4xl">
                The Right Equipment for the Job
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Every shipment is different. We help identify the
                right truck based on your cargo, weight, dimensions,
                loading requirements, and route.
              </p>

              <a
                href="/quoteform"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071A33] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2b52]"
              >
                Find the Right Truck
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
              {truckTypes.map((truck) => (
                <div
                  key={truck.title}
                  className="group flex gap-5 p-6 transition-colors duration-300 hover:bg-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4C430] text-xs font-bold text-[#071A33]">
                    {truck.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-bold text-[#071A33] sm:text-base">
                        {truck.title}
                      </h3>

                      <ArrowRight
                        size={17}
                        className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F4C430]"
                      />
                    </div>

                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                      {truck.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE BANNER
      ========================== */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/truck.jpg"
          alt="Truck transporting cargo"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071A33]/70" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">
              Moving Across West Africa
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Pickup to Delivery,
              <span className="block text-[#F4C430]">
                We Keep Your Cargo Moving.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Reliable transportation and professional logistics
              coordination for businesses moving cargo across the
              region.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="bg-[#071A33] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B274A] px-6 py-12 sm:px-10 lg:px-14">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F4C430]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">
                  Ready to Move?
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Have a Load to Move?
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  Tell us what you're transporting and where it needs
                  to go. We'll help you find the right truck and route.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Reliable Transport",
                    "Regional Coverage",
                    "Professional Coordination",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-white/70"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#F4C430]"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/quoteform"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F4C430] px-7 py-4 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20"
              >
                Request a Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}