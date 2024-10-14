"use client"
// Css
import style from "./cards.module.css"
// React
import { useEffect, useState } from "react"
// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import Promo from "media/home/services/promo.png"
// Json
import data from "./cards.json"

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ title, para, cta, ctaLink }, i) => (
                    <div key={i} className={`${style.cards} group`}>
                        <h3 className={`${style.title} group-hover:text-white`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={`${style.para} group-hover:text-white`}>
                            {para}
                        </p>
                        <div className={style.cta}
                            dangerouslySetInnerHTML={{
                                __html: `<a href=${ctaLink}>
                                ${cta}
                                <img src="/icons/right-chevron.svg" width="8" height="13" alt="domain" />
                            </a>` }}
                        />
                    </div>
                ))
            }
            <div className={style.promo}>
                <div>
                    <h3 className={style.title}>
                        Estimate Your Book Marketing <br className="hidden sm:block" />  Project’s Cost Now!
                    </h3>
                    <p className={style.para}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...
                    </p>
                    <CTA css="bg-white text-purple font-manrope font-medium capitalize [boxShadow:0px_5px_15px_rgba(15,_23,_42,_0.1)] hover:bg-black hover:border hover:border-white hover:text-white" text="Let’s Talk!" icon="chat-pink" />
                </div>
                <Image src={Promo} alt="domain" />
            </div>
        </div>
    )
}