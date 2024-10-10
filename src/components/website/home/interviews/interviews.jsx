// Next
import Image from "next/image"
// Media
import Interview from "media/home/interviews/1.png"
import Video from "media/home/interviews/video-play.png"
// Css
import style from "./interviews.module.css"
// Components
import { CTAGroupDark } from "@/components"

export default function Interviews() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Video} alt="domain" className={style.camera} />
                <div className="container">
                    <div className={style._flex}>
                        <div className={style.left}>
                            <h2 className={style.title}>Our Best TV Interviews</h2>
                            <p className={style.para}>Book Marketing provides comprehensive ghostwriting services to aid authors in writing their books and being one step closer to being accomplished. Our book-writing experts have in-depth experience of 10+ years and are committed to meeting all your expectations and bringing your ghostwriting dream to life.</p>

                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                        <div>
                            <Image src={Interview} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}