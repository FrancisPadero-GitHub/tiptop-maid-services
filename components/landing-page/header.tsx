"use client"

import * as React from "react"
import { Button } from "./button"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
  ]

  return (
    <nav className="bg-surface/85 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-outline-variant w-full">
      <div className="flex justify-between items-center h-20 px-4 md:px-6 max-w-[1200px] mx-auto w-full">
        {/* Logo and Brand */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <a href="/">
            <img
              alt="Tip Top Maid Services Logo"
              className="h-14 w-auto object-contain"
              src="/tiptop-transparent-bg.png"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200 hover:bg-surface-ice px-3 py-2 rounded-md"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Elements */}
        <div className="hidden md:flex items-center gap-4">
          <a
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            href="tel:+18133362927"
          >
            <span className="material-symbols-outlined icon-fill">phone_in_talk</span>
            <span className="text-sm font-bold tracking-wide">+1 813-336-2927</span>
          </a>
          <a href="/book">
            <Button variant="primary" size="default">
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <a
            className="text-primary hover:text-secondary p-1"
            href="tel:+18133362927"
            aria-label="Call Tip Top Maid Services"
          >
            <span className="material-symbols-outlined icon-fill">phone_in_talk</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-on-surface-variant p-2 hover:bg-surface-ice rounded-md"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-ice px-3 py-3 rounded-md transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <hr className="border-outline-variant" />
          <div className="flex flex-col gap-4">
            <a
              className="flex items-center justify-center gap-2 text-primary hover:text-secondary py-2"
              href="tel:+18133362927"
            >
              <span className="material-symbols-outlined icon-fill">phone_in_talk</span>
              <span className="text-sm font-bold tracking-wide">+1 813-336-2927</span>
            </a>
            <a href="/book" className="w-full" onClick={() => setIsOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
