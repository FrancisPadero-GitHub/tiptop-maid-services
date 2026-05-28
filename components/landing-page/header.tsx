"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"
import tiptopLogo from "@/public/tiptop-transparent-bg.png"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-white shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-4 md:px-6">
        {/* Logo and Brand */}
        <div className="flex flex-shrink-0 cursor-pointer items-center gap-2">
          <Link href="/">
            <Image
              alt="Tip Top Maid Services Logo"
              className="h-14 w-auto object-contain"
              src={tiptopLogo}
              preload={true}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="rounded-md px-3 py-2 text-sm font-semibold text-on-surface-variant transition-colors duration-200 hover:bg-surface-ice hover:text-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Elements */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            className="flex items-center gap-2 text-primary transition-colors hover:text-secondary"
            href="tel:+18133362927"
          >
            <span className="material-symbols-outlined icon-fill">
              phone_in_talk
            </span>
            <span className="text-sm font-bold tracking-wide">
              +1 813-336-2927
            </span>
          </a>
          <Link href="/book">
            <Button variant="primary" size="default">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            className="p-1 text-primary hover:text-secondary"
            href="tel:+18133362927"
            aria-label="Call Tip Top Maid Services"
          >
            <span className="material-symbols-outlined icon-fill">
              phone_in_talk
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-on-surface-variant hover:bg-surface-ice"
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
        <div className="animate-in fade-in slide-in-from-top-5 absolute top-20 left-0 z-50 flex w-full flex-col gap-4 border-b border-outline-variant bg-white px-4 py-6 shadow-lg duration-200 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-ice hover:text-primary"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <hr className="border-outline-variant" />
          <div className="flex flex-col gap-4">
            <a
              className="flex items-center justify-center gap-2 py-2 text-primary hover:text-secondary"
              href="tel:+18133362927"
            >
              <span className="material-symbols-outlined icon-fill">
                phone_in_talk
              </span>
              <span className="text-sm font-bold tracking-wide">
                +1 813-336-2927
              </span>
            </a>
            <Link
              href="/book"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="primary" size="lg" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
