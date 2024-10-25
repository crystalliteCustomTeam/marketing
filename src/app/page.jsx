import React, { Suspense, lazy } from "react"

const Hero = lazy(() => import("@/components/website/home/hero/hero"))
const Awards = lazy(() => import("@/components/website/awards/awards"))
const Services = lazy(() => import("@/components/website/home/services/services"))
const TrendingPodcast = lazy(() => import("@/components/website/home/trending-podcast/trending-podcast"))
const Publishing = lazy(() => import("@/components/website/home/publishing/publishing"))
const Sessions = lazy(() => import("@/components/website/home/sessions/sessions"))
const PublishedBooks = lazy(() => import("@/components/website/home/published-books/published-books"))
const Contact = lazy(() => import("@/components/website/home/contact/contact"))
const LatestPublished = lazy(() => import("@/components/website/home/latest-published/latest-published"))
const Interviews = lazy(() => import("@/components/website/home/interviews/interviews"))
const WhyChoose = lazy(() => import("@/components/website/why-choose/why-choose"))
const Billboard = lazy(() => import("@/components/website/home/billborad/billboard"))
const Reviews = lazy(() => import("@/components/website/reviews/reviews"))
const TrustedClients = lazy(() => import("@/components/website/trusted-clients/trusted-clients"))

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Awards />
      <Services />
      <TrendingPodcast />
      <Publishing />
      <Sessions />
      <PublishedBooks />
      <Contact />
      <LatestPublished />
      <Interviews />
      <WhyChoose />
      <Billboard />
      <Reviews />
      <TrustedClients />
    </Suspense>
  )
}