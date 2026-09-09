import {
  Truck,
  ShieldCheck,
  Globe2,
  Clock3,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "We focus on dependable transportation and consistent service from pickup to final delivery.",
  },
  {
    icon: Globe2,
    title: "Regional Coverage",
    description:
      "Our network connects businesses across key West African trade routes and growing markets.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "We understand that time matters. Our team works to keep your cargo moving efficiently.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071A33]">
        {/* Decorative elements */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F4C430]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4C430]/30 bg-[#F4C430]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
              <Truck size={14} />
              About Us
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Moving Business
              <span className="text-[#F4C430]"> Forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              We provide dependable freight and transportation solutions
              designed to keep businesses and cargo moving across West
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image / Visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-[#071A33]">
                <div className="flex aspect-[4/3] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl bg-[#F4C430]">
                      <Image
                        src="/logo.jpg"
                         width={256}
                         height={256}
                        alt="West Africa Logistics"
                        className="h-full w-full object-center object-cover"
                      />
                    </div>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                      West Africa Logistics
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 right-5 rounded-2xl bg-[#F4C430] px-6 py-4 shadow-xl sm:right-8">
                <p className="text-2xl font-bold text-[#071A33]">
                  West Africa
                </p>
                <p className="text-xs font-medium text-[#071A33]/60">
                  Our Network
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071A33] sm:text-4xl">
                Logistics built around
                <span className="text-[#F4C430]"> trust.</span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-500 sm:text-base">
                <p>
                  We are a freight and logistics company focused on
                  providing reliable transportation solutions for
                  businesses operating across West Africa.
                </p>

                <p>
                  From local transportation to cross-border freight,
                  we coordinate the movement of commercial goods with
                  a focus on reliability, efficiency, and clear
                  communication.
                </p>

                <p>
                  Our goal is simple: make moving cargo easier for
                  businesses while building long-term relationships
                  with the people and companies we serve.
                </p>
              </div>

              <a
                href="/quoteform"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#071A33] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2A50]"
              >
                Request a Free Quote
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
              What We Stand For
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071A33] sm:text-4xl">
              Simple principles.
              <br />
              <span className="text-[#F4C430]">Reliable results.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Everything we do is built around providing a dependable
              experience for our customers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430]/40 hover:shadow-xl hover:shadow-[#071A33]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4C430] text-[#071A33] transition-colors duration-300 group-hover:bg-[#071A33] group-hover:text-[#F4C430]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#071A33]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#071A33] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
            Let&apos;s Work Together
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to move your cargo?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            Tell us where your cargo needs to go and let our team help
            you find the right transportation solution.
          </p>

          <a
            href="/quoteform"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F4C430] px-7 py-3.5 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Request a Free Quote
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}