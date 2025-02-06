"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Adopt", href: "/adopt" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ]

  const programs = [
    { label: "Animal Rescue", href: "/programs/rescue" },
    { label: "Rehabilitation", href: "/programs/rehabilitation" },
    { label: "Education", href: "/programs/education" },
    { label: "Community Outreach", href: "/programs/community" },
    { label: "Wildlife Protection", href: "/programs/wildlife" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Youtube, href: "https://youtube.com" },
  ]

  return (
    <footer className="bg-sanctuary-text pt-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">
                EarthSouls
              </span>
            </Link>
            <p className="text-white/70">
              Dedicated to providing hope, healing, and a forever home to animals in need. 
              Join us in making a difference.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link 
                    href={program.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold mb-6">
              Stay Connected
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sanctuary-accent" />
                <a href="mailto:hello@earthsouls.org" className="text-white/70 hover:text-white transition-colors">
                  hello@earthsouls.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sanctuary-accent" />
                <a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sanctuary-accent" />
                <span className="text-white/70">
                  123 Sanctuary Road<br />
                  Nature Valley, CA 94123
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="font-medium mb-3">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sanctuary-accent hover:bg-sanctuary-accent/90 rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} EarthSouls Sanctuary. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 