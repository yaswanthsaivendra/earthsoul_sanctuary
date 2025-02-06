"use client"

import { motion } from "framer-motion"
import { Heart, Home, Leaf, ShieldCheck } from "lucide-react"
import CountUp from 'react-countup'

export function LiveStats() {
  const stats = [
    {
      icon: Heart,
      value: 2547,
      label: "Animals Rescued",
      color: "text-[#FF6B6B]",
      bgColor: "bg-[#FF6B6B]/10",
      description: "Given a second chance at life"
    },
    {
      icon: ShieldCheck, 
      value: 1832,
      label: "Rehabilitated",
      color: "text-[#4ECDC4]",
      bgColor: "bg-[#4ECDC4]/10",
      description: "Healed and restored to health"
    },
    {
      icon: Home,
      value: 1654,
      label: "Adopted",
      color: "text-[#FFB84C]",
      bgColor: "bg-[#FFB84C]/10",
      description: "Found their forever homes"
    },
    {
      icon: Leaf,
      value: 893,
      label: "In Sanctuary",
      color: "text-[#2ECC71]",
      bgColor: "bg-[#2ECC71]/10",
      description: "Living peacefully with us"
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sanctuary-text mb-6">
            Making a Difference Every Day
          </h2>
          <p className="text-lg text-sanctuary-text/70">
            Through dedication and your support, we continue to grow our impact on animal welfare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-gray-50 shadow-sm -z-10" />
              <div className="p-8 relative">
                <div className={`${stat.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <stat.icon className={`${stat.color} w-7 h-7`} />
                </div>
                <div className="space-y-2">
                  <div className={`${stat.color} text-4xl font-display font-bold`}>
                    <CountUp end={stat.value} duration={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-sanctuary-text">
                    {stat.label}
                  </h3>
                  <p className="text-sanctuary-text/60 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}