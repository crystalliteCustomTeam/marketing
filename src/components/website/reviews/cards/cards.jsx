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
import PlayIcon from "media/icons/playIcon.png"
// Components 
import { CTAGroupReviews, Fancybox, NextButton, PrevButton, usePrevNextButtons } from "@/components"
// Next
import Image from "next/image"

const data1 = [
    [Client1],
    [Client2],
    [Client3],
    [Client1],
    [Client2],
    [Client3]
]

const data2 = [
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
]

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
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
                className="flex touch-pan-y ml-[calc(1rem_*_-1)]"
            >
                {
                    data1.map(([img], i) => (
                        <div key={i} className={styles.embla__slide}>
                            <a data-fancybox="gallery" href="https://vimeo.com/1015023376">
                                <Image src={img} alt="domain" placeholder="blur" />
                                <Image src={PlayIcon} alt="domain" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            </a>
                        </div>
                    ))
                }
            </Fancybox>
            <div className={styles.embla_thumbs} ref={emblaThumbsRef}>
                <div className={styles.embla_thumbs__container}>
                    {
                        data2.map(([desc, name, position], i) => (
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