// Next
import dynamic from "next/dynamic"
// Components
import { CTAGroupLight } from "@/components"
const Slider = dynamic(() => import("./slider/slider"))
// Css
import style from "./published-books.module.css"

export default function PublishedBooks() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <div>
                            <h2 className={style.title}>Our published book!</h2>
                            <p className={style.para}>We are known for our writing skills that help you attract multiple readers. Our professional e-book writers create magic with the words. Take a look:</p>
                        </div>
                        <div className={style.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}