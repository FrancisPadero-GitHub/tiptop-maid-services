import * as React from "react"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { Button } from "@/components/landing-page/button"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-surface-bright text-on-surface">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:py-28 overflow-hidden bg-surface-ice">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-container font-semibold text-xs tracking-wide hover:scale-102 transition-transform duration-200">
                <span className="material-symbols-outlined text-sm icon-fill text-secondary animate-pulse">star</span>
                Reliable, Trustworthy, Affordable & Convenient
              </div>
              
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                About <span className="text-secondary">Tip Top</span> Maid Cleaning Service.
              </h1>
              
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl">
                At Tip Top Maid Services, we take pride in delivering exceptional cleaning solutions tailored to meet the diverse needs of our clients in Tampa, FL. With a commitment to excellence and a passion for cleanliness, we strive to exceed expectations with every service we provide.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/book">
                  <Button variant="primary" size="lg" className="flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    Get A Free Quote
                    <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                  </Button>
                </a>
                <a
                  className="border-2 border-primary-container text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] font-semibold tracking-wide text-sm px-8 py-4 rounded-md flex items-center gap-2"
                  href="tel:+18133362927"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  +1 813-336-2927
                </a>
              </div>
            </div>

            {/* Right Image Layout */}
            <div className="relative animate-scale-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed/40 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                alt="Professional Maid Service cleaning kitchen counter"
                className="relative z-10 w-full h-auto rounded-2xl shadow-level-2 border border-outline-variant/65 object-cover aspect-[4/3] select-none hover:scale-102 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/ADBb0uieR1Ctjvhz5ZvUaRzlJS0gR37hDZPNxj5ccyph2zrnrfiVrK1c4ilvblrABDkWuiOzLCbP3ilniEHzkFxj6-beWSFR1IqWHz09Ma7omu2DYljH4zTxfT9TGJSVimoSBodB7tH4hnXIpMFlvl2mq3igOfsg5_AHql9CpqEwIgu1x0rRTiyT_BmeiKExwSsBGPrDJXG_CFL0SDMBJWudxzEjgBLtNfPdXks_qeuMExk2xL78nCaH--S_5eM"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-surface/95 backdrop-blur-md p-4 rounded-xl shadow-level-1 border border-outline-variant/50 flex items-center gap-3 animate-float">
                <div className="bg-success-teal/15 p-2 rounded-full text-success-teal">
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: "20px" }}>verified</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Fully Insured</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">& Bonded Professionals</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Gradient */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary-fixed/30 to-transparent opacity-50 pointer-events-none"></div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-surface border-y border-outline-variant/30">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-8 md:p-12 text-white shadow-level-2 relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm icon-fill text-sparkle-blue">spa</span>
                  Our Mission
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                  Comfort, Health, and Well-being in Every Space
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                  Our mission at Tip Top Maid Services is to provide unparalleled cleaning services that enhance the comfort, health, and well-being of our clients. We aim to create clean and inviting spaces that inspire productivity, relaxation, and joy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-surface-bright">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            
            {/* Header Block */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="inline-block bg-tertiary-fixed text-primary px-3 py-1 rounded-full font-semibold text-xs tracking-wider uppercase">
                The Tip Top Difference
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                Why Choose Us?
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                We design cleaning services around your life and operations, maintaining high standards through meticulously selected pillars of service.
              </p>
            </div>

            {/* Asymmetric Bento Grid (6 Pillars) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Pillar 1: Professionalism */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Professionalism</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Our team consists of experienced and dedicated professionals who uphold the highest standards of professionalism in every aspect of our work.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Customized Solutions */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">dashboard_customize</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Customized Solutions</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    We understand that every client has unique cleaning needs. That’s why we offer customized cleaning solutions tailored to fit your specific requirements and preferences.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Comprehensive Services */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">cleaning_services</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Comprehensive Services</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    From commercial cleaning to post-construction cleanup and Airbnb maintenance, we offer a comprehensive range of cleaning services to suit your needs.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Attention to Detail */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-success-teal/15 rounded-full flex items-center justify-center text-success-teal group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">center_focus_strong</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Attention to Detail</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    We pay meticulous attention to detail in every cleaning task we undertake, ensuring that no corner is left untouched and that every surface sparkles.
                  </p>
                </div>
              </div>

              {/* Pillar 5: Reliability */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-500/15 rounded-full flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Reliability</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    You can rely on Tip Top Maid Services to arrive on time and complete each cleaning job efficiently and effectively, leaving your space looking immaculate.
                  </p>
                </div>
              </div>

              {/* Pillar 6: Environmentally Conscious */}
              <div className="bg-surface rounded-2xl p-8 border border-outline-variant/65 shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/15 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">eco</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">Environmentally Conscious</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    We are committed to using eco-friendly cleaning products and methods whenever possible, prioritizing the health of our clients and the environment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Speciality Services Section */}
        <section className="py-24 bg-surface border-t border-outline-variant/30">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            
            {/* Header Block */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="inline-block bg-secondary-fixed text-on-secondary-container px-3 py-1 rounded-full font-semibold text-xs tracking-wider uppercase">
                Specialized Service Highlights
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                Our Services
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Explore a few of our popular specialties, meticulously executed by professional cleaners in Tampa, FL.
              </p>
            </div>

            {/* 3 Column Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service Card 1: Commercial Cleaning */}
              <div className="bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/60 shadow-level-1 hover:shadow-level-2 transition-all duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uhrek0t8AME3HMdFYGlj5NQ3XCE4v56IZzfsijAQkbmlNP0b2GqcTqfJhyVsAIJQMHosS_CR4QzZzH8Dxq4FI2ovGB7cubMS7ahZfuExcifoaBtNjR6OK9KDAU5XpFeTHCwDlVGnohKk-tbUi6KT8H8O2IMGj2913Qrzo6RCSPhCsVA6X4gVLkhuUsWPJRaqG-mUNBus7NCpclt5uHO0U-tYaOtaGLhCW6oZE2Ic4_1rbe_iGp6Kk7lk84" 
                    alt="Commercial office space clean and professional" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">Commercial Cleaning</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Keep your workplace clean and professional with our commercial cleaning services designed to meet the unique needs of businesses in Tampa, FL.
                    </p>
                  </div>
                  <a href="/book" className="inline-flex items-center text-xs font-semibold text-secondary hover:text-primary transition-colors gap-1 group/btn">
                    Book Service
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Service Card 2: Post Construction */}
              <div className="bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/60 shadow-level-1 hover:shadow-level-2 transition-all duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uiMPCN3iKSAqUCtgth2yrr0Yh51NX1q5l6AsLxgICbwTXnJgshb-wFTVGaDMpnxLEww_s7Gt-EJZanURUe7H6gDnaGcYFqzpUq6fbfIwM2HsyeG2PmrHOBS4gpDLtWhA3Jf5Xjy8PV8PILY82NynEZ7CjisyUHtAudSwSsABiylQsMv68_QcHZvc2I8pon9fzJy96gsyay8WgwlBFULbHoThwmaH8IelQaapDQl46l5Bp_ex60IAOWu3iw" 
                    alt="Pristine post-construction interior space" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">Post Construction Cleaning</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Whether you’ve completed a renovation or a new construction project, our post-construction cleaning services will ensure that your space is clean and ready for occupancy.
                    </p>
                  </div>
                  <a href="/book" className="inline-flex items-center text-xs font-semibold text-secondary hover:text-primary transition-colors gap-1 group/btn">
                    Book Service
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Service Card 3: Airbnb Cleaning */}
              <div className="bg-surface-bright rounded-2xl overflow-hidden border border-outline-variant/60 shadow-level-1 hover:shadow-level-2 transition-all duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOU3vM7QkskT-mtJOXAFkhSZixR9v0tZ9vB0dQj2IKMrlrw8g9m1H-qqLDYohgmZ38gqT5zzTCGlUDF-mG7UfeFC_r6esTnky2MxkmfvJizW1yXMGd5tEtR75zKXp4hCdHZMbr9lkasN0QD0dvQ7jiyC3nKo2-Z1CPmuyIHn3524gL5mtxAKf5mqt6525a4HY6vMeZWQEe6over6GbnImRTrrvabby8clc1vCelwlgnsQu82qMZhGZqCuxuH-Zn5G3INwd_4BB0o" 
                    alt="Spacious guest room with perfectly made bed" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary">Airbnb Cleaning</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Impress your guests with a pristine and welcoming Airbnb property. Our Airbnb cleaning services will ensure that your rental property is spotless and ready for your next guest’s arrival.
                    </p>
                  </div>
                  <a href="/book" className="inline-flex items-center text-xs font-semibold text-secondary hover:text-primary transition-colors gap-1 group/btn">
                    Book Service
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary-container text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_50%)]"></div>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto animate-bounce duration-1000">
              <span className="material-symbols-outlined text-2xl icon-fill">chat</span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light">
              Ready to experience the exceptional cleaning services of Tip Top Maid Services? Contact us today to schedule your cleaning appointment and discover the difference a clean space can make.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="/book">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-surface-ice font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
                  Schedule Appointment
                </Button>
              </a>
              <a
                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold tracking-wide text-sm px-8 py-4 rounded-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                href="tel:+18133362927"
              >
                <span className="material-symbols-outlined text-base">call</span>
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
