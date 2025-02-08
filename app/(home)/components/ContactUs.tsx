"use client"

import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

const ContactUs = () => {
  const visitingHours = [
    { days: "Monday - Friday", hours: "10:00 - 17:00" },
    { days: "Saturday", hours: "10:00 - 16:00" },
    { days: "Sunday", hours: "11:00 - 15:00" }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@earthsouls.in",
      href: "mailto:hello@earthsouls.in"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "123 Sanctuary Road, Bangalore, Karnataka 560001",
      href: "https://goo.gl/maps/yourMapLink" // Replace with actual Google Maps link
    }
  ]

  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Visit Us
          </motion.span>
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
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Interactive Map */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" // Replace with your actual Google Maps embed code
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
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
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Visiting Hours */}
            <motion.div 
              className="bg-sanctuary-primary/5 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-sanctuary-primary" />
                <h3 className="font-display text-xl font-bold text-sanctuary-text">
                  Visiting Hours
                </h3>
              </div>
              <div className="space-y-4">
                {visitingHours.map((schedule, index) => (
                  <motion.div 
                    key={schedule.days}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    className="flex justify-between items-center py-3 border-b border-sanctuary-primary/10 last:border-0"
                  >
                    <span className="font-medium text-sanctuary-text">
                      {schedule.days}
                    </span>
                    <span className="text-sanctuary-text/70">
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-sm border"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-display text-xl font-bold text-sanctuary-text mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                  />
                </div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sanctuary-primary/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-sanctuary-primary hover:bg-sanctuary-primary/90 text-white rounded-xl font-medium transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactUs