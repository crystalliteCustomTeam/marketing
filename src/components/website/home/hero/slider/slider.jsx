// Next
import Image from "next/image"
// Media
import One from "media/home/hero/awards/1.svg"
import Two from "media/home/hero/awards/2.svg"
import Three from "media/home/hero/awards/3.svg"
import Four from "media/home/hero/awards/4.svg"
import Five from "media/home/hero/awards/5.svg"
import Six from "media/home/hero/awards/6.svg"
import Seven from "media/home/hero/awards/7.svg"
// Components
import { AutoScrollSlider } from "@/components"
// Css
import style from "./slider.module.css"

export default function Slider() {
    return (
        <AutoScrollSlider
            wrapperCss="overflow-hidden mt-[60px] mb-[40px]"
            emblaWrapper="flex [margin-left:calc(50px_*_-1)] items-center"
        >
            {
                [One, Two, Three, Four, Five, Six, Seven, One, Two, Three, Four, Five, Six, Seven].map((e, i) => (
                    <div key={i} className={style.slides}>
                        <Image src={e} alt="domain" className="h-[50px] sm:h-auto" />
                    </div>
                ))
            }
        </AutoScrollSlider>
    )
}