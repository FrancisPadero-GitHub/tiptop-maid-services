"use client"

import * as React from "react"
import Link from "next/link"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { Button } from "@/components/landing-page/button"

export default function BookPage() {
  const [formData, setFormData] = React.useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    address: "",
    approx_sf: "",
    frequency: "",
    hear_about: "",
    message: "",
  })

  const [submitted, setSubmitted] = React.useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission trigger
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-ice px-4 py-12 md:px-6 md:py-12">
          {/* Subtle background overlay */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-white/40 to-transparent"></div>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="z-10 animate-fade-in-up space-y-6">
              <span className="bg-tertiary-fixed inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary transition-transform duration-200 hover:scale-102">
                Free Commercial & Residential Quotes
              </span>

              <h1 className="font-headline text-4xl leading-tight font-extrabold text-on-surface md:text-5xl">
                Sparkling Clean Solutions <br />
                <span className="text-secondary">Tailored For You.</span>
              </h1>

              <p className="max-w-lg text-sm leading-relaxed text-on-surface-variant md:text-base">
                Serving Tampa and all surrounding areas. Get a free,
                no-obligation quote for your home, office, or AirBnB property
                today. We keep cleaning simple, affordable, and convenient.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-primary-container px-8 py-4 text-sm font-semibold tracking-wide text-on-primary shadow-sm transition-all duration-200 select-none hover:scale-102 hover:bg-secondary active:scale-98"
                  href="#quote-form"
                >
                  Get A Cleaning Quote
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </Link>
                <a
                  className="hover:bg-surface-variant inline-flex items-center gap-2 rounded-md border-2 border-primary-container bg-transparent px-8 py-4 text-sm font-semibold tracking-wide text-primary transition-all duration-200 select-none hover:scale-102 active:scale-98"
                  href="tel:+18133362927"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side Sunlit Living Room Image Banner */}
            <div className="relative hidden h-[380px] animate-scale-up overflow-hidden rounded-2xl border border-outline-variant/65 bg-white shadow-level-2 md:block">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 select-none hover:scale-102"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB48FJpEFAX2C4sKehZx2lzuduothTswU95N-OULtRQUkK7eXmEdNpmfi8LIt1JGrcdAx58A5VWA9l0wreVcTCqF0NSGgsnABCzp1KPofNVVp_X61PvTKTT1Tdw4Pzg4HWQylPcI8lpTcxcIq09wSAC3Yxu5g4zm3hy6Dt3UZuuMzQq9l3K52nUV6iqF1sYZn76FxoSQQN4KnmJetXULOfoZTPIUNEqWdydzo7SMG_B5Jy7dWy-ExiwK1SBnB2eogd-xVH18QW8tJA')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Lead Capture form & Contacts Grid */}
        <section className="px-4 py-12 md:px-6 md:py-12" id="quote-form">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Contact Details (Left Column) */}
            <div className="flex animate-fade-in-up flex-col gap-6 pt-2 lg:col-span-4">
              <div className="space-y-2">
                <h2 className="font-headline text-2xl font-bold text-on-surface">
                  Get in Touch
                </h2>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  We're here to answer any questions and help you schedule your
                  next cleaning.
                </p>
              </div>

              {/* Bento Quick Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Phone Card */}
                <div className="flex items-start gap-4 rounded-xl border border-outline-variant/65 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-level-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-ice text-secondary">
                    <span
                      className="material-symbols-outlined icon-fill"
                      style={{ fontSize: "24px" }}
                    >
                      phone_in_talk
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline mb-1 text-sm font-bold text-on-surface">
                      Call Us
                    </h3>
                    <a
                      className="mb-1 block font-semibold text-primary hover:underline"
                      href="tel:+18133362927"
                    >
                      +1 813-336-2927
                    </a>
                    <p className="text-xs text-on-surface-variant">
                      Same day bookings available.
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 rounded-xl border border-outline-variant/65 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-level-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-ice text-secondary">
                    <span
                      className="material-symbols-outlined icon-fill"
                      style={{ fontSize: "24px" }}
                    >
                      mail
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline mb-1 text-sm font-bold text-on-surface">
                      Email
                    </h3>
                    <a
                      className="text-xs break-all text-primary hover:underline md:text-sm"
                      href="mailto:infotiptopmaidservice@gmail.com"
                    >
                      infotiptopmaidservice@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location/Hours Card */}
                <div className="flex items-start gap-4 rounded-xl border border-outline-variant/65 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-level-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-ice text-secondary">
                    <span
                      className="material-symbols-outlined icon-fill"
                      style={{ fontSize: "24px" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div className="w-full">
                    <h3 className="font-headline mb-1 text-sm font-bold text-on-surface">
                      Service Area & Hours
                    </h3>
                    <p className="mb-2 text-xs text-on-surface-variant md:text-sm">
                      Serving Tampa and all Surrounding Areas!
                    </p>
                    <ul className="space-y-1 text-xs text-on-surface-variant">
                      <li className="border-surface-variant/50 flex justify-between border-b py-1 pb-1.5">
                        <span>Mon - Fri</span> <span>8AM - 6PM</span>
                      </li>
                      <li className="border-surface-variant/50 flex justify-between border-b py-1 pb-1.5">
                        <span>Saturday</span>{" "}
                        <span className="text-error font-medium">Closed</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span>Sunday</span> <span>8AM - 6PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Leads Questionnaire Form (Right Column) */}
            <div className="w-full animate-scale-up lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl border border-outline-variant/65 bg-white p-6 shadow-sm md:p-10">
                {/* Decorative top header line */}
                <div className="absolute top-0 left-0 h-2 w-full bg-primary-container"></div>

                {submitted ? (
                  <div className="animate-in fade-in space-y-4 py-16 text-center duration-300">
                    <span className="material-symbols-outlined icon-fill text-6xl text-success-teal">
                      task_alt
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Quote Request Received!
                    </h3>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-on-surface-variant">
                      Thank you, {formData.contact_person || "there"}! We have
                      received your booking details and our team will reach out
                      to you with an estimate shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="default"
                      className="mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Quote
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="font-headline text-2xl font-bold text-on-surface">
                          Free Cleaning Quote
                        </h2>
                        <p className="text-xs text-on-surface-variant md:text-sm">
                          Fill out the form below and we'll get back to you
                          promptly with an estimate.
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-surface-variant hidden text-[48px] select-none sm:block">
                        assignment
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="company_name"
                          >
                            Company Name{" "}
                            <span className="font-normal text-on-surface-variant">
                              (if applicable)
                            </span>
                          </label>
                          <input
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="company_name"
                            name="company_name"
                            placeholder="Your Company"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            type="text"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="contact_person"
                          >
                            Contact Person *
                          </label>
                          <input
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="contact_person"
                            name="contact_person"
                            placeholder="Full Name"
                            required
                            value={formData.contact_person}
                            onChange={handleInputChange}
                            type="text"
                          />
                        </div>
                      </div>

                      {/* Phone & Email Fields */}
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="phone"
                          >
                            Phone No. *
                          </label>
                          <input
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="phone"
                            name="phone"
                            placeholder="(813) 555-0123"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="email"
                          >
                            Email *
                          </label>
                          <input
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                          />
                        </div>
                      </div>

                      {/* Address Fields */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-on-surface"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <input
                          className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                          id="address"
                          name="address"
                          placeholder="Street Address, City, Zip Code"
                          value={formData.address}
                          onChange={handleInputChange}
                          type="text"
                        />
                      </div>

                      {/* Dropdowns Row */}
                      <div className="grid grid-cols-1 gap-6 rounded-xl border border-outline-variant/50 bg-surface-ice p-4 md:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="approx_sf"
                          >
                            Approx SF
                          </label>
                          <select
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="approx_sf"
                            name="approx_sf"
                            value={formData.approx_sf}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Select size...
                            </option>
                            <option value="1000-2000">1,000 - 2,000 SF</option>
                            <option value="2000-3000">2,000 - 3,000 SF</option>
                            <option value="3000-4000">3,000 - 4,000 SF</option>
                            <option value="4000-6000">4,000 - 6,000 SF</option>
                            <option value="6000-8000">6,000 - 8,000 SF</option>
                            <option value="8000+">8,000 and Above</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            className="text-xs font-semibold text-on-surface"
                            htmlFor="frequency"
                          >
                            Frequency
                          </label>
                          <select
                            className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                            id="frequency"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Select frequency...
                            </option>
                            <option value="weekly">Weekly</option>
                            <option value="bi-weekly">Bi-Weekly</option>
                            <option value="twice-a-week">Twice a week</option>
                            <option value="monthly">Monthly</option>
                            <option value="more-than-once-a-day">
                              More than Once a day
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Hear About Us */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-on-surface"
                          htmlFor="hear_about"
                        >
                          How did you hear about us?
                        </label>
                        <input
                          className="w-full rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                          id="hear_about"
                          name="hear_about"
                          placeholder="Google, Friend, Yelp, etc."
                          value={formData.hear_about}
                          onChange={handleInputChange}
                          type="text"
                        />
                      </div>

                      {/* Message Textarea */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-xs font-semibold text-on-surface"
                          htmlFor="message"
                        >
                          Type your message here...
                        </label>
                        <textarea
                          className="w-full resize-none rounded-md border border-outline-variant/70 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
                          id="message"
                          name="message"
                          placeholder="Any specific cleaning instructions or areas of focus?"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Submit Trigger */}
                      <div className="pt-4">
                        <button
                          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary-container px-10 py-4 text-sm font-semibold tracking-wide text-on-primary shadow-sm transition-colors duration-200 select-none hover:bg-secondary md:w-auto"
                          type="submit"
                        >
                          <span className="material-symbols-outlined text-base">
                            send
                          </span>
                          Get A Cleaning Quote
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
