import {
    ArrowRight,
    MapPin,
    PackageCheck,
    Truck,
} from "lucide-react";
import Image from "next/image";

const stats = [
    {
        value: "500+",
        label: "Loads Delivered",
        icon: PackageCheck,
    },
    {
        value: "10+",
        label: "West African Routes",
        icon: MapPin,
    },
    {
        value: "24/7",
        label: "Customer Support",
        icon: Truck,
    },
    {
        value: "98%",
        label: "On-Time Delivery",
        icon: PackageCheck,
    },
];

export default function Hero() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#071A33]">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
                <Image
                    src="/landing.webp"
                    alt="West Africa trucking and logistics"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#071A33]/40" />

            {/* STRONG LEFT GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/95 via-55% to-[#071A33]/20" />

            {/* BOTTOM GRADIENT */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071A33] to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-28 pt-28 sm:px-8 lg:px-10">

                {/* HERO TEXT */}
                <div className="max-w-3xl">

                    {/* LOCATION LABEL */}
                    <div className="mb-6 flex items-center gap-2">
                        <span className="h-[2px] w-7 bg-[#F4C430]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">
                            Ghana, Mali & Beyond
                        </span>
                    </div>

                    {/* HEADLINE */}
                    <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[76px]">
                        Moving your loads.
                        <br />

                        <span className="text-[#F4C430]">
                            Connecting West Africa.
                        </span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                        Reliable trucking and logistics solutions for businesses
                        moving goods across borders, from Ghana to Mali and beyond.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                        <a
                            href="#quote"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#F4C430] px-6 py-3.5 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:shadow-xl hover:shadow-yellow-500/20"
                        >
                            Get a Quote

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#track"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#F4C430] hover:bg-white/15 hover:text-[#F4C430]"
                        >
                            Track Your Load
                        </a>
                    </div>
                </div>

                {/* STATS */}
                <div className="mt-20 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-white/15 pt-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/15">

                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="flex items-center gap-3 md:px-6 first:md:pl-0"
                            >
                                <div className="hidden rounded-lg bg-[#F4C430]/10 p-2.5 sm:block">
                                    <Icon
                                        size={19}
                                        className="text-[#F4C430]"
                                        strokeWidth={2}
                                    />
                                </div>

                                <div>
                                    <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                                        {stat.value}
                                    </p>

                                    <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/50 sm:text-[11px]">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </main>
    );
}