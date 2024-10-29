// Next
import dynamic from "next/dynamic"
// Components
const Slider = dynamic(() => import('./slider/slider'))
// Css
import style from "./awards.module.css"

export default function Awards() {
    return (
        <section>
            <div className={style.root}>
                <div className={style.content}>
                    <h2 className={style.title}>
                        Awards that validate <br className="hidden lg:block" /> our impactful Book <br className="hidden lg:block" /> Marketing solutions!
                    </h2>
                    <p className={style.para}>
                        We have earned awards and recognition for our quality-first approach.
                    </p>
                </div>
                <Slider />
            </div>
        </section>
    )
}
