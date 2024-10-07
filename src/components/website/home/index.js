// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
import Services from "./services/services"
import TrendingPodcast from "./trending-podcast/trending-podcast"
const TrustedClients = dynamic(() => import("./trusted-clients/trusted-clients"))
const Reviews = dynamic(() => import("./reviews/reviews"))

export {
    Hero,
    Awards,
    Services,
    TrendingPodcast,
    TrustedClients,
    Reviews
}