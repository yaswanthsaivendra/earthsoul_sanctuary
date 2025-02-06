"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import BlogAndStories from "./components/Blog"

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Sanctuary Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "20+ years experience in animal welfare and sanctuary management",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Mark Thompson",
      role: "Head Veterinarian",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Specialized in wildlife rehabilitation and emergency care",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Chen",
      role: "Animal Care Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in animal behavior and rehabilitation programs",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-sanctuary-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c"
            alt="Sanctuary Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white font-medium tracking-wide text-sm uppercase rounded-full mb-6 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Our Story & Mission
            </h1>
            <p className="text-xl text-white/90">
              Dedicated to providing hope, healing, and a forever home to animals in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl font-display font-bold text-sanctuary-text mb-6">
                A Haven for Those Who Need It Most
              </h2>
              <div className="prose prose-lg text-sanctuary-text/70">
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c"
                  alt="Sanctuary Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-sanctuary-primary mb-2">
                  2,500+
                </div>
                <div className="text-sanctuary-text/70">
                  Animals rescued and rehabilitated since our founding
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-4xl font-display font-bold text-sanctuary-text mb-6">
              Meet the Dedicated Team
            </h2>
            <p className="text-lg text-sanctuary-text/70">
              Our passionate professionals work tirelessly to ensure the well-being of every animal in our care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon = {
                          twitter: Twitter,
                          linkedin: Linkedin,
                          instagram: Instagram,
                          facebook: Facebook
                        }[platform]
                        
                        if (!Icon) return null
                        
                        return (
                          <a
                            key={platform}
                            href={url}
                            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                          >
                            <Icon className="w-5 h-5 text-sanctuary-text" />  
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-sanctuary-text mb-1">
                  {member.name}
                </h3>
                <div className="text-sanctuary-primary font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-sanctuary-text/70">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogAndStories />
    </main>
  )
}

export default AboutUs