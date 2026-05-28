import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { Button } from "@/components/landing-page/button"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pb-24">
        
        {/* Hero Section */}
        <section className="bg-surface-ice py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
              Our Premium Cleaning Services
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We offer a variety of cleaning services throughout Tampa City and surrounding areas designed to meet the specific needs of our customers. Discover the perfect clean for your space.
            </p>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-16 px-4 md:px-6 max-w-[1200px] mx-auto -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Residential Cleaning (Large Card) */}
            <div className="md:col-span-2 bg-surface rounded-2xl border border-outline-variant/65 shadow-level-1 overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2 hover:border-primary/20 animate-scale-up">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <Image
                  alt="A beautifully cleaned, modern kitchen in Tampa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-tertiary-fixed text-primary px-3 py-1 rounded-full w-fit mb-4">
                  <span className="material-symbols-outlined text-sm font-bold icon-fill animate-pulse">home</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Most Popular</span>
                </div>
                
                <h2 className="font-headline text-2xl font-bold text-primary mb-4">
                  Residential Cleaning
                </h2>
                
                <p className="text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  Experience the transformative power of a thorough deep clean for your home. We specialize in house cleaning services tailored to your needs, whether you require a one-time deep clean or ongoing weekly, bi-weekly, or monthly maintenance.
                </p>
                
                <Link href="/book">
                  <Button variant="outline" size="default" className="flex items-center gap-2 w-fit hover:scale-102 active:scale-98 transition-all">
                    Get Quote
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2. Commercial Cleaning (Small Card) */}
            <div className="bg-surface rounded-2xl border border-outline-variant/65 shadow-level-1 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2 hover:border-primary/20 animate-scale-up">
              <div className="h-48 relative overflow-hidden">
                <Image
                  alt="A clean, structured modern office space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugJrEnXIWbj4F1teZ-xYRrsrG8HVZU-ZyuovXjWsset6hcY_aJKbebnvntlX_cCjq7gbfFM8t0eb7s1rhTJ3GovUNowj5YLxG_xPkkaFzdRZYu9Sm2pejhG-J0LnK_1Gozn4oQg2VDty5yd-ywlnuD2fwPPjGdXe7AAjHJkQegD7Og9_LvYXcxre5V74DFT62IAJiyEtXQMAAcbhPJ6fiD2qlB0-45akvWokRvJ768zJUgY2rrR7p7_Qg"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-lg font-bold text-primary mb-3">
                  Commercial Cleaning
                </h3>
                <p className="text-xs text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  Maintain a clean and professional office environment. Fully insured and licensed cleaners offering tailored schedules to keep your business shining.
                </p>
                <Link className="inline-flex items-center text-xs tracking-wider font-semibold text-secondary hover:text-primary transition-colors gap-1 group-hover:gap-2 duration-200 mt-auto" href="/book">
                  Get Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* 3. Airbnb Turnaround (Medium Card - Half Width) */}
            <div className="md:col-span-2 lg:col-span-1 bg-surface rounded-2xl border border-outline-variant/65 shadow-level-1 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2 hover:border-primary/20 animate-scale-up">
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <Image
                  alt="A clean, welcoming Airbnb rental bedroom setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiq6YQjIuyPiDcOEQO_9a_W1VOarvzX0Q_1BHM_kV2mPaRV_eNnBhaqabBUnM_Arna6OEGgXx2FcZIgpdvbiU3nhXR2VjtK3zHHDClG-CX19jBo_mgXpGZWE-bvxWN0QVpoD4AtQdG0CLGm6n-F6CCTYLaIMFozP3hm5YLwuLkc7fOuHE3UB-YiMKnsnAp5-DOsYrJsx9hpgMvErMEF6Z8G7MTa50SU1EIeCJLJBVbDHxVoe2AsZ99nGdI"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <h3 className="font-headline text-lg font-bold text-primary mb-3">
                  Airbnb Turnaround
                </h3>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed flex-grow">
                  Get your AirBnB space cleaned quickly and efficiently. Friendly, professional cleaners trained for fast turnarounds between guests.
                </p>
                <Link className="inline-flex items-center text-xs tracking-wider font-semibold text-secondary hover:text-primary transition-colors gap-1 group-hover:gap-2 duration-200 mt-auto" href="/book">
                  Get Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* 4. Post-Renovation (Medium Card - Half Width) */}
            <div className="md:col-span-2 lg:col-span-2 bg-surface rounded-2xl border border-outline-variant/65 shadow-level-1 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2 hover:border-primary/20 animate-scale-up">
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <Image
                  alt="Spotless post construction flooring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw"
                  fill
                  sizes="(max-width: 640px) 100vw, 66vw"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <h3 className="font-headline text-lg font-bold text-primary mb-3">
                  Post-Renovation
                </h3>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed flex-grow">
                  A significant undertaking best entrusted to professionals. We remove construction dust and debris, saving you time and ensuring a thorough cleanup.
                </p>
                <Link className="inline-flex items-center text-xs tracking-wider font-semibold text-secondary hover:text-primary transition-colors gap-1 group-hover:gap-2 duration-200 mt-auto" href="/book">
                  Get Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Card Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-[800px] mx-auto bg-surface-ice rounded-2xl p-10 text-center border border-outline-variant/65 shadow-level-1">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4 icon-fill">workspace_premium</span>
            
            <h2 className="font-headline text-2xl font-bold text-primary mb-3">
              A Cleaning Company You Can Rely On!
            </h2>
            
            <p className="text-xs md:text-sm text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed">
              We keep cleaning simple, affordable, and convenient. Safe cleaning products, fully insured, and reliable scheduling in Tampa, FL.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="bg-primary-container text-on-primary font-semibold tracking-wide text-sm px-8 py-4 rounded-md hover:bg-secondary transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 select-none"
                href="tel:+18133362927"
              >
                Call Now
              </a>
              <Link href="/book">
                <Button variant="outline" size="lg" className="bg-surface hover:bg-surface-ice">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
