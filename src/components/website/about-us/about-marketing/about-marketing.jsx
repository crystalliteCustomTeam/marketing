// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
// Css
import styles from "./about-marketing.module.css"
// Components
import Cards from "./cards/cards"
import { CTAGroupLight } from "@/components"

export default function AboutMarketing() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div>
                            <h2 className={styles.title}>About Book Marketing!</h2>
                            <p className={styles.para}>Book Marketing is helping startups and organizations build and implement digital transformation solutions tailored to their demand and needs.</p>
                            <ul className={styles.lists}>
                                {
                                    ["Tech Integrated Solutions", "Client Focused Approach", "Disruptive Innovation", "Digital Transformation Partner"].map((e, i) => (
                                        <li key={i} className={styles.items}>
                                            <Image src={Checkbox} alt="domain" />
                                            {e}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={styles.cta}>
                                <CTAGroupLight/>
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </section>
    )
}