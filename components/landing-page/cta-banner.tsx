import * as React from "react"
import Link from "next/link"
import { Button } from "./button"

export function CtaBanner() {
  return (
    <section className="bg-primary text-on-primary py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Info Block */}
        <div className="max-w-2xl text-center lg:text-left space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
            Ready for a Tip Top Clean?
          </h2>
          <p className="text-sm md:text-base text-inverse-primary leading-relaxed opacity-90">
            Keep cleaning simple, affordable, and convenient. Schedule your appointment today with our fully insured and trusted professionals.
          </p>
        </div>

        {/* Buttons Stack */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
          <Link href="/book" className="w-full sm:w-auto">
            <button className="w-full bg-white text-primary hover:bg-surface-ice transition-colors duration-200 font-semibold tracking-wide text-sm px-8 py-4 rounded-md shadow-sm select-none cursor-pointer">
              Book Now Online
            </button>
          </Link>
          
          <a
            className="border border-outline hover:bg-white/10 transition-colors duration-200 text-white font-semibold tracking-wide text-sm px-8 py-4 rounded-md flex items-center justify-center gap-2 select-none"
            href="tel:+18133362927"
          >
            <span className="material-symbols-outlined text-base">call</span>
            +1 813-336-2927
          </a>
        </div>
      </div>
    </section>
  )
}
