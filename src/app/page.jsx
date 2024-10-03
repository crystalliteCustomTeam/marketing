// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, Services } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <Footer/>
    </>
  )
}