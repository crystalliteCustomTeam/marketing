// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/tv-interviews/hero-bg.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill={true} className={style.bg} />
                    <div className="container">
                        <div>
                            <h1 className={style.title}>
                            Tap Into TV Interviews Services to Boost Your Results!
                            </h1>
                            <p className={style.para}>
                            Keep your audience captivated and steadily guide them toward a purchase with targeted TV Interview services.
                            </p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}