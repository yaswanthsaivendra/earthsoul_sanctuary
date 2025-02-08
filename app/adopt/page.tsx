"use client"

import Image from "next/image"
import { Heart, Clock, CheckCircle, AlertCircle, PawPrint } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const AdoptionProgram = () => {
  const adoptionSteps = [
    {
      icon: Heart,
      title: "Choose Your Companion",
      description: "Browse our available animals and find your perfect match."
    },
    {
      icon: CheckCircle,
      title: "Submit Application", 
      description: "Fill out our adoption questionnaire to help us understand your lifestyle."
    },
    {
      icon: Clock,
      title: "Meet & Greet",
      description: "Visit the sanctuary to meet your potential new family member."
    },
    {
      icon: PawPrint,
      title: "Welcome Home",
      description: "Complete the adoption process and give an animal their forever home."
    }
  ]

  const availableAnimals = [
    {
      name: "Luna",
      type: "Dog",
      age: "2 years",
      status: "Available",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
      description: "Friendly and energetic Golden Retriever mix looking for an active family."
    },
    {
      name: "Oliver", 
      type: "Cat",
      age: "1 year",
      status: "Available",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      description: "Gentle and affectionate tabby cat who loves cuddles and playtime."
    },
    {
      name: "Max",
      type: "Dog", 
      age: "4 years",
      status: "Meeting Scheduled",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      description: "Loyal German Shepherd mix who's great with children and other dogs."
    }
  ]

  const successStories = [
    {
      petName: "Rocky",
      familyName: "The Johnson Family",
      image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&auto=format&fit=crop&q=60",
      story: "Rocky found his forever home after 6 months in our care. Now he's living his best life with a loving family.",
    },
    {
      petName: "Bella",
      familyName: "Sarah & Mike",
      image: "https://images.unsplash.com/photo-1577175889968-f551f5944abd?w=800&auto=format&fit=crop&q=60", 
      story: "From scared and shy to confident and happy, Bella's transformation has been amazing to witness.",
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <main>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[60vh] flex items-center py-12 md:py-24"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c"
            alt="Adoption Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 py-12 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-1.5 bg-white/10 text-white font-medium tracking-wide text-sm uppercase rounded-full mb-6 backdrop-blur-sm"
            >
              Adoption Program
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Find Your Perfect Companion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-white/90 mb-8"
            >
              Give a loving animal a second chance at happiness. Our adoption process is designed to create perfect matches that last a lifetime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="#available-animals"
                className="inline-flex items-center px-6 py-3 bg-sanctuary-accent hover:bg-sanctuary-accent/90 text-white rounded-full font-medium transition-colors"
              >
                View Available Animals
                <PawPrint className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Adoption Process */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-4"
            >
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-display font-bold text-sanctuary-text mb-6"
            >
              Our Adoption Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-sanctuary-text/70"
            >
              We make adoption simple while ensuring the best matches between animals and their new families.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-gray-50 shadow-sm -z-10" />
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-14 h-14 rounded-2xl bg-sanctuary-primary/10 flex items-center justify-center mb-6"
                  >
                    <step.icon className="w-7 h-7 text-sanctuary-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-sanctuary-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sanctuary-text/70">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Animals */}
      <section id="available-animals" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-sanctuary-accent/10 text-sanctuary-accent font-medium tracking-wide text-sm uppercase rounded-full mb-4"
            >
              Meet Our Animals
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-display font-bold text-sanctuary-text mb-6"
            >
              Available for Adoption
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-sanctuary-text/70"
            >
              These lovely souls are waiting for their forever homes. Each one has a unique personality and story.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableAnimals.map((animal, index) => (
              <motion.div
                key={animal.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-80 rounded-2xl overflow-hidden mb-6"
                >
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-4 left-4"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      animal.status === "Available" 
                        ? "bg-sanctuary-primary/90 text-white"
                        : "bg-sanctuary-accent/90 text-white"
                    }`}>
                      {animal.status}
                    </span>
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-sanctuary-text">
                      {animal.name}
                    </h3>
                    <span className="text-sm text-sanctuary-text/60">
                      {animal.age}
                    </span>
                  </div>
                  <p className="text-sanctuary-text/70">
                    {animal.description}
                  </p>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="pt-4"
                  >
                    <Link
                      href={`/adopt/${animal.name.toLowerCase()}`}
                      className="inline-flex items-center text-sanctuary-primary hover:text-sanctuary-primary/80 font-medium"
                    >
                      Learn More
                      <AlertCircle className="ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-sanctuary-text mb-6"
          >
            Happy Endings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-sanctuary-text/80"
          >
            Stories that warm our hearts and inspire hope.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.petName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.div 
                className="relative h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={story.image}
                  alt={story.petName}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8"
              >
                <h3 className="text-2xl font-bold text-sanctuary-text mb-2">
                  {story.petName} & {story.familyName}
                </h3>
                <p className="text-sanctuary-text/70">{story.story}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AdoptionProgram