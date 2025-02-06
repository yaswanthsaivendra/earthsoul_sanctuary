import { Hero } from "@/app/(home)/components/Hero"
import { LiveStats } from "@/app/(home)/components/LiveStats"
import { MembershipCTA } from "@/app/(home)/components/MembershipCTA"
import ContactUs from "@/app/(home)/components/ContactUs"

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveStats />
      <MembershipCTA />
      <ContactUs />
    </main>
  )
}
