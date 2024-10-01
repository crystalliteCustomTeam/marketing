"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
// Next
import Image from "next/image"
// Css
import style from "./slider.module.css"
// Media
import One from "media/home/hero/awards/1.svg"
import Two from "media/home/hero/awards/2.svg"
import Three from "media/home/hero/awards/3.svg"
import Four from "media/home/hero/awards/4.svg"
import Five from "media/home/hero/awards/5.svg"
import Six from "media/home/hero/awards/6.svg"
import Seven from "media/home/hero/awards/7.svg"

export default function Slider({ direction = "forward" }) {
    const plugins = [
        AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false, direction })
    ]

    const [emblaRef] = useEmblaCarousel({ align: "center", dragFree: true, loop: true }, plugins)

    return (
        <div className={style.root} ref={emblaRef}>
            <div className={style.embla}>
                {
                    [One, Two, Three, Four, Five, Six, Seven, One, Two, Three, Four, Five, Six, Seven].map((e, i) => (
                        <div key={i} className="grow-0 shrink-0 basis-auto min-w-0 pl-[50px]">
                            <Image src={e} alt="domain" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}