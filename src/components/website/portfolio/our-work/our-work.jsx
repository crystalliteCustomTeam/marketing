"use client"
// Css
import style from "./our-work.module.css"
// React
import { useEffect, useState } from "react"
// Next
import Image from "next/image"

export default function OurWork() {
    const [data, setData] = useState([])

    const getDataHandle = async () => {
        try {
            const response = await fetch("/portfolio/our-work/data.json")
            if (response.status !== 200) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        getDataHandle()
    }, [setData])

    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] leading-none font-mono mb-3">
                            Our Work.
                        </h2>
                        <p className="text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-normal text-navy">
                            A collection of our favorite work, showcasing the innovative solutions we've delivered.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 3xl:gap-10">
                        {data && data.map(({ img, name, excerpt, link, category, service }, i) => (
                            <div key={i} className="group hover:p-5 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer hover:bg-[#E4EBEF] h-[535px] [boxShadow:_0px_10px_30px_rgba(0,_0,_0,_0.07)]">
                                <Image src={img} width={500} height={500} alt="domain" className="h-full group-hover:h-[350px] object-cover object-top transition-all duration-300 group-hover:rounded-xl group-hover:[boxShadow:_0px_10px_30px_rgba(0,_0,_0,_0.07)] w-full" />
                                <div className="mb-3 mt-5 flex items-center justify-between">
                                    <h3 className="text-[25px] leading-none font-mono opacity-0 transition-all duration-300 group-hover:opacity-100">{name}</h3>
                                    <div dangerouslySetInnerHTML={{
                                        __html: `<a href="${link}">
                                            <img src="portfolio/our-work/arrow.png" alt="domain" width="31" height="32" />
                                        </a>` }} />
                                </div>
                                <p className="text-[18px] leading-normal text-navy opacity-0 transition-all duration-300 group-hover:opacity-100 max-w-[260px]">{excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}