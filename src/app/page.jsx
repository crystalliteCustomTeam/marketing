// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, OurCustomers, Publishing, Services, Sessions, TrendingPodcast, TrustedClients } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <Publishing />
      <Sessions />
      <OurCustomers />
      <TrustedClients />
      <Footer />
    </>
  )
}