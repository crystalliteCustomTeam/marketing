// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./why-choose.module.css"

export default function WhyChoose({
    title = "Why choose Book Marketing?",
    desc = "Book Marketing provides comprehensive ghostwriting services to aid authors in writing their books and being one step closer to being accomplished. Our book-writing experts have in-depth experience of 10+ years and are committed to meeting all your expectations and bringing your ghostwriting dream to life.",
    data = [
        {
            title: "Complete Ownership",
            desc: "You retain full ownership. We put in all the hard work. You gain all the assets with our skilled book writing assistance."
        },
        {
            title: "High Retention Rate",
            desc: "Our dedicated writer have been with us for years, providing stability and security for your book writing projects."
        },
        {
            title: "100% Transparency",
            desc: "As a trustworthy Book Marketing, We keep clients fully informed throughout the process, promoting open collaboration."
        },
        {
            title: "4.5/5 Average Rating",
            desc: "Our high ratings on Google Play and the App Store highlight our credibility as a Book Marketing company in USA."
        }
    ]
}) {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.para}>{desc}</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}
