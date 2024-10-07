// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Reviews, Services, TrendingPodcast, TrustedClients } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <Reviews />
      <TrustedClients />
      <Footer />
    </>
  )
}