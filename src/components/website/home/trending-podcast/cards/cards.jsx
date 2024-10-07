// Components
import { AutoPlaySlider, AutoScrollSlider } from "@/components"
// Css
import style from "./cards.module.css"
// Media
import One from "media/home/trending-podcast/1.png"
import Two from "media/home/trending-podcast/2.png"
import Three from "media/home/trending-podcast/3.png"
import Four from "media/home/trending-podcast/4.png"
import Five from "media/home/trending-podcast/5.png"
import Six from "media/home/trending-podcast/6.png"
import Play from "media/home/trending-podcast/play.png"
import Mic from "media/home/trending-podcast/mic.png"
import Clock from "media/home/trending-podcast/clock.png"
import Folder from "media/home/trending-podcast/folder.png"
// Next
import Image from "next/image"
import Link from "next/link"

const data = [
    {
        img: One,
        episode: "Episode: 12",
        title: "Tech Talk: Future of Marketing",
        name: "John Smith",
        duration: "8Hr 36M",
        category: "Technology",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Two,
        episode: "Episode: 23",
        title: "Uncovering Ancient Mysteries",
        name: "Sarah Johnson",
        duration: "8Hr 36M",
        category: "History",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Three,
        episode: "Episode: 35",
        title: "Mindful Living: Finding Inner Peace",
        name: "Emily Parker",
        duration: "8Hr 36M",
        category: "Health & Wellness",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Four,
        episode: "Episode: 46",
        title: "Economic Insights: Global Markets",
        name: "David Ramirez",
        duration: "8Hr 36M",
        category: "Business & Finance",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Five,
        episode: "Episode: 73",
        title: "Uncovering Ancient Mysteries",
        name: "Sarah Johnson",
        duration: "8Hr 36M",
        category: "History",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Six,
        episode: "Episode: 54",
        title: "Mindful Living: Finding Inner Peace",
        name: "Emily Parker",
        duration: "8Hr 36M",
        category: "Health & Wellness",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    }
]

export default function Cards() {
    return (
        <AutoPlaySlider arrows={false}>
            {
                data.map(({ img, episode, title, name, duration, category, desc, cta }, i) => (
                    <div key={i} className="grow-0 shrink-0 basis-[340px] sm:basis-[500px] xl:basis-[550px] pl-4 text-white">
                        <div className="rounded-xl overflow-hidden relative">
                            <Image src={img} alt="domain" />
                            <div className="absolute left-[40px] bottom-[40px] flex w-[170px] bg-white rounded-full items-center h-[40px] gap-3">
                                <div className="w-[60px] bg-blue h-full flex items-center rounded-full justify-center">
                                    <Image src={Play} alt="domain" />
                                </div>
                                <span className="inline-block text-[14px] leading-tight font-manrope text-purple">{episode}</span>
                            </div>
                        </div>
                        <h3 className="text-[20px] sm:text-[26px] xl:text-[32px] font-mono leading-tight my-7">{title}</h3>
                        <div className="flex gap-4 sm:gap-8 pb-5 border-b-2 border-white mb-5">
                            <div className="flex items-center gap-1 sm:gap-3">
                                <Image src={Mic} alt="domain" />
                                <span className="text-[12px] sm:text-[16px] xl:text-[18px] leading-tight inline-block">{name}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-3">
                                <Image src={Clock} alt="domain" />
                                <span className="text-[12px] sm:text-[16px] xl:text-[18px] leading-tight inline-block">{duration}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-3">
                                <Image src={Folder} alt="domain" />
                                <span className="text-[12px] sm:text-[16px] xl:text-[18px] leading-tight inline-block">{category}</span>
                            </div>
                        </div>
                        <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-normal mb-5">{desc}</p>
                        <Link href="/" className="text-[14px] sm:text-[16px] xl:text-[18px] leading-tight !underline !underline-offset-8">
                            {cta}
                        </Link>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}
