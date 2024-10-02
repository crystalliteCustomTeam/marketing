// Next
import Link from "next/link"
// Components
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/shadcnui"
import { CTA } from "@/components"
// React
import { useState } from "react"
// Radix
import { CaretRightIcon } from "@radix-ui/react-icons"

const mainMenu = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/"],
    ["Portfolio", "/genre"],
    ["Contact", "/"]
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
        href: "/"
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
                <SheetTrigger className="inline-flex flex-col gap-2 ml-auto">
                    <span className="block w-[35px] h-[3px] bg-white"></span>
                    <span className="block w-[35px] h-[3px] bg-white"></span>
                    <span className="block w-[35px] h-[3px] bg-white"></span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="hidden">
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <ul>
                        {
                            mainMenu.map(([text, link], i) => (
                                text === "Services" ? (
                                    <div key={i}>
                                        <Sheet>
                                            <SheetTrigger>
                                                <span>Services</span>
                                                <CaretRightIcon />
                                            </SheetTrigger>
                                            <SheetContent>
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
                    <CTA bg="!text-white" />
                </SheetContent>
            </Sheet>
        </>
    );
}