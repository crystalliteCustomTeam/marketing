// Next
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
// Media
import ChevronRight from "media/icons/right-chevron-pink.svg"
// Components
const Cards = dynamic(() => import("./cards/cards"))
// Css
import styles from "./services.module.css"

export default function Services() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>What we do!</h2>
                        <p className={styles.para}>Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.</p>
                        <Link className={styles.link} href="/">
                            <span>Explore</span>
                            <Image src={ChevronRight} alt="domain" />
                        </Link>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}