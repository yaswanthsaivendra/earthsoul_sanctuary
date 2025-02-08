"use client"

import { HandHeart, Users, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center py-12 md:py-24">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
          alt="Sanctuary Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-sanctuary-accent/20 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-6"
          >
            Welcome to EarthSouls Sanctuary
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
          Where Every Soul Finds Refuge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Join us in our mission to rescue, rehabilitate, and provide sanctuary to animals. 
            Every life matters, and together we can make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <ScrollLink
              to="donate"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-flex cursor-pointer items-center px-6 py-3 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full font-medium transition-colors"
            >
              Donate Now
              <HandHeart className="ml-2 h-5 w-5" />
            </ScrollLink>
            <Link
              href="/volunteer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium backdrop-blur-sm transition-colors"
            >
              Get Involved
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 max-w-6xl mx-auto">
          {[
            {
              href: "/adopt",
              text: "Adopt a Soul",
              icon: Heart,
              description: "Give an animal a forever home",
              className: "bg-white hover:bg-white/90 text-sanctuary-text"
            },
            {
              href: "#donate",
              text: "Support Us",
              icon: HandHeart,
              description: "Help fund our mission",
              className: "bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white",
              isScroll: true,
              scrollTo: "donate"
            },
            {
              href: "/volunteer",
              text: "Volunteer",
              icon: Users,
              description: "Join our community",
              className: "bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white"
            },
            {
              href: "#contact",
              text: "Visit Us",
              icon: MapPin,
              description: "See the sanctuary in person",
              className: "bg-sanctuary-secondary hover:bg-sanctuary-secondary/90 text-sanctuary-text",
              isScroll: true,
              scrollTo: "contact"
            }
          ].map((card) => (
            <div
              key={card.text}
              className="relative group"
            >
              {card.isScroll ? (
                <ScrollLink
                  to={card.scrollTo}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`block p-6 rounded-2xl ${card.className} cursor-pointer`}
                >
                  <div className="flex flex-col h-full">
                    <card.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{card.text}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </ScrollLink>
              ) : (
                <Link 
                  href={card.href} 
                  className={`block p-6 rounded-2xl ${card.className}`}
                >
                  <div className="flex flex-col h-full">
                    <card.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{card.text}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}