// Css
import style from "./latest-published.module.css"
// Next
import Image from "next/image"
// Media
import Book from "media/home/hardcover_book.png"
// Components
import { Counter, CTAGroupLight } from "@/components"

const data = [
    [5, "Books Published"],
    [4.5, "User Reviews"],
    [4, "Best Seller Awards"],
]

export default function LatestPublished() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Book} alt="domain" className={style.img} />
                <div className="container">
                    <div className={style.grids}>
                        <div className={style.cols}>
                            <h2 className={style.title}>Latest book published!</h2>
                            <p className={style.para}>All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                            <div className={style.counters}>
                                {
                                    data.map(([value, text], i) => (
                                        <div key={i} className={style.counterCard}>
                                            <Counter value={value} className={style.numbers} />
                                            <span className={style.about}>{text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Image src={Book} alt="domain" className={style.img2} />
                    </div>
                </div>
            </div>
        </section>
    )
}