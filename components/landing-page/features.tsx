import * as React from "react"

export function Features() {
  const cards = [
    {
      icon: "workspace_premium",
      title: "Qualified Professionals",
      desc: "Our rigorous training ensures every cleaner delivers meticulous, top-tier results.",
    },
    {
      icon: "shield_lock",
      title: "Trustworthy & Secure",
      desc: "Fully insured and bonded cleaners, backed by a secure online booking system.",
    },
    {
      icon: "event_available",
      title: "Flexible Scheduling",
      desc: "Same day bookings available. We are open 7 days a week to fit your busy lifestyle.",
    },
  ]

  return (
    <section id="about" className="bg-surface-ice py-10 md:py-10">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Title Block */}
        <div className="mx-auto mb-16 max-w-2xl animate-fade-in-up space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Why Choose Tip Top Maid Service?
          </h2>
          <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
            We bring order, cleanliness, and peace of mind to your home or
            office with our structured, professional approach.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex animate-scale-up flex-col items-center rounded-2xl border border-outline-variant/65 bg-surface p-8 text-center shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-level-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-ice text-secondary transition-transform duration-300 group-hover:scale-105">
                <span
                  className="material-symbols-outlined icon-fill animate-pulse"
                  style={{ fontSize: "28px" }}
                >
                  {card.icon}
                </span>
              </div>
              <h3 className="font-headline mb-3 text-xl font-bold text-primary">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
