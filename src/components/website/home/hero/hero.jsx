// Next
import Image from "next/image"
import dynamic from "next/dynamic"
// Css
import style from "./hero.module.css"
// Media
import Stars from "media/home/hero/4.6-rating.png"
// Components
import { CTAGroupDark } from "@/components"
const Video = dynamic(() => import("./video/video"))
const Slider = dynamic(() => import("./slider/slider"))

export default function Hero() {
    return (
        <section>
            <div className={style.root}>
                <Video />
                <div className="container">
                    <div>
                        <h1 className={style.title}>
                            Award Winning <br className="hidden lg:block" /> Book Marketing <br className="hidden lg:block" /> Services!
                        </h1>
                        <p className={style.para}>
                            4.6/5.0 <Image src={Stars} alt="domain" /> <span className="hidden sm:block">15+ Businesses, 35+ Happy clients.</span>
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