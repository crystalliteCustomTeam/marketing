// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const AudioPlayer = dynamic(() => import("./audioPlayer/audioPlayer"))
const LatestPodcast = dynamic(() => import("./latest-podcast/latest-podcast"))
const PodcastingExcellence = dynamic(() =>
  import("./podcasting-excellence/podcasting-excellence")
)
const CrossPodcast = dynamic(() => import("./cross-podcast/cross-podcast"))
export { Hero, AudioPlayer, LatestPodcast, PodcastingExcellence, CrossPodcast }
