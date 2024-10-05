// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Services, TrendingPodcast } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <Footer />
    </>
  )
}