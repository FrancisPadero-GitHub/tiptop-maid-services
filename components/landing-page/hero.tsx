import * as React from "react"
import { Button } from "./button"

export function Hero() {
  return (
    <section className="relative bg-surface overflow-hidden py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="z-10 flex flex-col justify-center space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-surface-ice border border-primary/20 rounded-full px-4 py-1.5 text-primary w-fit hover:scale-102 transition-transform duration-200">
            <span className="material-symbols-outlined text-sparkle-blue animate-pulse" style={{ fontSize: "18px" }}>
              auto_awesome
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">
              Serving Tampa & Surrounding Areas
            </span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            Professional Home & Office Cleaning in Tampa
          </h1>
          
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Experience the transformative power of a deep clean. Our trusted professionals deliver premium cleaning tailored to your lifestyle, leaving you with a spotless, refreshing space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Book Your Clean
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get a Quote
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-outline-variant w-full max-w-md">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed border-2 border-surface flex items-center justify-center text-primary font-extrabold text-xs hover:-translate-y-1 transition-transform">
                JD
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-fixed border-2 border-surface flex items-center justify-center text-primary font-extrabold text-xs hover:-translate-y-1 transition-transform">
                SM
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center text-primary font-extrabold text-xs hover:-translate-y-1 transition-transform">
                AL
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined icon-fill" style={{ fontSize: "16px" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-on-surface-variant mt-0.5">
                Over 450 Satisfied Customers
              </span>
            </div>
          </div>
        </div>

        {/* Hero Right Content */}
        <div className="relative z-10 w-full h-[380px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-level-2 border border-outline-variant/30 animate-scale-up">
          <img
            alt="Professional cleaner wiping a wooden table"
            className="w-full h-full object-cover select-none hover:scale-102 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujEoTvhhOlpTR50tWtk82hOKA5HkcQ9tqAe6f2A_0BZ31tOMRIHKXt-WDLb5KTId2ys-20md1WjlO0O4rdeJQusamLk0elyHfVn0qxhyKE55nsGjU4qxig8ObYVDF6KuUX79U6Py9-I3FOifsR8rG-czTr1DzmXJi8X8ObFAVxCZLBypaMBw_SF2IPO50wZrnSHqpanWRnugazjHfm--OhfhMPQrfPhI5xQ-1a6hN-KLOjD8Aa3ozvbt18"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply"></div>
          
          {/* Glassmorphic floating card with float animation */}
          <div className="absolute bottom-6 left-6 right-6 bg-surface/85 backdrop-blur-md border border-outline-variant/50 p-4 rounded-xl shadow-level-1 flex items-center justify-between animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-ice flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined icon-fill">verified</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Fully Insured</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Peace of mind guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic decorative backdrop bubble */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-surface-ice rounded-full blur-3xl opacity-60 pointer-events-none"></div>
    </section>
  )
}
