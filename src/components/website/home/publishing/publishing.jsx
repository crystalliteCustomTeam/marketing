// Css
import style from "./publishing.module.css"
// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
import Newspaper from "media/home/newspaper.png"
// Components
import { CTAGroupLight } from "@/components"

const data = ["Inspection and Assessment:", "Continued Execution!", "Coherence Verified!", "Delivery"]

export default function Publishing() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Newspaper} alt="domain" className={style.img} />
                <div className="container">
                    <div className={style.grids}>
                        <div className={style.cols}>
                            <h2 className={style.title}>News / Article Publishing!</h2>
                            <p className={style.para}>Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.</p>
                            <ul className={style.lists}>
                                {
                                    data.map((e, i) => (
                                        <li key={i} className={style.items}>
                                            <Image src={Checkbox} alt="domain" />
                                            {e}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}