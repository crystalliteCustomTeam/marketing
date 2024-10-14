// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"))
const OurMarketing = dynamic(() => import("./our-marketing/our-marketing"))
const ImportanceOf = dynamic(() => import("./importance-of/importance-of"))
const TrendingPosts = dynamic(() => import("./trending-posts/trending-posts"))
const SupoortedChannels = dynamic(() => import("./supoorted-channels/supoorted-channels"))
const Video = dynamic(() => import("./video/video"))

export {
    Hero,
    ConvertTypes,
    OurMarketing,
    ImportanceOf,
    TrendingPosts,
    SupoortedChannels,
    Video
}