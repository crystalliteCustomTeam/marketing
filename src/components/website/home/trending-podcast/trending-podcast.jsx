// Components
import Cards from "./cards/cards"
import { CTAGroupDark } from "@/components"
// Css
import style from "./trending-podcast.module.css"

export default function TrendingPodcast() {
    return (
        <section>
            <div className={style.root}>
                <svg className={style.micvector} width="149" height="377" viewBox="0 0 149 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.11222 249.792C39.7911 249.792 71.1192 218.464 71.1192 179.785V83.5253C71.1192 44.8464 39.7911 13.5183 1.11222 13.5183C-37.5666 13.5183 -68.8948 44.8464 -68.8948 83.5253V179.785C-68.8948 218.464 -37.5666 249.792 1.11222 249.792Z" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M-132.777 147.405V177.158C-132.777 251.015 -72.7457 311.046 1.11165 311.046C74.969 311.046 135 251.015 135 177.158V147.405" stroke="white" strokeOpacity="0.05" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M-23.2157 91.0534C-7.46412 85.2778 9.6876 85.2778 25.4392 91.0534" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M-12.8901 128.156C-3.61421 125.706 6.01176 125.706 15.2877 128.156" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.11194 311.048V363.553" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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