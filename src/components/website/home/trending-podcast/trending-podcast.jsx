// Css
import style from "./trending-podcast.module.css"
// Components
import Cards from "./cards/cards"

export default function TrendingPodcast() {
    return (
        <section>
            <div className="bg-black py-[90px]">
                <div className="container">
                </div>
                <Cards />
            </div>
        </section>
    )
}