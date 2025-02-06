"use client"

import { motion } from "framer-motion"
import { Calendar,  ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const BlogAndStories = () => {
  const rescueStories = [
    {
      title: "Luna's Journey to Recovery",
      excerpt: "Discover how this brave soul overcame adversity and found her forever home.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
      date: "March 15, 2024",
      category: "Success Story"
    },
    {
      title: "A New Beginning for Max",
      excerpt: "From abandoned to adored - a heartwarming tale of rescue and rehabilitation.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      date: "March 10, 2024",
      category: "Rehabilitation"
    },
    {
      title: "The Power of Community",
      excerpt: "How local support helped us save dozens of animals during the winter storm.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
      date: "March 5, 2024",
      category: "Community"
    }
  ]


  const upcomingEvents = [
    {
      title: "Spring Adoption Fair",
      date: "April 15, 2024",
      location: "Main Sanctuary",
      description: "Meet our adorable animals looking for forever homes."
    },
    {
      title: "Wildlife Photography Workshop",
      date: "April 22, 2024",
      location: "Education Center",
      description: "Learn to capture amazing animal photos while supporting our cause."
    }
  ]

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Stories Section */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-sanctuary-primary/10 text-sanctuary-primary font-medium tracking-wide text-sm uppercase rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sanctuary-text mb-6">
            Stories of Hope & Healing
          </h2>
          <p className="text-lg text-sanctuary-text/70">
            Discover the heartwarming journeys of our rescued animals and the impact of our community.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rescueStories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href="/blog/story">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-sanctuary-text text-sm rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-sanctuary-text/60">
                    <Calendar className="w-4 h-4" />
                    {story.date}
                  </div>
                  <h3 className="text-xl font-display font-bold text-sanctuary-text group-hover:text-sanctuary-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sanctuary-text/70">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Events Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-display font-bold text-sanctuary-text">
              Upcoming Events
            </h3>
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 text-sanctuary-primary hover:text-sanctuary-primary/80 font-medium"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-sanctuary-text/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h4 className="text-lg font-bold text-sanctuary-text mb-2">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-sanctuary-text/60 mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-sm text-sanctuary-text/70">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogAndStories;