// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"))
const OurMarketing = dynamic(() => import("./our-marketing/our-marketing"))

export {
    Hero,
    ConvertTypes,
    OurMarketing
}