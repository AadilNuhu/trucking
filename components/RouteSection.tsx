import Image from "next/image";
import { ArrowRight, Clock3, MapPin } from "lucide-react";

const routes = [
  {
    title: "Accra, GH → Mali",
    duration: "3–5 Days",
    featured: true,
  },
  {
    title: "Accra → Burkina Faso",
    duration: "3–5 Days",
    featured: false,
  },
  {
    title: "Accra → Côte d’Ivoire",
    duration: "3–5 Days",
    featured: false,
  },
  {
    title: "Accra → Togo & Benin",
    duration: "3–5 Days",
    featured: false,
  },
];

export default function Routes() {
  return (
    <section className="bg-[#062B5C] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
            Coverage Network
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Connecting Business Across West Africa
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Our transportation network covers major trade corridors connecting
            Ghana, Mali, Burkina Faso, Côte d’Ivoire, Togo, Benin and more.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[7fr_3fr]">

          {/* Network Image */}
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/routes.jpg"
              alt="West Africa transportation network"
              fill
              className="object-cover"
              priority
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/90 via-[#062B5C]/20 to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 p-7 md:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C400]">
                <MapPin className="text-[#062B5C]" size={22} />
              </div>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Built Around Your Trade Routes
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-white/75 md:text-base">
                Reliable road freight connecting key commercial destinations
                across the region.
              </p>
            </div>
          </div>

          {/* Routes */}
          <div className="flex flex-col gap-4">
            {routes.map((route, index) => (
              <div
                key={route.title}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                  route.featured
                    ? "bg-[#F4C400] text-[#062B5C] shadow-lg"
                    : "border border-white/10 bg-white/[0.07] text-white backdrop-blur-md hover:bg-white/[0.12]"
                }`}
              >
                {/* Route Number */}
                <span
                  className={`absolute right-5 top-3 text-4xl font-bold ${
                    route.featured
                      ? "text-[#062B5C]/10"
                      : "text-white/[0.04]"
                  }`}
                >
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  {/* Label */}
                  {route.featured && (
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#062B5C]/70">
                      Featured Route
                    </p>
                  )}

                  {/* Route */}
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className={
                        route.featured
                          ? "text-[#062B5C]"
                          : "text-[#F4C400]"
                      }
                    />

                    <h3 className="text-lg font-bold">
                      {route.title}
                    </h3>
                  </div>

                  {/* Duration */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-sm ${
                      route.featured
                        ? "text-[#062B5C]/70"
                        : "text-white/60"
                    }`}
                  >
                    <Clock3 size={16} />

                    <span>Estimated transit: {route.duration}</span>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${
                      route.featured
                        ? "bg-[#062B5C] text-white"
                        : "bg-[#F4C400] text-[#062B5C]"
                    }`}
                  >
                    <ArrowRight size={17} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}