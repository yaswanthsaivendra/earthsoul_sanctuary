"use client"

import Image from "next/image"
import { Heart, Users, Calendar, Clock, ArrowRight, MapPin, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const GetInvolved = () => {
  const volunteerRoles = [
    {
      title: "Animal Care Assistant",
      commitment: "4-8 hours/week",
      description: "Help with daily care, feeding, and enrichment activities for our animals.",
      requirements: ["18+ years old", "Physical stamina", "Reliable transportation"],
      icon: Heart
    },
    {
      title: "Event Coordinator", 
      commitment: "6-10 hours/month",
      description: "Organize and manage adoption events, fundraisers, and community outreach programs.",
      requirements: ["Strong communication", "Event planning experience", "Team player"],
      icon: Calendar
    },
    {
      title: "Education Guide",
      commitment: "4-6 hours/week", 
      description: "Lead sanctuary tours and educational programs for visitors and school groups.",
      requirements: ["Public speaking skills", "Animal knowledge", "Weekend availability"],
      icon: Users
    }
  ]

  const upcomingOrientations = [
    {
      date: "April 15, 2024",
      time: "10:00 AM - 12:00 PM",
      spots: 8,
      location: "Main Sanctuary"
    },
    {
      date: "April 29, 2024",
      time: "2:00 PM - 4:00 PM", 
      spots: 12,
      location: "Education Center"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
            alt="Volunteer Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 py-24">
          <motion.div 
            className="max-w-2xl"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-white/10 text-white font-medium tracking-wide text-sm uppercase rounded-full mb-6 backdrop-blur-sm"
            >
              Volunteer Program
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Make a Real Difference
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8"
            >
              Join our community of dedicated volunteers and help create a better world for animals in need.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="#roles"
                className="inline-flex items-center px-6 py-3 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-full font-medium transition-colors"
              >
                Explore Opportunities
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Stats */}
      <motion.section 
        className="py-16 bg-sanctuary-primary/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "200+", label: "Active Volunteers" },
              { number: "15,000", label: "Hours Contributed" },
              { number: "1,000+", label: "Animals Helped" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl font-display font-bold text-sanctuary-primary mb-2"
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sanctuary-text/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Volunteer Roles */}
      <motion.section 
        id="roles" 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-4"
            >
              Opportunities
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-display font-bold text-sanctuary-text mb-6"
            >
              Available Volunteer Roles
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-sanctuary-text/70"
            >
              Find the perfect role that matches your skills and passion for animal welfare.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-sanctuary-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <role.icon className="w-7 h-7 text-sanctuary-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-sanctuary-text mb-4">{role.title}</h3>
                <p className="text-sanctuary-text/70 mb-6">{role.description}</p>
                <motion.ul className="space-y-3">
                  {role.requirements.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-sanctuary-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Orientation Schedule */}
      <motion.section 
        className="py-24 bg-gray-50/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4"
              >
                Get Started
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-display font-bold text-sanctuary-text mb-6"
              >
                Upcoming Orientations
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-sanctuary-text/70"
              >
                Join us for a volunteer orientation to learn more about our program and available opportunities.
              </motion.p>
            </motion.div>

            <div className="space-y-4">
              {upcomingOrientations.map((session, index) => (
                <motion.div
                  key={session.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-sanctuary-text">
                        {session.date}
                      </div>
                      <div className="flex items-center gap-2 text-sanctuary-text/70">
                        <Clock className="w-4 h-4" />
                        {session.time}
                      </div>
                      <div className="flex items-center gap-2 text-sanctuary-text/70">
                        <MapPin className="w-4 h-4" />
                        {session.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-sanctuary-text/70">
                        {session.spots} spots available
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                          href="/volunteer/register"
                          className="inline-flex items-center px-4 py-2 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-full text-sm font-medium transition-colors"
                        >
                          Register
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

export default GetInvolved