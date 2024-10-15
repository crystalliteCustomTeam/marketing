// Components
import { Awards, Traditional } from "@/components"
import { Hero, ConvertTypes, OurMarketing, ImportanceOf, TrendingPosts, SupoortedChannels, Video, CaseStudy, Services } from "@/components/website/social-media-marketing"

export default function Page() {
    return (
        <>
            <Hero />
            <ConvertTypes />
            <OurMarketing />
            <Awards />
            <ImportanceOf />
            <TrendingPosts />
            <SupoortedChannels />
            <Traditional />
            <Video />
            <CaseStudy />
            <Services />
        </>
    )
}