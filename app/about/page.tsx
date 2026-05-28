import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { Button } from "@/components/landing-page/button"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-surface-bright text-on-surface">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-ice pt-10 pb-12 md:py-12">
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-4 md:px-6 lg:grid-cols-2">
            {/* Left Content */}
            <div className="animate-fade-in-up space-y-8">
              <div className="bg-secondary-fixed text-on-secondary-container inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-transform duration-200 hover:scale-102">
                <span className="material-symbols-outlined icon-fill animate-pulse text-sm text-secondary">
                  star
                </span>
                Reliable, Trustworthy, Affordable & Convenient
              </div>

              <h1 className="font-headline text-4xl leading-tight font-extrabold text-primary md:text-5xl lg:text-6xl">
                About <span className="text-secondary">Tip Top</span> Maid
                Cleaning Service.
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                At Tip Top Maid Services, we take pride in delivering
                exceptional cleaning solutions tailored to meet the diverse
                needs of our clients in Tampa, FL. With a commitment to
                excellence and a passion for cleanliness, we strive to exceed
                expectations with every service we provide.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get A Free Quote
                    <span className="material-symbols-outlined text-sm font-bold">
                      arrow_forward
                    </span>
                  </Button>
                </Link>
                <a
                  className="w-full sm:w-auto border-primary-container text-primary hover:bg-primary flex items-center justify-center gap-2 rounded-md border-2 px-8 py-4 font-semibold tracking-wide text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  href="tel:+18133362927"
                >
                  <span className="material-symbols-outlined text-base">
                    call
                  </span>
                  +1 813-336-2927
                </a>
              </div>
            </div>

            {/* Right Image Layout */}
            <div className="relative animate-scale-up">
              <div className="from-secondary-fixed/40 absolute inset-0 translate-x-4 translate-y-4 transform rounded-2xl bg-gradient-to-tr to-transparent"></div>
              <Image
                alt="Professional Maid Service cleaning kitchen counter"
                className="relative z-10 aspect-[4/3] h-auto w-full rounded-2xl border border-outline-variant/65 object-cover shadow-level-2 transition-transform duration-700 select-none hover:scale-102"
                src="https://lh3.googleusercontent.com/aida/ADBb0uieR1Ctjvhz5ZvUaRzlJS0gR37hDZPNxj5ccyph2zrnrfiVrK1c4ilvblrABDkWuiOzLCbP3ilniEHzkFxj6-beWSFR1IqWHz09Ma7omu2DYljH4zTxfT9TGJSVimoSBodB7tH4hnXIpMFlvl2mq3igOfsg5_AHql9CpqEwIgu1x0rRTiyT_BmeiKExwSsBGPrDJXG_CFL0SDMBJWudxzEjgBLtNfPdXks_qeuMExk2xL78nCaH--S_5eM"
                width={800}
                height={600}
              />

              {/* Floating Badge */}
              <div className="absolute right-4 -bottom-6 sm:-right-6 z-20 flex animate-float items-center gap-3 rounded-xl border border-outline-variant/50 bg-surface/95 p-4 shadow-level-1 backdrop-blur-md">
                <div className="rounded-full bg-success-teal/15 p-2 text-success-teal">
                  <span
                    className="material-symbols-outlined icon-fill"
                    style={{ fontSize: "20px" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Fully Insured
                  </p>
                  <p className="mt-0.5 text-xs text-on-surface-variant">
                    & Bonded Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Gradient */}
          <div className="from-primary-fixed/30 pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-bl to-transparent opacity-50"></div>
        </section>

        {/* Our Mission Section */}
        <section className="border-y border-outline-variant/30 bg-surface py-10">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-container p-8 text-white shadow-level-2 md:p-12">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-110"></div>
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined icon-fill text-sm text-sparkle-blue">
                    spa
                  </span>
                  Our Mission
                </div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight md:text-4xl">
                  Comfort, Health, and Well-being in Every Space
                </h2>
                <p className="text-base leading-relaxed font-light text-white/90 md:text-lg">
                  Our mission at Tip Top Maid Services is to provide
                  unparalleled cleaning services that enhance the comfort,
                  health, and well-being of our clients. We aim to create clean
                  and inviting spaces that inspire productivity, relaxation, and
                  joy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-surface-bright py-12">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            {/* Header Block */}
            <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
              <span className="bg-tertiary-fixed inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                The Tip Top Difference
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                Why Choose Us?
              </h2>
              <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                We design cleaning services around your life and operations,
                maintaining high standards through meticulously selected pillars
                of service.
              </p>
            </div>

            {/* Asymmetric Bento Grid (6 Pillars) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Pillar 1: Professionalism */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="bg-primary-fixed flex h-12 w-12 items-center justify-center rounded-full text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      workspace_premium
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Professionalism
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    Our team consists of experienced and dedicated professionals
                    who uphold the highest standards of professionalism in every
                    aspect of our work.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Customized Solutions */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="bg-secondary-fixed flex h-12 w-12 items-center justify-center rounded-full text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      dashboard_customize
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Customized Solutions
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    We understand that every client has unique cleaning needs.
                    That’s why we offer customized cleaning solutions tailored
                    to fit your specific requirements and preferences.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Comprehensive Services */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="bg-tertiary-fixed flex h-12 w-12 items-center justify-center rounded-full text-tertiary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      cleaning_services
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Comprehensive Services
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    From commercial cleaning to post-construction cleanup and
                    Airbnb maintenance, we offer a comprehensive range of
                    cleaning services to suit your needs.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Attention to Detail */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-teal/15 text-success-teal transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      center_focus_strong
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Attention to Detail
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    We pay meticulous attention to detail in every cleaning task
                    we undertake, ensuring that no corner is left untouched and
                    that every surface sparkles.
                  </p>
                </div>
              </div>

              {/* Pillar 5: Reliability */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/15 text-orange-600 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      verified
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Reliability
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    You can rely on Tip Top Maid Services to arrive on time and
                    complete each cleaning job efficiently and effectively,
                    leaving your space looking immaculate.
                  </p>
                </div>
              </div>

              {/* Pillar 6: Environmentally Conscious */}
              <div className="group flex flex-col justify-between rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">
                      eco
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Environmentally Conscious
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant md:text-sm">
                    We are committed to using eco-friendly cleaning products and
                    methods whenever possible, prioritizing the health of our
                    clients and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Speciality Services Section */}
        <section className="border-t border-outline-variant/30 bg-surface py-12">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            {/* Header Block */}
            <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
              <span className="bg-secondary-fixed text-on-secondary-container inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Specialized Service Highlights
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                Our Services
              </h2>
              <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                Explore a few of our popular specialties, meticulously executed
                by professional cleaners in Tampa, FL.
              </p>
            </div>

            {/* 3 Column Service Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Service Card 1: Commercial Cleaning */}
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-bright shadow-level-1 transition-all duration-300 hover:shadow-level-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84"
                    alt="Commercial office space clean and professional"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="flex flex-grow flex-col justify-between space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">
                      Commercial Cleaning
                    </h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Keep your workplace clean and professional with our
                      commercial cleaning services designed to meet the unique
                      needs of businesses in Tampa, FL.
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Book Service
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              {/* Service Card 2: Post Construction */}
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-bright shadow-level-1 transition-all duration-300 hover:shadow-level-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw"
                    alt="Pristine post-construction interior space"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="flex flex-grow flex-col justify-between space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">
                      Post Construction Cleaning
                    </h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Whether you’ve completed a renovation or a new
                      construction project, our post-construction cleaning
                      services will ensure that your space is clean and ready
                      for occupancy.
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Book Service
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              {/* Service Card 3: Airbnb Cleaning */}
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-bright shadow-level-1 transition-all duration-300 hover:shadow-level-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOU3vM7QkskT-mtJOXAFkhSZixR9v0tZ9vB0dQj2IKMrlrw8g9m1H-qqLDYohgmZ38gqT5zzTCGlUDF-mG7UfeFC_r6esTnky2MxkmfvJizW1yXMGd5tEtR75zKXp4hCdHZMbr9lkasN0QD0dvQ7jiyC3nKo2-Z1CPmuyIHn3524gL5mtxAKf5mqt6525a4HY6vMeZWQEe6over6GbnImRTrrvabby8clc1vCelwlgnsQu82qMZhGZqCuxuH-Zn5G3INwd_4BB0o"
                    alt="Spacious guest room with perfectly made bed"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="flex flex-grow flex-col justify-between space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">
                      Airbnb Cleaning
                    </h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      Impress your guests with a pristine and welcoming Airbnb
                      property. Our Airbnb cleaning services will ensure that
                      your rental property is spotless and ready for your next
                      guest’s arrival.
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Book Service
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-container py-12 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_50%)]"></div>
          <div className="relative z-10 mx-auto max-w-3xl max-w-[1200px] space-y-8 px-4 text-center md:px-6">
            <div className="mx-auto flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-white/10 text-white duration-1000">
              <span className="material-symbols-outlined icon-fill text-2xl">
                chat
              </span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base leading-relaxed font-light text-white/90 md:text-xl">
              Ready to experience the exceptional cleaning services of Tip Top
              Maid Services? Contact us today to schedule your cleaning
              appointment and discover the difference a clean space can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/book" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white font-bold text-primary shadow-lg transition-all hover:scale-105 hover:bg-surface-ice active:scale-95"
                >
                  Schedule Appointment
                </Button>
              </Link>
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
                href="tel:+18133362927"
              >
                <span className="material-symbols-outlined text-base">
                  call
                </span>
                +1 813-336-2927
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
