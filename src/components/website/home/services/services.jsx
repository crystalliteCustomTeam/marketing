// Css
import style from "./services.module.css"
// Components
import Cards from "./cards/cards"
// Next
import Link from "next/link"
import Image from "next/image"
// Media
import ChevronRight from "media/icons/right-chevron-pink.svg"

export default function Services() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>What we do!</h2>
                        <p className={style.para}>Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.</p>
                        <Link className={style.link} href="/">
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