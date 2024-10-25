// Next
import Image from "next/image"
// Media
import Screens from "media/home/sessions.png"
import Checkbox from "media/home/checkbox-pink.svg"
import Camera from "media/home/vcr-camera.png"
// Css
import style from "./sessions.module.css"
// Components
import { CTA } from "@/components"

const data = ["Segments Chat", "Breakout Rooms", "Screen Sharing", "Opinion Polls"]

export default function Sessions() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Camera} alt="domain" className={style.camera} />
                <div className="container">
                    <div className={style._flex}>
                        <div className={style.left}>
                            <h2 className={style.title}>Live Session</h2>
                            <p className={style.para}>LiveSession helps product teams analyze users’ behavior, improve UX, find bugs, and increase conversion rates using session replays, and event-based product analytics.</p>
                            <ul className={style.lists}>
                                {
                                    data.map((e, i) => (
                                        <li key={i} className={style.items}>
                                            <Image src={Checkbox} alt="domain" />
                                            {e}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={style.cta}>
                                <CTA icon={false} text="Learn More" css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" />
                                <CTA icon="call" css="bg-transparent border-2 border-white hover:text-pink hover:border-pink [&>img]:brightness-0 [&>img]:invert [&:hover>img]:invert-0 [&:hover>img]:brightness-[inherit]" text="(833) 0001 - 2222" />
                            </div>
                        </div>
                        <div>
                            <Image src={Screens} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}