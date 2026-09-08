
import Image from "next/image";

const fleetImages = [
    {
        src: "/truck.jpg",
        alt: "Long-haul freight truck ready for regional transport",
        label: "Fleet in motion",
        featured: true,
    },
    {
        src: "/truck4.jpg",
        alt: "Freight truck prepared for a regional delivery",
        label: "Long-haul freight",
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
        label: "Load-ready transport",
        featured: false,
    },
    {
        src: "/demo-truck.jpg",
        alt: "Company trucks front view",
        label: "Our fleet",
        featured: false,
    },
    {
        src: "/truck5.jpg",
        alt: "Company truck ready for transport",
        label: "Ready to deliver",
        featured: false,
    },
];

export default function FleetShowcase() {
    return (
        <section className="relative overflow-hidden bg-[#F7F9FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A900]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F4C430]" />
                        Our Fleet
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#071A33] sm:text-4xl lg:text-5xl">
                        Built for the road ahead.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base lg:mx-0 lg:text-lg">
                        Reliable trucks prepared to move commercial cargo safely
                        and efficiently across West Africa.
                    </p>
                </div>

                {/* Fleet Grid */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

                    {fleetImages.map((image, index) => (
                        <div
                            key={image.src}
                            className={`
                                group relative overflow-hidden rounded-2xl
                                bg-[#071A33]
                                shadow-sm
                                ring-1 ring-slate-200/70
                                transition-all duration-500
                                hover:-translate-y-1
                                hover:shadow-xl
                                ${image.featured
                                    ? "sm:col-span-2 lg:row-span-2"
                                    : ""
                                }
                            `}
                        >
                            {/* Image */}
                            <div
                                className={`
                                    relative w-full overflow-hidden
                                    ${image.featured
                                        ? "aspect-[4/3] sm:aspect-[4/3] lg:h-full lg:min-h-[560px]"
                                        : "aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]"
                                    }
                                `}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index === 0}
                                    sizes={
                                        image.featured
                                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    }
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                                {/* Gradient Overlay */}
                                <div className="
                                    absolute inset-0
                                    bg-gradient-to-t
                                    from-[#071A33]/90
                                    via-[#071A33]/20
                                    to-transparent
                                " />

                                {/* Hover Overlay */}
                                <div className="
                                    absolute inset-0
                                    bg-[#071A33]/10
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                " />

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                    <div className="flex items-end justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F4C430]">
                                                Fleet
                                            </p>

                                            <p className="
                                                mt-1
                                                text-sm
                                                font-bold
                                                text-white
                                                sm:text-base
                                            ">
                                                {image.label}
                                            </p>
                                        </div>

                                        <div className="
                                            flex h-9 w-9 shrink-0
                                            items-center justify-center
                                            rounded-full
                                            border border-white/20
                                            bg-white/10
                                            backdrop-blur-sm
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#F4C430]
                                            group-hover:text-[#071A33]
                                        ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M7 17 17 7M7 7h10v10"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="
                    mt-8
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-4
                    sm:gap-4
                ">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <p className="text-2xl font-extrabold text-[#071A33] sm:text-3xl">
                            24/7
                        </p>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                            Fleet readiness
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <p className="text-2xl font-extrabold text-[#071A33] sm:text-3xl">
                            100%
                        </p>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                            Cargo focused
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <p className="text-2xl font-extrabold text-[#071A33] sm:text-3xl">
                            WA
                        </p>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                            Regional coverage
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                        <p className="text-2xl font-extrabold text-[#071A33] sm:text-3xl">
                            Safe
                        </p>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                            Transport first
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}