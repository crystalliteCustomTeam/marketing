// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const OurWork = dynamic(() => import("./our-work/our-work"))

export {
    Hero,
    OurWork
}