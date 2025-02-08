"use client"

import Image from "next/image"
import BlogAndStories from "./components/Blog"
import { motion } from "framer-motion"

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma", 
      role: "Sanctuary Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "20+ years experience in animal welfare across India",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Head Veterinarian",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", 
      bio: "Specialized in Indian wildlife rehabilitation",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Anjali Patel",
      role: "Animal Care Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Expert in animal behavior and indigenous species care",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center bg-sanctuary-background"
        variants={fadeInUp}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
            alt="Sanctuary Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 py-24">
          <motion.div 
            className="max-w-2xl"
            variants={staggerChildren}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-white/10 text-white font-medium tracking-wide text-sm uppercase rounded-full mb-6 backdrop-blur-sm"
            >
              About Us
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Our Story & Mission
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90"
            >
              Dedicated to providing hope, healing, and a forever home to animals in need.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <motion.section 
        className="py-12 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-6"
              >
                Our Mission
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-display font-bold text-sanctuary-text mb-6"
              >
                A Haven for Those Who Need It Most
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg text-sanctuary-text/70"
              >
                <p>
                  Founded in 2015, EarthSouls Sanctuary began with a simple mission: 
                  to provide a safe haven for abandoned and injured animals. What started 
                  as a small rescue operation has grown into a comprehensive sanctuary 
                  dedicated to rehabilitation, education, and advocacy.
                </p>
                <p>
                  Today, we continue to expand our impact through innovative programs, 
                  community partnerships, and the tireless dedication of our team and volunteers.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="relative h-[500px] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c"
                  alt="Sanctuary Story"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-64 bg-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-4xl font-display font-bold text-sanctuary-primary mb-2">
                  2,500+
                </div>
                <div className="text-sanctuary-text/70">
                  Animals rescued and rehabilitated since our founding
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-12 md:py-24 bg-gray-50/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4"
            >
              Our Team
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-display font-bold text-sanctuary-text mb-6"
            >
              Meet the Dedicated Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-sanctuary-text/70"
            >
              Our passionate professionals work tirelessly to ensure the well-being of every animal in our care.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80 
                }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="relative h-80 rounded-2xl overflow-hidden mb-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                  >
                    <div className="text-white">
                      <p className="font-medium">{member.bio}</p>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-sanctuary-text"
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sanctuary-text/70"
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <BlogAndStories />
    </motion.main>
  )
}

export default AboutUs