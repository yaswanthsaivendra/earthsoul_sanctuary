"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Adopt", href: "/adopt" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Visit", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className={`font-display text-xl font-bold ${
              isScrolled ? "text-sanctuary-text" : "text-white"
            }`}>
              EarthSouls
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-sanctuary-accent transition-colors ${
                  isScrolled ? "text-sanctuary-text" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="inline-flex items-center px-4 py-2 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full text-sm font-medium transition-colors"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-sanctuary-text" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-sanctuary-text" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-sanctuary-text hover:text-sanctuary-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="block mt-6 px-4 py-3 bg-sanctuary-accent text-white text-center rounded-full hover:bg-sanctuary-accent/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}