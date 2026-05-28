import * as React from "react"

export function Testimonials() {
  return (
    <section id="gallery" className="bg-surface-ice relative overflow-hidden py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                The Standard of Clean
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Don't just take our word for it. See why homes and businesses across Tampa trust Tip Top Maid Services to maintain their environments to the highest standards of cleanliness and order.
              </p>
            </div>
            
            {/* Simple Stats Cards */}
            <div className="flex gap-4">
              <div className="text-center p-4 bg-surface rounded-xl border border-outline-variant/65 shadow-sm w-32 flex flex-col justify-center">
                <span className="block font-headline text-2xl font-bold text-secondary">450+</span>
                <span className="text-xs text-on-surface-variant mt-1">Happy Clients</span>
              </div>
              <div className="text-center p-4 bg-surface rounded-xl border border-outline-variant/65 shadow-sm w-32 flex flex-col justify-center">
                <span className="block font-headline text-2xl font-bold text-secondary flex items-center justify-center gap-1">
                  5 
                  <span className="material-symbols-outlined icon-fill text-amber-400 align-middle" style={{ fontSize: "20px" }}>
                    star
                  </span>
                </span>
                <span className="text-xs text-on-surface-variant mt-1">Google Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column Stack Cards */}
          <div className="lg:col-span-7 relative">
            {/* Background glowing layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col gap-6 md:ml-12 relative">
              {/* Review 1 */}
              <div className="bg-surface p-8 rounded-2xl border border-outline-variant/65 shadow-level-1 relative w-full md:w-5/6 self-end transition-all duration-300 hover:shadow-level-2">
                <span
                  className="material-symbols-outlined absolute -top-4 -left-4 text-surface-ice select-none"
                  style={{ fontSize: "48px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.03))" }}
                >
                  format_quote
                </span>
                <p className="text-sm md:text-base text-on-surface italic mb-6 leading-relaxed">
                  "Tip Top Maid Services has completely transformed my weekly routine. Their attention to detail is unmatched, and coming home to a spotlessly clean apartment is the highlight of my week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-primary flex items-center justify-center font-extrabold text-xs">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Sarah J.</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Tampa Resident</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-surface p-8 rounded-2xl border border-outline-variant/65 shadow-level-1 relative w-full md:w-5/6 transition-all duration-300 hover:shadow-level-2">
                <p className="text-sm md:text-base text-on-surface italic mb-6 leading-relaxed">
                  "We hired them for our office space, and the professionalism is evident. They are always on time, discreet, and incredibly thorough. Highly recommend for any commercial needs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-primary flex items-center justify-center font-extrabold text-xs">
                    MR
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Michael R.</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
