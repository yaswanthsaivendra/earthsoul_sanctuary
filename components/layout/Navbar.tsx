"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Adopt", href: "/adopt" },
    { label: "Volunteer", href: "/volunteer" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className={`font-display text-xl font-bold ${
              isScrolled || isMobileMenuOpen ? "text-sanctuary-text" : "text-white"
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
            {isHomePage ? (
              <ScrollLink
                to="donate"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-flex cursor-pointer items-center px-4 py-2 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full text-sm font-medium transition-colors"
              >
                Donate Now
              </ScrollLink>
            ) : (
              <Link
                href="/#donate"
                className="inline-flex items-center px-4 py-2 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full text-sm font-medium transition-colors"
              >
                Donate Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 rounded-lg hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || isMobileMenuOpen ? "text-sanctuary-text" : "text-white"} />
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
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-x-0 top-20 bg-white border-t shadow-lg"
              style={{ maxHeight: "calc(100vh - 5rem)", overflowY: "auto" }}
            >
              <div className="container mx-auto px-4 py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-lg font-medium text-sanctuary-text hover:text-sanctuary-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-6"
                >
                  {isHomePage ? (
                    <ScrollLink
                      to="donate"
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="block w-full py-4 bg-sanctuary-accent text-white text-center rounded-xl font-medium hover:bg-sanctuary-accent/90 transition-colors cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Donate Now
                    </ScrollLink>
                  ) : (
                    <Link
                      href="/#donate"
                      className="block w-full py-4 bg-sanctuary-accent text-white text-center rounded-xl font-medium hover:bg-sanctuary-accent/90 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Donate Now
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}