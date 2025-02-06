"use client"

import { motion } from "framer-motion"
import { Heart, HandHeart, Users, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c"
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Give Hope to Animals in Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Join us in our mission to rescue, rehabilitate, and provide sanctuary to animals. 
            Every life matters, and together we can make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/donate"
              className="inline-flex items-center px-6 py-3 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full font-medium transition-colors"
            >
              Donate Now
              <HandHeart className="ml-2 h-5 w-5" />
            </Link>
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
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            {
              href: "/adopt",
              text: "Adopt a Soul",
              icon: Heart,
              description: "Give an animal a forever home",
              className: "bg-white hover:bg-white/90 text-sanctuary-text"
            },
            {
              href: "/donate",
              text: "Support Us",
              icon: HandHeart,
              description: "Help fund our mission",
              className: "bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white"
            },
            {
              href: "/volunteer",
              text: "Volunteer",
              icon: Users,
              description: "Join our community",
              className: "bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white"
            },
            {
              href: "/visit",
              text: "Visit Us",
              icon: MapPin,
              description: "See the sanctuary in person",
              className: "bg-sanctuary-secondary hover:bg-sanctuary-secondary/90 text-sanctuary-text"
            }
          ].map((item) => (
            <motion.div
              key={item.text}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Link href={item.href}>
                <div className={`${item.className} p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                  <item.icon className="h-8 w-8 mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">{item.text}</h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}