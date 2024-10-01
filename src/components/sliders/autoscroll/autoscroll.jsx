"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
// Css
import style from "./autoscroll.module.css"

export default function AutoScrollSlider({ direction = "forward", children }) {
    const plugins = [
        AutoScroll({ playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false, direction })
    ]

    const [emblaRef] = useEmblaCarousel({ align: "center", dragFree: true, loop: true }, plugins)

    return (
        <div className={style.root} ref={emblaRef}>
            <div className={style.embla}>
                {children}
            </div>
        </div>
    )
}