"use client";

import { useState } from "react";
import {
  MapPin,
  Package,
  Weight,
  Truck,
  CalendarDays,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const loadTypes = [
  "General Cargo",
  "Heavy / Oversized",
  "Bulk Cargo",
  "Food & Beverages",
  "Construction Materials",
  "Agricultural Products",
  "Machinery & Equipment",
  "Other",
];

const truckTypes = [
  "Flatbed Truck",
  "Box Truck",
  "Curtainsider",
  "Dry Van",
  "Lowboy / Heavy Haul",
  "Tanker",
  "Dump Truck",
  "Not Sure",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F4C430]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#071A33]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#F4C430]/30 bg-[#F4C430]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#071A33]">
            Free Quote
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071A33] sm:text-4xl lg:text-5xl">
            Tell Us About Your
            <span className="text-[#F4C430]"> Shipment</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Share a few details about your cargo and route. Our logistics
            team will review your request and get back to you with a quote.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(7,26,51,0.10)]">
          {/* Top accent */}
          <div className="h-1.5 bg-[#F4C430]" />

          <div className="p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2
                    size={40}
                    className="text-emerald-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071A33]">
                  Quote Request Received
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Thank you for your request. Our team will review your
                  shipment details and contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-[#071A33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B2A50]"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Section 01 */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071A33] text-sm font-bold text-white">
                      01
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#071A33]">
                        Shipment Route
                      </h3>
                      <p className="text-xs text-slate-400">
                        Where is your cargo going?
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {/* Pickup */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Pickup Location
                      </label>

                      <div className="relative">
                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="pickupLocation"
                          required
                          placeholder="e.g. Accra, Ghana"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>

                    {/* Delivery */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Delivery Location
                      </label>

                      <div className="relative">
                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="deliveryLocation"
                          required
                          placeholder="e.g. Bamako, Mali"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-10 h-px bg-slate-100" />

                {/* Section 02 */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071A33] text-sm font-bold text-white">
                      02
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#071A33]">
                        Cargo Details
                      </h3>
                      <p className="text-xs text-slate-400">
                        Help us understand what you are shipping.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {/* Load Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Load Type
                      </label>

                      <div className="relative">
                        <Package
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <select
                          name="loadType"
                          required
                          defaultValue=""
                          className="h-13 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-[#071A33] outline-none transition focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        >
                          <option value="" disabled>
                            Select load type
                          </option>

                          {loadTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Estimated Weight */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Estimated Weight
                      </label>

                      <div className="relative">
                        <Weight
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="estimatedWeight"
                          required
                          placeholder="e.g. 10,000 kg"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>

                    {/* Truck Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Truck Type
                      </label>

                      <div className="relative">
                        <Truck
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <select
                          name="truckType"
                          required
                          defaultValue=""
                          className="h-13 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-[#071A33] outline-none transition focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        >
                          <option value="" disabled>
                            Select truck type
                          </option>

                          {truckTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Pickup Date
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="date"
                          name="pickupDate"
                          required
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-10 h-px bg-slate-100" />

                {/* Section 03 */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071A33] text-sm font-bold text-white">
                      03
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#071A33]">
                        Contact Information
                      </h3>
                      <p className="text-xs text-slate-400">
                        Where should we send your quote?
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+233 XX XXX XXXX"
                          className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#071A33] outline-none transition placeholder:text-slate-400 focus:border-[#F4C430] focus:bg-white focus:ring-4 focus:ring-[#F4C430]/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 rounded-2xl bg-[#071A33] p-5 sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">
                        Ready to move your cargo?
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/50">
                        Submit your details and our logistics team will
                        prepare your quote.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F4C430] px-7 py-3.5 text-sm font-bold text-[#071A33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD84D] hover:shadow-lg hover:shadow-yellow-500/20"
                    >
                      Request Free Quote
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-center text-xs text-slate-400">
                  No commitment required. Your information is only used to
                  prepare your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}