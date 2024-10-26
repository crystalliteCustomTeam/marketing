// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const AudioPlayer = dynamic(() => import("./audioPlayer/audioPlayer"))
const LatestPodcast = dynamic(() => import("./latest-podcast/latest-podcast"))
export { Hero, AudioPlayer, LatestPodcast }
