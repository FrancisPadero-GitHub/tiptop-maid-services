"use client"

import * as React from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", toggleVisibility, { passive: true })

    // Call once initially to set correct state
    toggleVisibility()

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`group fixed right-6 bottom-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-primary-container text-on-primary shadow-level-2 transition-all duration-300 ease-out select-none hover:-translate-y-1 hover:scale-110 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 ${
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-75 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1">
        arrow_upward
      </span>
    </button>
  )
}
