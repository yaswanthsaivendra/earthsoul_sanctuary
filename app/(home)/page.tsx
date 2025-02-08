import { Hero } from "@/app/(home)/components/Hero"
import { LiveStats } from "@/app/(home)/components/LiveStats"
import { MembershipCTA } from "@/app/(home)/components/MembershipCTA"
import ContactUs from "@/app/(home)/components/ContactUs"
import DonationTiers from "@/app/(home)/components/DonationTiers"

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveStats />
      <DonationTiers />
      <MembershipCTA />
      <ContactUs />
    </main>
  )
}
