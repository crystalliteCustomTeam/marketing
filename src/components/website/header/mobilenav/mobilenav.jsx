// Next
import Link from "next/link"
// Components
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/shadcnui"
import { CTA } from "@/components"
// React
import { useState } from "react"
// Radix
import { CaretRightIcon } from "@radix-ui/react-icons"
// Css
import style from "./mobilenav.module.css"


const mainMenu = [
    ["Home", "/"],
    ["About", "/about-us"],
    ["Services", "/"],
    ["Portfolio", "/"],
    ["Contact", "/contact-us"]
]

const servicesMenu = [
    {
        text: "Book Launch Campaigns",
        href: "/"
    },
    {
        text: "Amazon Optimization",
        href: "/"
    },
    {
        text: "TV Interviews",
        href: "/"
    },
    {
        text: "Email Newsletter",
        href: "/"
    },
    {
        text: "Social Media Marketing",
        href: "/social-media-marketing"
    },
    {
        text: "Online Reputation Management",
        href: "/"
    },
    {
        text: "SMM Follower & Likes",
        href: "/",
    },
    {
        text: "Influencer Marketing",
        href: "/",
    },
    {
        text: "Video Book Trailer",
        href: "/",
    },
    {
        text: "Search Engine Optimization",
        href: "/",
    },
    {
        text: "Print Placement (Magazine)",
        href: "/",
    },
    {
        text: "News / Article Publishing",
        href: "/",
    },
    {
        text: "Paid Ad Campaigns",
        href: "/",
    },
    {
        text: "Google Knowledge Panel",
        href: "/",
    }
]

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className={style.toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </SheetTrigger>
                <SheetContent className={style.sheet}>
                    <SheetHeader className="hidden">
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <ul className="mb-5">
                        {
                            mainMenu.map(([text, link], i) => (
                                text === "Services" ? (
                                    <div key={i}>
                                        <Sheet>
                                            <SheetTrigger className={style.dropdown}>
                                                <span>Services</span>
                                                <CaretRightIcon />
                                            </SheetTrigger>
                                            <SheetContent className={style.submenu}>
                                                <SheetHeader className="hidden">
                                                    <SheetTitle>Title</SheetTitle>
                                                    <SheetDescription>Description</SheetDescription>
                                                </SheetHeader>
                                                <ul>
                                                    {
                                                        servicesMenu.map(({ text, href }, i) => (
                                                            <li key={i}>
                                                                <Link onClick={() => setIsOpen(false)} href={href}>
                                                                    {text}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </SheetContent>
                                        </Sheet>
                                    </div>
                                )
                                    :
                                    (
                                        <li key={i}>
                                            <Link onClick={() => setIsOpen(false)} href={link}>
                                                {text}
                                            </Link>
                                        </li>
                                    )
                            ))
                        }
                    </ul>
                    <div>
                        <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white" />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}