// Next
import Link from "next/link"
// Components
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/shadcnui"


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

export default function Navlist() {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid grid-cols-4 gap-3">
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
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Portfolio
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}