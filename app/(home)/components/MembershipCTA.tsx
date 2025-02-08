"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function MembershipCTA() {
  const benefits = [
    "Exclusive sanctuary events and visits",
    "Monthly impact reports and updates", 
    "Priority adoption opportunities",
    "Member-only educational workshops",
    "Direct support to animal care programs"
  ]

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sanctuary-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sanctuary-primary/10 rounded-full blur-2xl" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 shadow-xl"
            >
              <span className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-6">
                Join Our Mission
              </span>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-sanctuary-text mb-6">
                Become a Member Today
              </h2>
              
              <p className="text-lg text-sanctuary-text/70 mb-8">
                Your membership helps us rescue, rehabilitate, and provide sanctuary to animals in need. 
                Together, we can create a world where every animal is treated with compassion and respect.
              </p>

              <motion.div 
                className="space-y-4 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <motion.div 
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-sanctuary-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="w-3 h-3 text-sanctuary-primary" />
                    </motion.div>
                    <span className="text-sanctuary-text/80">{benefit}</span>
                  </motion.li>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center px-6 py-3 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-full font-medium transition-colors"
                >
                  Join Now
                </Link>
                <Link
                  href="/learn-more"
                  className="inline-flex items-center px-6 py-3 bg-sanctuary-primary/10 hover:bg-sanctuary-primary/20 text-sanctuary-primary rounded-full font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0">
              <div className="relative h-full w-full rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000"
                  alt="Sanctuary animals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}