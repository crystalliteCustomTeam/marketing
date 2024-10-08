// Css
import style from "./slider.module.css"
// Components
import { AutoPlaySlider } from "@/components"
// Media
import One from "media/home/published-books/1.png"
import Two from "media/home/published-books/2.png"
import Three from "media/home/published-books/3.png"
import Four from "media/home/published-books/4.png"
import Five from "media/home/published-books/5.png"
import Six from "media/home/published-books/6.png"
// Next
import Image from "next/image"

export default function Slider() {
    return (
        <AutoPlaySlider emblaWrapper="flex [margin-left:calc(50px_*_-1)]" wrapperClasses="overflow-visible" align="center" arrows={false}>
            {
                [
                    {
                        book: One,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    },
                    {
                        book: Two,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    },
                    {
                        book: Three,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    },
                    {
                        book: Four,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    },
                    {
                        book: Five,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    },
                    {
                        book: Six,
                        title: "Book Name",
                        desc: "We are known for our writing skills that help you attract multiple readers..."
                    }
                ].map(({ book, title, desc }, i) => (
                    <div className={style.slides} key={i}>
                        <Image src={book} alt="domain" />
                        <h3 className={style.title}>{title}</h3>
                        <p className={style.para}>{desc}</p>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}