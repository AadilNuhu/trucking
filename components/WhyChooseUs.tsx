import {
    Clock3,
    Globe2,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    Truck,
} from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        icon: Truck,
        title: "Reliable Fleet",
        description:
            "Well-maintained trucks built to handle demanding regional routes.",
    },
    {
        icon: ShieldCheck,
        title: "Experienced Drivers",
        description:
            "Skilled drivers who understand the road and prioritize safe transport.",
    },
    {
        icon: Globe2,
        title: "Cross-Border Expertise",
        description:
            "Local knowledge to navigate West African routes and border processes.",
    },
    {
        icon: MessageCircle,
        title: "Real-Time Communication",
        description:
            "Stay informed with clear updates throughout your shipment's journey.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Cargo Handling",
        description:
            "Your goods are handled carefully from pickup through final delivery.",
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        description:
            "Reliable planning and execution to get your cargo where it needs to be.",
    },
];

const stats = [
    {
        value: "500+",
        label: "Loads Delivered",
    },
    {
        value: "10+",
        label: "West African Routes",
    },
    {
        value: "24/7",
        label: "Customer Support",
    },
    {
        value: "98%",
        label: "On-Time Delivery",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">

                    {/* LEFT SIDE */}
                    <div>

                        {/* EYEBROW */}
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">
                            Why Choose Us
                        </span>

                        {/* HEADING */}
                        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#071A33] sm:text-5xl">
                            Built for West African freight,
                            <span className="text-[#F4C430]"> every day.</span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                            We combine local expertise with professional logistics
                            standards to deliver your cargo safely and on time.
                        </p>

                        {/* BENEFITS */}
                        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2">

                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={benefit.title}
                                        className="group flex gap-4"
                                    >
                                        {/* ICON */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4C430] transition-all duration-300 ">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.8}
                                                className="text-[#071A33] transition-colors duration-300 group-hover:text-[#071A33]"
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <div>
                                            <h3 className="text-base font-bold text-[#071A33]">
                                                {benefit.title}
                                            </h3>

                                            <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:pt-2">

                        {/* IMAGE */}
                        <div className="group relative overflow-hidden rounded-3xl">
                            <Image
                                src="/landing.webp"
                                alt="West African freight transportation"
                                width={900}
                                height={900}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* IMAGE OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/50 via-transparent to-transparent" />

                            {/* IMAGE LABEL */}
                            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#071A33]/80 px-4 py-3 backdrop-blur-md">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C430]">
                                    Moving West Africa
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white">
                                    Safely. Reliably. On time.
                                </p>
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`px-4 py-5 text-center sm:px-5 ${
                                        index !== stats.length - 1
                                            ? "border-b border-slate-200 sm:border-r"
                                            : ""
                                    } ${
                                        index === 2
                                            ? "sm:border-r-0 xl:border-r"
                                            : ""
                                    }`}
                                >
                                    <p className="text-2xl font-extrabold tracking-tight text-[#071A33]">
                                        {stat.value}
                                    </p>

                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}