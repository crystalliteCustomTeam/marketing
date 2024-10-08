"use client"
// React
import { useState, useEffect, useCallback } from "react"
// Embla
import useEmblaCarousel from "embla-carousel-react"
// CSS
import styles from "./cards.module.css"
// Media
import Client1 from "media/home/testimonials/clients/1.png"
import Client2 from "media/home/testimonials/clients/2.png"
import Client3 from "media/home/testimonials/clients/3.png"
// Components 
import { NextButton, PrevButton, usePrevNextButtons } from "@/components/sliders/sliderarrows/sliderarrows"
import ModalVideo from "../modal-video/modal-video"
import CTAGroupReviews from "@/components/CTA/CTAGroupReview"

export default function Testimonials() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", })
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: false,
    })
    const onThumbClick = useCallback(
        (index) => {
            if (!emblaApi || !emblaThumbsApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi || !emblaThumbsApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
    }, [emblaApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()

        emblaApi.on("select", onSelect).on("reInit", onSelect)
    }, [emblaApi, onSelect])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {
                    [
                        [Client1],
                        [Client2],
                        [Client3],
                        [Client1],
                        [Client2],
                        [Client3]
                    ].map(([img], i) => (
                        <div key={i} className={styles.embla__slide}>
                            <ModalVideo thumbnailImage={img} videoSource="https://player.vimeo.com/progressive_redirect/playback/1015023376/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8b5070187e58e4b1ab884eaaa7e559eb0a1da9950479c229fab3d85e830fa455" />
                        </div>
                    ))
                }
            </div>
            <div className={styles.embla_thumbs} ref={emblaThumbsRef}>
                <div className={styles.embla_thumbs__container}>
                    {
                        [
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                            [
                                "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
                                "Amber Wanner",
                                "CEO, Vette, Inc."
                            ],
                        ].map(([desc, name, position], i) => (
                            <div
                                key={i}
                                className={`${styles.embla_thumbs__slide}`}
                            >
                                <div onClick={() => onThumbClick(i)} className={styles.descCard}>
                                    <div className={styles.__grid}>
                                        <div className={styles.__leftGrid}>
                                            <p className={styles.desc}>{desc}</p>
                                            <span className={styles.clientName}>{name}</span>
                                            <span className={styles.position}>{position}</span>
                                        </div>
                                        <div className={styles.__rightGrid}>
                                            <div className={styles.cta}>
                                                <CTAGroupReviews />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.arrowsRoot}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} classes="sm:absolute sm:-left-0" />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} classes="sm:absolute sm:-right-0" />
                </div>
                <div className={styles.cta2}>
                    <CTAGroupReviews />
                </div>
            </div>
        </div>
    )
};