// Next
import Link from "next/link"
import Image from "next/image"
// Css
import styles from "./copyright.module.css"
// Media
import Facebook from "media/footer/icons/1.png"
import Linkedin from "media/footer/icons/2.png"
import Youtube from "media/footer/icons/3.png"

export default function Copyright() {
    return (
        <div className={styles.__root}>
            <div className="container">
                <div className={styles.__bottomBar}>
                    <span>© 2024 Book Marketing All Rights Reserved.</span>
                    <div className={styles.__grid}>
                        <Link href="/">Privacy policy</Link>
                        <span>|</span>
                        <Link href="/">Security</Link>
                        <span>|</span>
                        <Link href="/">Terms of service</Link>
                    </div>
                    <div className={styles.__grid2}>
                        {
                            [
                                ["/", Facebook],
                                ["/", Linkedin],
                                ["/", Youtube],
                            ].map(([link, icon], i) => (
                                <Link href={link} className={styles.__smmIcons}>
                                    <Image src={icon} alt="icons" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}