// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
const Services = dynamic(() => import("./services/services"))
const TrendingPodcast = dynamic(() => import("./trending-podcast/trending-podcast"))
const Publishing = dynamic(() => import("./publishing/publishing"))
const Sessions = dynamic(() => import("./sessions/sessions"))
const PublishedBooks = dynamic(() => import("./published-books/published-books"))
const Contact = dynamic(() => import("./contact/contact"))
const WhyChoose = dynamic(() => import("./why-choose/why-choose"))
const Billboard = dynamic(() => import("./billborad/billboard"))
const Reviews = dynamic(() => import("./reviews/reviews"))
const TrustedClients = dynamic(() => import("./trusted-clients/trusted-clients"))

export {
    Hero,
    Awards,
    Services,
    TrendingPodcast,
    Publishing,
    Sessions,
    PublishedBooks,
    Contact,
    WhyChoose,
    Billboard,
    Reviews,
    TrustedClients,
}