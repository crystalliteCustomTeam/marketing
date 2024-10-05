// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, OurCustomers, Services, TrendingPodcast, TrustedClients } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <OurCustomers />
      <TrustedClients/>
      <Footer />
    </>
  )
}