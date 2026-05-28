import * as React from "react"
import Link from "next/link"
import { Button } from "./button"

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 text-on-primary md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-4 md:px-6 lg:flex-row">
        {/* Info Block */}
        <div className="max-w-2xl space-y-4 text-center lg:text-left">
          <h2 className="font-headline text-3xl font-extrabold text-white md:text-4xl">
            Ready for a Tip Top Clean?
          </h2>
          <p className="text-inverse-primary text-sm leading-relaxed opacity-90 md:text-base">
            Keep cleaning simple, affordable, and convenient. Schedule your
            appointment today with our fully insured and trusted professionals.
          </p>
        </div>

        {/* Buttons Stack */}
        <div className="flex w-full shrink-0 flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link href="/book" className="w-full sm:w-auto">
            <button className="w-full cursor-pointer rounded-md bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary shadow-sm transition-colors duration-200 select-none hover:bg-surface-ice">
              Book Now Online
            </button>
          </Link>

          <a
            className="flex items-center justify-center gap-2 rounded-md border border-outline px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-200 select-none hover:bg-white/10"
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
