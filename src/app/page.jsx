// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Reviews, Publishing, Services, Sessions, TrendingPodcast, TrustedClients, Billboard, PublishedBooks, WhyChoose, Interviews, LatestPublished } from "@/components/website/home"

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
      <LatestPublished/>
      <Interviews/>
      <WhyChoose/>
      <Billboard />
      <Reviews />
      <TrustedClients />
      <Footer />
    </>
  )
}