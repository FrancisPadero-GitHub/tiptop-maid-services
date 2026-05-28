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
    <section id="about" className="bg-surface-ice py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Why Choose Tip Top Maid Service?
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            We bring order, cleanliness, and peace of mind to your home or office with our structured, professional approach.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl border border-outline-variant/65 p-8 flex flex-col items-center text-center shadow-level-1 hover:shadow-level-2 hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 animate-scale-up"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-ice text-secondary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined icon-fill animate-pulse" style={{ fontSize: "28px" }}>
                  {card.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
