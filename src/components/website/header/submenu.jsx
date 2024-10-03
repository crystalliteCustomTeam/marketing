// Shadcnui
import { NavigationMenuItem, NavigationMenuLink } from "@/components/shadcnui"
// Next
import Link from "next/link"

const servicesOne = [
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
    }
]

const servicesTwo = [
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
    }
]

const servicesThree = [
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
    }
]

const servicesFour = [
    {
        text: "Paid Ad Campaigns",
        href: "/",
    },
    {
        text: "Google Knowledge Panel",
        href: "/",
    }
]

export default function Submenu() {
    return (
        <div className="grid grid-cols-4 gap-3 text-black font-mono">
            <div>
                <ul>
                    {servicesOne.map(({ text, href }) => (
                        <NavigationMenuItem key={text}>
                            <Link href={href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {text}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {servicesTwo.map(({ text, href }) => (
                        <NavigationMenuItem key={text}>
                            <Link href={href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {text}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {servicesThree.map(({ text, href }) => (
                        <NavigationMenuItem key={text}>
                            <Link href={href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {text}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {servicesFour.map(({ text, href }) => (
                        <NavigationMenuItem key={text}>
                            <Link href={href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {text}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </ul>
            </div>
        </div>
    )
}
