// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const AboutMarketing = dynamic(() => import("./about-marketing/about-marketing"))
const BelieveIn = dynamic(() => import("./believe-in/believe-in"))

export {
    Hero,
    AboutMarketing,
    BelieveIn
}