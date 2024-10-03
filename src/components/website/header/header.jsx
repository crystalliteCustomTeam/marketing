"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/logo.png"
// Components
import Navlist from "./navlist"
import { CTA } from "@/components"
import MobileNav from "./mobilenav"
// React
import { useEffect, useState } from "react"

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
            <div className="absolute left-0 right-0 top-0 z-50">
                <div className="relative">
                    <div className="container">
                        <div className="flex items-center gap-5 py-8">
                            <Link href="/" className="block mr-auto">
                                <Image src={Logo} alt="Logo" />
                            </Link>
                            {!isMobile ?
                                <div className="hidden xl:block xl:mr-[150px]">
                                    <Navlist />
                                </div>
                                :
                                <div className="flex items-center xl:hidden">
                                    <MobileNav />
                                </div>
                            }
                            <div className="hidden sm:block text-white">
                                <CTA />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}