// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Reviews, Publishing, Services, Sessions, TrendingPodcast, TrustedClients, Billboard, PublishedBooks, WhyChoose } from "@/components/website/home"

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
      <PublishedBooks />
      <WhyChoose/>
      <Billboard/>
      <Reviews />
      <TrustedClients />
      <Footer />
    </>
  )
}