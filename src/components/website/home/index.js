// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
import Services from "./services/services"

export {
    Hero,
    Awards,
    Services
}