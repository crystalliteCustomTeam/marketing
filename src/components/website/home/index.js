// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
const Services = dynamic(() => import("./services/services"))
const TrendingPodcast = dynamic(() => import("./trending-podcast/trending-podcast"))
const Publishing = dynamic(() => import("./publishing/publishing"))
const Sessions = dynamic(() => import("./sessions/sessions"))
const PublishedBooks = dynamic(() => import("./published-books/published-books"))
const TrustedClients = dynamic(() => import("./trusted-clients/trusted-clients"))
const Reviews = dynamic(() => import("./reviews/reviews"))

export {
    Hero,
    Awards,
    Services,
    TrendingPodcast,
    Publishing,
    Sessions,
    PublishedBooks,
    TrustedClients,
    Reviews
}