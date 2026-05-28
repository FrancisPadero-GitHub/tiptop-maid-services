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
        <section className="bg-surface-ice px-4 py-10 md:px-6 md:py-10">
          <div className="mx-auto max-w-[1200px] animate-fade-in-up space-y-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
              Our Premium Cleaning Services
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
              We offer a variety of cleaning services throughout Tampa City and
              surrounding areas designed to meet the specific needs of our
              customers. Discover the perfect clean for your space.
            </p>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="relative z-10 mx-auto -mt-12 max-w-[1200px] px-4 py-16 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 1. Residential Cleaning (Large Card) */}
            <div className="group flex animate-scale-up flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2 md:col-span-2 md:flex-row">
              <div className="relative h-64 overflow-hidden md:h-auto md:w-1/2">
                <Image
                  alt="A beautifully cleaned, modern kitchen in Tampa"
                  className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <div className="bg-tertiary-fixed mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-primary">
                  <span className="material-symbols-outlined icon-fill animate-pulse text-sm font-bold">
                    home
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    Most Popular
                  </span>
                </div>

                <h2 className="font-headline mb-4 text-2xl font-bold text-primary">
                  Residential Cleaning
                </h2>

                <p className="mb-6 flex-grow text-xs leading-relaxed text-on-surface-variant md:text-sm">
                  Experience the transformative power of a thorough deep clean
                  for your home. We specialize in house cleaning services
                  tailored to your needs, whether you require a one-time deep
                  clean or ongoing weekly, bi-weekly, or monthly maintenance.
                </p>

                <Link href="/book">
                  <Button
                    variant="outline"
                    size="default"
                    className="flex w-fit items-center gap-2 transition-all hover:scale-102 active:scale-98"
                  >
                    Get Quote
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2. Commercial Cleaning (Small Card) */}
            <div className="group flex animate-scale-up flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  alt="A clean, structured modern office space"
                  className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugJrEnXIWbj4F1teZ-xYRrsrG8HVZU-ZyuovXjWsset6hcY_aJKbebnvntlX_cCjq7gbfFM8t0eb7s1rhTJ3GovUNowj5YLxG_xPkkaFzdRZYu9Sm2pejhG-J0LnK_1Gozn4oQg2VDty5yd-ywlnuD2fwPPjGdXe7AAjHJkQegD7Og9_LvYXcxre5V74DFT62IAJiyEtXQMAAcbhPJ6fiD2qlB0-45akvWokRvJ768zJUgY2rrR7p7_Qg"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="font-headline mb-3 text-lg font-bold text-primary">
                  Commercial Cleaning
                </h3>
                <p className="mb-6 flex-grow text-xs leading-relaxed text-on-surface-variant">
                  Maintain a clean and professional office environment. Fully
                  insured and licensed cleaners offering tailored schedules to
                  keep your business shining.
                </p>
                <Link
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-secondary transition-colors duration-200 group-hover:gap-2 hover:text-primary"
                  href="/book"
                >
                  Get Quote{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* 3. Airbnb Turnaround (Medium Card - Half Width) */}
            <div className="group flex animate-scale-up flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2 sm:flex-row md:col-span-2 lg:col-span-1">
              <div className="relative h-48 overflow-hidden sm:h-auto sm:w-2/5">
                <Image
                  alt="A clean, welcoming Airbnb rental bedroom setup"
                  className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiq6YQjIuyPiDcOEQO_9a_W1VOarvzX0Q_1BHM_kV2mPaRV_eNnBhaqabBUnM_Arna6OEGgXx2FcZIgpdvbiU3nhXR2VjtK3zHHDClG-CX19jBo_mgXpGZWE-bvxWN0QVpoD4AtQdG0CLGm6n-F6CCTYLaIMFozP3hm5YLwuLkc7fOuHE3UB-YiMKnsnAp5-DOsYrJsx9hpgMvErMEF6Z8G7MTa50SU1EIeCJLJBVbDHxVoe2AsZ99nGdI"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:w-3/5">
                <h3 className="font-headline mb-3 text-lg font-bold text-primary">
                  Airbnb Turnaround
                </h3>
                <p className="mb-4 flex-grow text-xs leading-relaxed text-on-surface-variant">
                  Get your AirBnB space cleaned quickly and efficiently.
                  Friendly, professional cleaners trained for fast turnarounds
                  between guests.
                </p>
                <Link
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-secondary transition-colors duration-200 group-hover:gap-2 hover:text-primary"
                  href="/book"
                >
                  Get Quote{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* 4. Post-Renovation (Medium Card - Half Width) */}
            <div className="group flex animate-scale-up flex-col overflow-hidden rounded-2xl border border-outline-variant/65 bg-surface shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2 sm:flex-row md:col-span-2 lg:col-span-2">
              <div className="relative h-48 overflow-hidden sm:h-auto sm:w-2/5">
                <Image
                  alt="Spotless post construction flooring"
                  className="h-full w-full object-cover transition-transform duration-500 select-none group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw"
                  fill
                  sizes="(max-width: 640px) 100vw, 66vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:w-3/5">
                <h3 className="font-headline mb-3 text-lg font-bold text-primary">
                  Post-Renovation
                </h3>
                <p className="mb-4 flex-grow text-xs leading-relaxed text-on-surface-variant">
                  A significant undertaking best entrusted to professionals. We
                  remove construction dust and debris, saving you time and
                  ensuring a thorough cleanup.
                </p>
                <Link
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-secondary transition-colors duration-200 group-hover:gap-2 hover:text-primary"
                  href="/book"
                >
                  Get Quote{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Card Section */}
        <section className="px-4 py-16 md:px-6">
          <div className="mx-auto max-w-[800px] rounded-2xl border border-outline-variant/65 bg-surface-ice p-10 text-center shadow-level-1">
            <span className="material-symbols-outlined icon-fill mb-4 text-4xl text-secondary">
              workspace_premium
            </span>

            <h2 className="font-headline mb-3 text-2xl font-bold text-primary">
              A Cleaning Company You Can Rely On!
            </h2>

            <p className="mx-auto mb-8 max-w-lg text-xs leading-relaxed text-on-surface-variant md:text-sm">
              We keep cleaning simple, affordable, and convenient. Safe cleaning
              products, fully insured, and reliable scheduling in Tampa, FL.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary-container px-8 py-4 text-sm font-semibold tracking-wide text-on-primary shadow-sm transition-colors duration-200 select-none hover:bg-secondary"
                href="tel:+18133362927"
              >
                Call Now
              </a>
              <Link href="/book" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-surface hover:bg-surface-ice"
                >
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
