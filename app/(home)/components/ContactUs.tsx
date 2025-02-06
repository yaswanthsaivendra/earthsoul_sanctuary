"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

const ContactUs = () => {
  const visitingHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { days: "Sunday", hours: "11:00 AM - 3:00 PM" }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@earthsouls.org",
      href: "mailto:hello@earthsouls.org"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "123 Sanctuary Road, Nature Valley, CA 94123",
      href: "https://maps.google.com"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sanctuary-text mb-6">
            Come Meet Our Animals
          </h2>
          <p className="text-lg text-sanctuary-text/70">
            Experience the sanctuary in person and see how your support makes a difference in the lives of our animals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Interactive Map */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg relative">
              <Image
                src="/map-preview.jpg"
                alt="Sanctuary Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-sanctuary-text rounded-full backdrop-blur-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white group-hover:bg-sanctuary-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-sanctuary-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sanctuary-text mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-sanctuary-text/70">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Visiting Hours & Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Visiting Hours */}
            <div className="bg-sanctuary-primary/5 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-sanctuary-primary" />
                <h3 className="font-display text-xl font-bold text-sanctuary-text">
                  Visiting Hours
                </h3>
              </div>
              <div className="space-y-4">
                {visitingHours.map((schedule) => (
                  <div 
                    key={schedule.days}
                    className="flex justify-between items-center py-3 border-b border-sanctuary-primary/10 last:border-0"
                  >
                    <span className="font-medium text-sanctuary-text">
                      {schedule.days}
                    </span>
                    <span className="text-sanctuary-text/70">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-display text-xl font-bold text-sanctuary-text mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-xl font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs