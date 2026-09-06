import {
    ClipboardList,
    Route,
    Truck,
    PackageCheck,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Request a Quote",
        description:
            "Tell us what you're shipping and where it needs to go. We respond quickly with a tailored solution.",
    },
    {
        number: "02",
        icon: Route,
        title: "Plan Your Load",
        description:
            "We arrange the right truck and transportation solution for your cargo type and destination.",
    },
    {
        number: "03",
        icon: Truck,
        title: "We Transport",
        description:
            "Your cargo moves safely along the planned route with experienced drivers and real-time tracking.",
    },
    {
        number: "04",
        icon: PackageCheck,
        title: "Safe Delivery",
        description:
            "Your goods arrive at their destination, with clear communication throughout the entire journey.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">

                {/* SECTION HEADER */}
                <div className="mx-auto max-w-2xl text-center">

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">
                        Simple Process
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#071A33] sm:text-5xl">
                        How It Works
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
                        From your first request to final delivery, we make
                        moving your cargo across West Africa simple and reliable.
                    </p>
                </div>

                {/* STEPS */}
                <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* CONNECTING LINE */}
                    <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-slate-200 lg:block" />

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F4C430]/50 hover:shadow-xl hover:shadow-slate-200/50"
                            >

                                {/* ICON */}
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-300">
                                    <Icon
                                        size={27}
                                        strokeWidth={1.8}
                                        className="text-[#071A33] transition-colors duration-300"
                                    />
                                </div>

                                {/* STEP NUMBER */}
                                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-[#F4C430]">
                                    STEP {step.number}
                                </span>

                                {/* TITLE */}
                                <h3 className="mt-2 text-xl font-bold text-[#071A33]">
                                    {step.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}