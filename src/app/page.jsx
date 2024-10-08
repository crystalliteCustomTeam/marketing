// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Reviews, Publishing, Services, Sessions, TrendingPodcast, TrustedClients, Billboard, PublishedBooks } from "@/components/website/home"

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
      <Billboard/>
      <PublishedBooks />
      <Reviews />
      <TrustedClients />
      <Footer />
    </>
  )
}