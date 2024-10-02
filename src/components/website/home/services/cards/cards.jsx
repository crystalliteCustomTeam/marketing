"use client"
// Css
import style from "./cards.module.css"
// React
import { useEffect, useState } from "react"

export default function Cards() {
    const [data, setData] = useState([])

    const getDataHandle = async () => {
        const response = await fetch("/home/cards.json")
        const result = await response.json()
        setData(result)
    }

    useEffect(() => {
        getDataHandle()
    }, [setData])

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
                            dangerouslySetInnerHTML={{ __html: `<a href=${ctaLink}>${cta}</a>` }}
                        />
                    </div>
                ))
            }
        </div>
    )
}