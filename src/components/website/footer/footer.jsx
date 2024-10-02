// Next
import Link from "next/link"
import Image from "next/image"
// Css
import styles from "./footer.module.css"
// Media
import Logo from "media/footer/logo.svg"
import Clutch from "media/footer/review-clutch.png"
import PME from "media/footer/review-pme.png"
import City1 from "media/footer/city-lisbon-light.png"
import City2 from "media/footer/city-london-light.png"
import City3 from "media/footer/city-milan-light.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Footer() {
    return (
        <footer className={styles.__root}>
            <div className="contaienr">
                <div className={styles.__grid}>
                    <div className={styles.__leftGrid}>
                        <Link href="/">
                            <Image src={Logo} alt="logo" />
                        </Link>
                        <div className={styles.__content}>
                            <h2>Let’s Talk About Your Project!</h2>
                            <div className={styles.__cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                        <div className={styles.__reviewsLogos}>
                            <Image src={Clutch} alt="icons" loading="lazy" />
                            <Image src={PME} alt="icons" loading="lazy" />
                        </div>
                    </div>
                    <div className={styles.__rightGrid}>
                        {
                            [
                                [
                                    City1,
                                    "USA, LA (HQ)",
                                    "R. Adriano C. de Oliveira 4A, 1600-312",
                                    "+1(555)255-5555",
                                    "abc@bookmarketing.com"
                                ],
                                [
                                    City2,
                                    "LONDON",
                                    "36 Wharf Road, N1 7GR",
                                    "+1(555)255-5555",
                                    "abc@bookmarketing.com"
                                ],
                                [
                                    City3,
                                    "USA, NYC",
                                    "36 Wharf Road, N1 7GR",
                                    "+1(555)255-5555",
                                    "abc@bookmarketing.com"
                                ],
                            ].map(([img, title, address, num, mail], i) => (
                                <div key={i} className={styles.__locationCard}>
                                    <Image src={img} alt="cities" loading="lazy" />
                                    <div key={i} className="text-white">
                                        <h4>{title}</h4>
                                        <span className="block">Address: {address}</span>
                                        <span className="block">Phone: <Link href="/">{num}</Link></span>
                                        <span className="block">Email: <Link href="/">{mail}</Link></span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
};