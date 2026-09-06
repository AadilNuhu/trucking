import {
  Truck,
  Package,
  Globe2,
  Boxes,
  Route,
  MapPin,
} from "lucide-react";

const services = [
  {
    title: "Cross-Border Trucking",
    description:
      "Reliable transportation of commercial goods across West Africa with full customs coordination.",
    icon: Truck,
  },
  {
    title: "Load Transportation",
    description:
      "Efficient movement of commercial loads with dependable scheduling, handling, and delivery coordination.",
    icon: Package,
  },
  {
    title: "Ghana–Mali Freight",
    description:
      "Specialized freight solutions connecting Ghana and Mali with coordinated cross-border transportation and customs support.",
    icon: Globe2,
  },
  {
    title: "Heavy & Bulk Loads",
    description:
      "Safe and reliable transportation for heavy, oversized, and bulk cargo across regional trade routes.",
    icon: Boxes,
  },
  {
    title: "Logistics Coordination",
    description:
      "End-to-end coordination of transport, documentation, customs, and delivery to keep your cargo moving smoothly.",
    icon: Route,
  },
  {
    title: "Cargo Tracking",
    description:
      "Stay informed throughout the journey with reliable cargo monitoring and timely shipment updates.",
    icon: MapPin,
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8FAFC] py-15 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center mt-7">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
            What We Offer
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#062B5C] md:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto mt-2 max-w-2xl leading-7 text-gray-600 text-base">
            Professional freight and logistics solutions tailored for West
            African trade corridors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Yellow accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#F4C400]" />

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4C400] transition-colors duration-300 ">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="text-[#062B5C]"
                  />
                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-4xl font-bold text-[#062B5C]/5">
                  0{index + 1}
                </span>

                <h3 className="mb-3 text-xl font-bold text-[#062B5C]">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-0.5 w-0 bg-[#F4C400] transition-all duration-300 group-hover:w-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}