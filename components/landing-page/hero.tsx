import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface py-10 md:py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        {/* Hero Left Content */}
        <div className="z-10 flex animate-fade-in-up flex-col justify-center space-y-2">
          <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 text-primary transition-transform duration-200 hover:scale-102">
            <span
              className="material-symbols-outlined animate-pulse text-sparkle-blue"
              style={{ fontSize: "18px" }}
            >
              campaign
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase">
              Serving Tampa & Surrounding Areas
            </span>
          </div>

          <h1 className="font-headline text-4xl leading-tight font-extrabold text-primary md:text-5xl lg:text-6xl">
            Professional Home & Office Cleaning in Tampa
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-on-surface-variant md:text-lg">
            Experience the transformative power of a deep clean. Our trusted
            professionals deliver premium cleaning tailored to your lifestyle,
            leaving you with a spotless, refreshing space.
          </p>

          <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
            <a href="tel:+18133362927" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="flex w-full items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Your Clean
                <span className="material-symbols-outlined text-sm">call</span>
              </Button>
            </a>
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex w-full max-w-md items-center gap-4 border-t border-outline-variant pt-8">
            <div className="flex -space-x-3">
              <div className="bg-tertiary-fixed flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface text-xs font-extrabold text-primary transition-transform hover:-translate-y-1">
                JD
              </div>
              <div className="bg-secondary-fixed flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface text-xs font-extrabold text-primary transition-transform hover:-translate-y-1">
                SM
              </div>
              <div className="bg-primary-fixed flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface text-xs font-extrabold text-primary transition-transform hover:-translate-y-1">
                AL
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined icon-fill"
                    style={{ fontSize: "16px" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="mt-0.5 text-xs font-medium text-on-surface-variant">
                Over 450 Satisfied Customers
              </span>
            </div>
          </div>
        </div>

        {/* Hero Right Content */}
        <div className="relative z-10 h-[380px] w-full animate-scale-up overflow-hidden rounded-2xl border border-outline-variant/30 shadow-level-2 sm:h-[450px] lg:h-[550px]">
          <Image
            alt="Professional cleaner wiping a wooden table"
            className="h-full w-full object-cover transition-transform duration-700 select-none hover:scale-102"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujEoTvhhOlpTR50tWtk82hOKA5HkcQ9tqAe6f2A_0BZ31tOMRIHKXt-WDLb5KTId2ys-20md1WjlO0O4rdeJQusamLk0elyHfVn0qxhyKE55nsGjU4qxig8ObYVDF6KuUX79U6Py9-I3FOifsR8rG-czTr1DzmXJi8X8ObFAVxCZLBypaMBw_SF2IPO50wZrnSHqpanWRnugazjHfm--OhfhMPQrfPhI5xQ-1a6hN-KLOjD8Aa3ozvbt18"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply"></div>

          {/* Glassmorphic floating card with float animation */}
          <div className="absolute right-6 bottom-6 left-6 flex animate-float items-center justify-between rounded-xl border border-outline-variant/50 bg-surface/85 p-4 shadow-level-1 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-ice text-secondary">
                <span className="material-symbols-outlined icon-fill">
                  verified
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Fully Insured</p>
                <p className="mt-0.5 text-xs text-on-surface-variant">
                  Peace of mind guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic decorative backdrop bubble */}
      <div className="pointer-events-none absolute top-0 right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-surface-ice opacity-60 blur-3xl"></div>
    </section>
  )
}
