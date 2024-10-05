// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
import Services from "./services/services"
import TrendingPodcast from "./trending-podcast/trending-podcast"

export {
    Hero,
    Awards,
    Services,
    TrendingPodcast
}