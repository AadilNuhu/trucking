"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  Truck,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    value: "Accra, Ghana",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 530 556 865",
    href: "tel:+233530556865",
  },
  {
    icon: Mail,
    title: "Email",
    value: "newmandesmond@yahoo.com",
    href: "mailto:newmandesmond@yahoo.com",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon – Fri, 8:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071A33]">
        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F4C430]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4C430]/30 bg-[#F4C430]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
              <Truck size={14} />
              Contact Us
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Move Your
              <span className="text-[#F4C430]"> Cargo.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Have a question about our services, routes, or your next
              shipment? Get in touch with our logistics team and we&apos;ll
              be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative -mt-8 pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTACT INFORMATION */}
            <div className="rounded-3xl bg-[#071A33] p-7 shadow-[0_25px_70px_rgba(7,26,51,0.15)] sm:p-9 lg:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
                Get In Touch
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                We&apos;re here to help.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/50">
                Whether you&apos;re planning a shipment across West Africa
                or simply have a question, our team is ready to assist.
              </p>

              <div className="mt-9 space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F4C430]">
                        <Icon size={19} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm font-medium text-white/80">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>

              {/* Quote CTA */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-sm text-white/50">
                  Need a shipping estimate?
                </p>

                <a
                  href="/quoteform"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#F4C430] transition-colors hover:text-[#FFD84D]"
                >
                  Request a Free Quote
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_25px_70px_rgba(7,26,51,0.08)] sm:p-9 lg:p-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4C430]">
                  Send A Message
                </span>

                <h2 className="mt-3 text-2xl font-bold text-[#071A33] sm:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form below and our team will get back to
                  you as soon as possible.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4C430] px-6 py-4 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  Send Message
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-slate-400">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}