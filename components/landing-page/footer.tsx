import * as React from "react"

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-primary text-white dark:bg-tertiary">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              alt="Tip Top Maid Services Logo"
              className="h-12 w-auto object-contain"
              src="/tiptop-transparent-bg.png"  
            />
          </div>
          <p className="text-xs leading-relaxed text-white/80">
            Professional cleaning solutions for residential and commercial
            spaces in Tampa, FL.
          </p>
          <div className="mt-2 flex gap-4">
            <a
              aria-label="Facebook"
              className="text-white/85 transition-colors duration-200 hover:scale-110 hover:text-white"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                thumb_up
              </span>
            </a>
            <a
              aria-label="LinkedIn"
              className="text-white/85 transition-colors duration-200 hover:scale-110 hover:text-white"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                work
              </span>
            </a>
            <a
              aria-label="Yelp"
              className="text-white/85 transition-colors duration-200 hover:scale-110 hover:text-white"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                reviews
              </span>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-headline mb-2 text-sm font-extrabold tracking-wider text-white uppercase">
            Services
          </h4>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Residential Cleaning
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Commercial Cleaning
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Airbnb Turnaround
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Post Construction
          </a>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-headline mb-2 text-sm font-extrabold tracking-wider text-white uppercase">
            Company
          </h4>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Contact Us
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs text-white/70 decoration-2 underline-offset-4 transition-colors hover:text-white hover:underline"
            href="#"
          >
            FAQ
          </a>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-headline mb-2 text-sm font-extrabold tracking-wider text-white uppercase">
            Contact
          </h4>
          <div className="flex items-start gap-2 text-xs text-white/80">
            <span
              className="material-symbols-outlined text-sm text-white"
              style={{ fontSize: "18px" }}
            >
              mail
            </span>
            <span>infotiptopmaidservice@gmail.com</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-white/80">
            <span
              className="material-symbols-outlined text-sm text-white"
              style={{ fontSize: "18px" }}
            >
              call
            </span>
            <span>+1 813-336-2927</span>
          </div>
          <div className="mt-2 flex items-start gap-2 text-xs text-white/80">
            <span
              className="material-symbols-outlined text-sm text-white"
              style={{ fontSize: "18px" }}
            >
              schedule
            </span>
            <span>
              Mon-Sun: 8AM - 6PM
              <br />
              Sat: Closed
            </span>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10 py-6 text-center">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Tip Top Maid Services Tampa. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
