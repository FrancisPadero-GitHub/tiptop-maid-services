import * as React from "react"

export function Testimonials() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-surface-ice py-10 md:py-10"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column Info */}
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                The Standard of Clean
              </h2>
              <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                Don't just take our word for it. See why homes and businesses
                across Tampa trust Tip Top Maid Services to maintain their
                environments to the highest standards of cleanliness and order.
              </p>
            </div>

            {/* Simple Stats Cards */}
            <div className="flex gap-4">
              <div className="flex w-32 flex-col justify-center rounded-xl border border-outline-variant/65 bg-surface p-4 text-center shadow-sm">
                <span className="font-headline block text-2xl font-bold text-secondary">
                  450+
                </span>
                <span className="mt-1 text-xs text-on-surface-variant">
                  Happy Clients
                </span>
              </div>
              <div className="flex w-32 flex-col justify-center rounded-xl border border-outline-variant/65 bg-surface p-4 text-center shadow-sm">
                <span className="font-headline block flex items-center justify-center gap-1 text-2xl font-bold text-secondary">
                  5
                  <span
                    className="material-symbols-outlined icon-fill align-middle text-amber-400"
                    style={{ fontSize: "20px" }}
                  >
                    star
                  </span>
                </span>
                <span className="mt-1 text-xs text-on-surface-variant">
                  Google Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Stack Cards */}
          <div className="relative lg:col-span-7">
            {/* Background glowing layer */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl"></div>

            <div className="relative flex flex-col gap-6 md:ml-12">
              {/* Review 1 */}
              <div className="relative w-full self-end rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:shadow-level-2 md:w-5/6">
                <span
                  className="material-symbols-outlined absolute -top-4 -left-4 text-surface-ice select-none"
                  style={{
                    fontSize: "48px",
                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.03))",
                  }}
                >
                  format_quote
                </span>
                <p className="mb-6 text-sm leading-relaxed text-on-surface italic md:text-base">
                  "Tip Top Maid Services has completely transformed my weekly
                  routine. Their attention to detail is unmatched, and coming
                  home to a spotlessly clean apartment is the highlight of my
                  week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-tertiary-fixed flex h-10 w-10 items-center justify-center rounded-full text-xs font-extrabold text-primary">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Sarah J.</p>
                    <p className="mt-0.5 text-xs text-on-surface-variant">
                      Tampa Resident
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="relative w-full rounded-2xl border border-outline-variant/65 bg-surface p-8 shadow-level-1 transition-all duration-300 hover:shadow-level-2 md:w-5/6">
                <p className="mb-6 text-sm leading-relaxed text-on-surface italic md:text-base">
                  "We hired them for our office space, and the professionalism
                  is evident. They are always on time, discreet, and incredibly
                  thorough. Highly recommend for any commercial needs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary-fixed flex h-10 w-10 items-center justify-center rounded-full text-xs font-extrabold text-primary">
                    MR
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Michael R.</p>
                    <p className="mt-0.5 text-xs text-on-surface-variant">
                      Business Owner
                    </p>
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
