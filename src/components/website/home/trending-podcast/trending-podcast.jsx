// Css
import style from "./trending-podcast.module.css"
// Components
import Cards from "./cards/cards"
import { CTAGroupDark } from "@/components"
// Media
import MicVector from "media/home/trending-podcast/vector.png"
// Next
import Image from "next/image"

export default function TrendingPodcast() {
    return (
        <section>
            <div className={style.root}>
                <Image src={MicVector} alt="domain" className={style.micvector} />
                <div className={`container ${style.left}`}>
                    <div className={style.content}>
                        <h2 className={style.title}>Top Trending Podcast!</h2>
                        <p className={style.para}>Insightful conversations, expert interviews, and engaging stories that delve into [topic/industry/interest]. Whether you’re looking for inspiration, the latest trends, or just a fresh perspective, our episodes offer something for everyone. Join us each week for a new episode that will keep you informed and entertained.</p>
                        <div className={style.cta}>
                            <CTAGroupDark />
                        </div>
                    </div>
                </div>
                <div className={style.slider}>
                    <Cards />
                </div>
            </div>
        </section>
    )
}