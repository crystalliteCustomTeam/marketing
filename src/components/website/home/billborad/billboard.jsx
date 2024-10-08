// Next
import Image from "next/image";
// Media
import Banner from "media/home/billboard/banner_bg.png"
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./billboard.module.css"

export default function Billboard() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Banner} alt="banner_bg" draggable={false} className={styles.banner} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.card}>
                            <h2 className={styles.title}>Billboard in Times Square, New York</h2>
                            <p className={styles.para}>Times Square, a major tourist attraction known for  its iconic outdoor advertising, giant billboards, and digital displays,  makes it one of the world's most photographed landmarks</p>
                            <div className={styles.opinion}>
                                {
                                    [
                                        [
                                            "90%",
                                            "Public opinion of Times SQ - 90% consider TSQ as the most recognizable part of NYC."
                                        ],
                                        [
                                            "243K+",
                                            "Daily Social Mentions - Over 243K+ people post about Times Square on social media daily."
                                        ],
                                        [
                                            "286K+",
                                            "Average Daily Pedestrian Count -  Over 286K+ pedestrians passing through daily."
                                        ],
                                    ].map(([title, desc], i) => (
                                        <div key={i}>
                                            <h4 className={styles.counter}>{title}</h4>
                                            <p className={styles.desc}>{desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}