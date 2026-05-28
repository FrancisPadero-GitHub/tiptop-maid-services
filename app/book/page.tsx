"use client"

import * as React from "react"
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        <section className="bg-surface-ice py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10 space-y-6 animate-fade-in-up">
              <span className="inline-block bg-tertiary-fixed text-primary font-semibold text-xs tracking-wide px-4 py-1.5 rounded-full hover:scale-102 transition-transform duration-200">
                Free Commercial & Residential Quotes
              </span>
              
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">
                Sparkling Clean Solutions <br />
                <span className="text-secondary">Tailored For You.</span>
              </h1>
              
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-lg">
                Serving Tampa and all surrounding areas. Get a free, no-obligation quote for your home, office, or AirBnB property today. We keep cleaning simple, affordable, and convenient.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a className="bg-primary-container text-on-primary font-semibold tracking-wide text-sm px-8 py-4 rounded-md hover:bg-secondary transition-all duration-200 shadow-sm inline-flex items-center gap-2 select-none hover:scale-102 active:scale-98" href="#quote-form">
                  Get A Cleaning Quote
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
                <a
                  className="bg-transparent text-primary border-2 border-primary-container font-semibold tracking-wide text-sm px-8 py-4 rounded-md hover:bg-surface-variant transition-all duration-200 inline-flex items-center gap-2 select-none hover:scale-102 active:scale-98"
                  href="tel:+18133362927"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side Sunlit Living Room Image Banner */}
            <div className="relative hidden md:block rounded-2xl overflow-hidden shadow-level-2 border border-outline-variant/65 bg-white h-[380px] animate-scale-up">
              <div
                className="absolute inset-0 bg-cover bg-center select-none hover:scale-102 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB48FJpEFAX2C4sKehZx2lzuduothTswU95N-OULtRQUkK7eXmEdNpmfi8LIt1JGrcdAx58A5VWA9l0wreVcTCqF0NSGgsnABCzp1KPofNVVp_X61PvTKTT1Tdw4Pzg4HWQylPcI8lpTcxcIq09wSAC3Yxu5g4zm3hy6Dt3UZuuMzQq9l3K52nUV6iqF1sYZn76FxoSQQN4KnmJetXULOfoZTPIUNEqWdydzo7SMG_B5Jy7dWy-ExiwK1SBnB2eogd-xVH18QW8tJA')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Lead Capture form & Contacts Grid */}
        <section className="py-16 md:py-20 px-4 md:px-6" id="quote-form">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details (Left Column) */}
            <div className="lg:col-span-4 flex flex-col gap-6 pt-2 animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="font-headline text-2xl font-bold text-on-surface">Get in Touch</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  We're here to answer any questions and help you schedule your next cleaning.
                </p>
              </div>

              {/* Bento Quick Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Phone Card */}
                <div className="bg-white border border-outline-variant/65 rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-level-2 hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-surface-ice rounded-full flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: "24px" }}>
                      phone_in_talk
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-sm font-bold text-on-surface mb-1">Call Us</h3>
                    <a className="font-semibold text-primary hover:underline block mb-1" href="tel:+18133362927">
                      +1 813-336-2927
                    </a>
                    <p className="text-xs text-on-surface-variant">Same day bookings available.</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white border border-outline-variant/65 rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-level-2 hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-surface-ice rounded-full flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: "24px" }}>
                      mail
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-sm font-bold text-on-surface mb-1">Email</h3>
                    <a className="text-xs md:text-sm text-primary hover:underline break-all" href="mailto:infotiptopmaidservice@gmail.com">
                      infotiptopmaidservice@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location/Hours Card */}
                <div className="bg-white border border-outline-variant/65 rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-level-2 hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-surface-ice rounded-full flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: "24px" }}>
                      location_on
                    </span>
                  </div>
                  <div className="w-full">
                    <h3 className="font-headline text-sm font-bold text-on-surface mb-1">Service Area & Hours</h3>
                    <p className="text-xs md:text-sm text-on-surface-variant mb-2">
                      Serving Tampa and all Surrounding Areas!
                    </p>
                    <ul className="text-xs text-on-surface-variant space-y-1">
                      <li className="flex justify-between border-b border-surface-variant/50 pb-1.5 py-1">
                        <span>Mon - Fri</span> <span>8AM - 6PM</span>
                      </li>
                      <li className="flex justify-between border-b border-surface-variant/50 pb-1.5 py-1">
                        <span>Saturday</span> <span className="text-error font-medium">Closed</span>
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
            <div className="lg:col-span-8 w-full animate-scale-up">
              <div className="bg-white border border-outline-variant/65 rounded-2xl shadow-sm p-6 md:p-10 relative overflow-hidden">
                {/* Decorative top header line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-container"></div>
                
                {submitted ? (
                  <div className="text-center py-16 space-y-4 animate-in fade-in duration-300">
                    <span className="material-symbols-outlined text-6xl text-success-teal icon-fill">task_alt</span>
                    <h3 className="font-headline text-2xl font-bold text-primary">Quote Request Received!</h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.contact_person || "there"}! We have received your booking details and our team will reach out to you with an estimate shortly.
                    </p>
                    <Button variant="outline" size="default" className="mt-4" onClick={() => setSubmitted(false)}>
                      Submit Another Quote
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="font-headline text-2xl font-bold text-on-surface">Free Cleaning Quote</h2>
                        <p className="text-xs md:text-sm text-on-surface-variant">
                          Fill out the form below and we'll get back to you promptly with an estimate.
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-[48px] text-surface-variant hidden sm:block select-none">
                        assignment
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-on-surface" htmlFor="company_name">
                            Company Name <span className="text-on-surface-variant font-normal">(if applicable)</span>
                          </label>
                          <input
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
                            id="company_name"
                            name="company_name"
                            placeholder="Your Company"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            type="text"
                          />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-on-surface" htmlFor="contact_person">
                            Contact Person *
                          </label>
                          <input
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-on-surface" htmlFor="phone">
                            Phone No. *
                          </label>
                          <input
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
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
                          <label className="text-xs font-semibold text-on-surface" htmlFor="email">
                            Email *
                          </label>
                          <input
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
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
                        <label className="text-xs font-semibold text-on-surface" htmlFor="address">
                          Address
                        </label>
                        <input
                          className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
                          id="address"
                          name="address"
                          placeholder="Street Address, City, Zip Code"
                          value={formData.address}
                          onChange={handleInputChange}
                          type="text"
                        />
                      </div>

                      {/* Dropdowns Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-ice p-4 rounded-xl border border-outline-variant/50">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-on-surface" htmlFor="approx_sf">
                            Approx SF
                          </label>
                          <select
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
                            id="approx_sf"
                            name="approx_sf"
                            value={formData.approx_sf}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>Select size...</option>
                            <option value="1000-2000">1,000 - 2,000 SF</option>
                            <option value="2000-3000">2,000 - 3,000 SF</option>
                            <option value="3000-4000">3,000 - 4,000 SF</option>
                            <option value="4000-6000">4,000 - 6,000 SF</option>
                            <option value="6000-8000">6,000 - 8,000 SF</option>
                            <option value="8000+">8,000 and Above</option>
                          </select>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-on-surface" htmlFor="frequency">
                            Frequency
                          </label>
                          <select
                            className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
                            id="frequency"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>Select frequency...</option>
                            <option value="weekly">Weekly</option>
                            <option value="bi-weekly">Bi-Weekly</option>
                            <option value="twice-a-week">Twice a week</option>
                            <option value="monthly">Monthly</option>
                            <option value="more-than-once-a-day">More than Once a day</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Hear About Us */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-on-surface" htmlFor="hear_about">
                          How did you hear about us?
                        </label>
                        <input
                          className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm bg-white outline-none"
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
                        <label className="text-xs font-semibold text-on-surface" htmlFor="message">
                          Type your message here...
                        </label>
                        <textarea
                          className="rounded-md border border-outline-variant/70 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-sm py-3 px-4 w-full shadow-sm resize-none bg-white outline-none"
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
                          className="w-full md:w-auto bg-primary-container text-on-primary font-semibold tracking-wide text-sm px-10 py-4 rounded-md hover:bg-secondary transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 select-none cursor-pointer"
                          type="submit"
                        >
                          <span className="material-symbols-outlined text-base">send</span>
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
