"use client"

import { Heart, PawPrint, Leaf, Stethoscope } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const DonationTiers = () => {
  const donationTiers = [
    {
      amount: 1000,
      title: "Food Provider",
      icon: PawPrint,
      description: "Provide nutritious meals for our rescued animals for a week",
      color: "bg-[#FFB84C]",
      textColor: "text-[#FFB84C]"
    },
    {
      amount: 2500,
      title: "Medical Care", 
      icon: Stethoscope,
      description: "Support emergency medical treatment and vaccinations",
      color: "bg-[#4ECDC4]",
      textColor: "text-[#4ECDC4]"
    },
    {
      amount: 5000,
      title: "Animal Rescuer",
      icon: Heart,
      description: "Fund rescue operations and rehabilitation programs",
      color: "bg-[#FF6B6B]",
      textColor: "text-[#FF6B6B]"
    },
    {
      amount: 10000,
      title: "Sanctuary Guardian",
      icon: Leaf,
      description: "Help maintain and improve sanctuary facilities",
      color: "bg-[#2ECC71]",
      textColor: "text-[#2ECC71]"
    }
  ]

  return (
    <section id="donate" className="py-12 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4">
            Support Our Cause
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sanctuary-text mb-6">
            Make a Direct Impact
          </h2>
          <p className="text-lg text-sanctuary-text/70">
            Choose how you want to help. Every contribution makes a difference in the lives of our animals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <motion.div 
                className={`w-12 h-12 ${tier.color}/10 rounded-full flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <tier.icon className={`w-6 h-6 ${tier.textColor}`} />
              </motion.div>
              <div className="text-2xl font-bold text-sanctuary-text mb-2">
                ₹{tier.amount.toLocaleString()}
              </div>
              <h3 className="text-lg font-medium text-sanctuary-text mb-2">
                {tier.title}
              </h3>
              <p className="text-sanctuary-text/70 mb-6">
                {tier.description}
              </p>
              <Link
                href={`/donate?amount=${tier.amount}`}
                className="inline-flex w-full items-center justify-center px-6 py-3 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-full font-medium transition-colors"
              >
                Donate Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DonationTiers;