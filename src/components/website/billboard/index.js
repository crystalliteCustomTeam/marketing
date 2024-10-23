// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Video = dynamic(() => import("./video/video"))
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"))
const Advertise = dynamic(() => import("./advertise/advertise"))
const Solutions = dynamic(() => import("./solutions/solutions"))
const Publishing = dynamic(() => import("./publishing/publishing"))
export { Hero, Video, ConvertTypes, Advertise, Solutions, Publishing }
