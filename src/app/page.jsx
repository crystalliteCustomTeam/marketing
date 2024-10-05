// Components
import { Footer, Header } from "@/components"
import { Awards, Hero, OurCustomers, Services, TrustedClients } from "@/components/website/home"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <OurCustomers />
      <TrustedClients/>
      <Footer/>
    </>
  )
}