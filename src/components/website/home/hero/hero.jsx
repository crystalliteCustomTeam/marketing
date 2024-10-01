// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Stars from "media/home/hero/4.6-rating.png"
// Components
import { CTAGroupDark } from "@/components"
import Video from "./video"
import Slider from "./slider"

export default function Hero() {
    return (
        <section>
            <div className={style.root}>
                <Video />
                <div className="container">
                    <div>
                        <h1 className={style.title}>
                            Award Winning <br /> Book Marketing <br /> Services!
                        </h1>
                        <p className={style.para}>
                            4.6/5.0 <Image src={Stars} alt="domain" /> 15+ Businesses, 35+ Happy clients.
                        </p>
                        <div className={style.cta}>
                            <CTAGroupDark />
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}