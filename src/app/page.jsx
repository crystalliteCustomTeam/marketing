// Components
import { Awards, Hero, Reviews, Publishing, Services, Sessions, TrendingPodcast, TrustedClients, Billboard, PublishedBooks, WhyChoose, Interviews, LatestPublished, Contact } from "@/components/website/home"

export default function Page() {

  return (
    <>
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <Publishing />
      <Sessions />
      <PublishedBooks />
      <Contact />
      <LatestPublished/>
      <Interviews/>
      <WhyChoose />
      <Billboard />
      <Reviews />
      <TrustedClients />
    </>
  )
}