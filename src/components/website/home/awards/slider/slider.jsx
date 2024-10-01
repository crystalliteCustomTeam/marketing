// Components
import { AutoScrollSlider } from "@/components"
// Media
import One from "media/home/awards/1.png"
import Two from "media/home/awards/2.png"
import Three from "media/home/awards/3.png"
import Four from "media/home/awards/4.png"
// Next
import Image from "next/image"
// Css
import style from "./slider.module.css"

export default function Slider() {
    return (
        <div className={style.root}>
            <AutoScrollSlider wrapperCss="overflow-visible" emblaWrapper="flex [margin-left:calc(0_*_-1)]" >
                {
                    [
                        {
                            img: One,
                            title: "INC. 5000",
                            para: "America's Fastest Growing Companies"
                        },
                        {
                            img: Two,
                            title: "Clutch",
                            para: "Top 1000 Companies"
                        },
                        {
                            img: Three,
                            title: "Dubai’s Best",
                            para: "Dubai’s Best Growing Companies"
                        },
                        {
                            img: Four,
                            title: "Horizon",
                            para: "Horizon Interactive Gold Winner Awards"
                        },
                        {
                            img: One,
                            title: "INC. 5000",
                            para: "America's Fastest Growing Companies"
                        },
                        {
                            img: Two,
                            title: "Clutch",
                            para: "Top 1000 Companies"
                        },
                        {
                            img: Three,
                            title: "Dubai’s Best",
                            para: "Dubai’s Best Growing Companies"
                        },
                        {
                            img: Four,
                            title: "Horizon",
                            para: "Horizon Interactive Gold Winner Awards"
                        }
                    ].map(({ img, title, para }, i) => (
                        <div key={i} className={style.slides}>
                            <Image src={img} alt="domain" />
                            <h3>{title}</h3>
                            <p>{para}</p>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </div>
    )
}