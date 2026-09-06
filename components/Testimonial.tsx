import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote:
            "They made our cross-border shipment from Ghana to Mali completely stress-free. Communication was excellent and our cargo arrived exactly when expected.",
        name: "Kwame Mensah",
        role: "Operations Manager",
        company: "Westline Trading",
        initials: "KM",
    },
    {
        quote:
            "What impressed us most was how quickly they responded. They understood our requirements, arranged the right truck and kept us updated throughout the journey.",
        name: "Abdul Karim",
        role: "Logistics Coordinator",
        company: "Sahel Imports",
        initials: "AK",
    },
    {
        quote:
            "Reliable, professional and easy to work with. We now have peace of mind knowing our goods are being handled by an experienced logistics team.",
        name: "Michael Owusu",
        role: "Business Owner",
        company: "Prime Distribution",
        initials: "MO",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#F7F9FC] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mx-auto max-w-2xl text-center">

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">
                        Customer Stories
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#071A33] sm:text-5xl">
                        Trusted to Move What Matters
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
                        Businesses across West Africa trust us to move their
                        cargo safely, reliably and on time.
                    </p>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="mt-16 grid gap-6 lg:grid-cols-3">

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F4C430]/40 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
                        >

                            {/* QUOTE ICON */}
                            <div className="flex items-center justify-between">

                                {/* STARS */}
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={15}
                                            className="text-[#F4C430]"
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* QUOTE */}
                            <p className="mt-7 flex-1 text-[15px] leading-7 text-slate-600">
                                “{testimonial.quote}”
                            </p>

                            {/* CUSTOMER */}
                            <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">

                                {/* AVATAR */}
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#071A33] text-sm font-bold text-[#F4C430]">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#071A33]">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-0.5 text-xs text-slate-400">
                                        {testimonial.role} · {testimonial.company}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* BOTTOM TRUST INDICATOR */}
                <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={17}
                                className="text-[#F4C430]"
                                fill="currentColor"
                            />
                        ))}
                    </div>

                    <p className="text-sm font-medium text-slate-500">
                        Trusted by businesses moving cargo across West Africa
                    </p>
                </div>

            </div>
        </section>
    );
}