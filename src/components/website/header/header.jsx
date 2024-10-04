"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/logo.png"
// Components
import Navlist from "./navlist/navlist"
import { CTA } from "@/components"
import MobileNav from "./mobilenav/mobilenav"
// React
import { useEffect, useState } from "react"
// Shadcnui
import { NavigationMenu } from "@/components/shadcnui"
// Css
import style from "./header.module.css"

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header>
            <div className={style.root}>
                <div className="relative">
                    <NavigationMenu className={style.navbar}>
                        <div className="container">
                            <div className={style.row}>
                                <Link href="/" className={style.logo}>
                                    <Image src={Logo} alt="Logo" />
                                </Link>
                                {!isMobile ?
                                    <div className={style.navlist}>
                                        <Navlist />
                                    </div>
                                    :
                                    <div className={style.mobileNav}>
                                        <MobileNav />
                                    </div>
                                }
                                <div className={style.cta}>
                                    <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" />
                                </div>
                            </div>
                        </div>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    )
}