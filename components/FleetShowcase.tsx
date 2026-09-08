import Image from "next/image";

const fleetImages = [
  {
    src: "/truck.jpg",
    alt: "Long-haul freight truck ready for regional transport",
    label: "Long-haul freight",
    featured: true,
  },
  {
    src: "/truck1.jpg",
    alt: "Freight truck prepared for a regional delivery",
    label: "Load-ready transport",
    featured: false,
  },
  {
    src: "/truck2.jpg",
    alt: "Commercial truck supporting West African freight routes",
    label: "Regional hauling",
    featured: false,
  },
  {
    src: "/truck3.jpg",
    alt: "Company trucks lined up at the depot",
    label: "Fleet in motion",
    featured: false,
  },
];

export default function FleetShowcase() {
  return (
    <section className="bg-[#F7F9FC] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">
            Our Fleet
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#071A33] sm:text-5xl">
            Built for the road ahead.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Reliable trucks prepared to move commercial cargo safely across
            West Africa.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fleetImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ${
                image.featured ? "sm:col-span-2" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1536}
                height={1024}
                className={`h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  image.featured ? "sm:min-h-[420px]" : ""
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/75 via-transparent to-transparent" />

              <p className="absolute bottom-5 left-5 text-sm font-bold text-white">
                {image.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}