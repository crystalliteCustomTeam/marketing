// Components
import { FrontEndForm, MobileRender } from "@/components"
// Media
import Book from "media/home/contact-book.png"
// Next
import Image from "next/image"
// Css
import style from "./contact.module.css"

export default function contact() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <Image src={Book} alt="domain" className={style.banner} />
                </MobileRender>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>We would love to hear from you!</h2>
                        <p className={style.para}>We are known for our writing skills that help you attract multiple readers. Our professional e-book writers create magic with the words. Take a look:</p>
                        <FrontEndForm label={false} theme="dark" />
                    </div>
                </div>
            </div>
        </section>
    )
}