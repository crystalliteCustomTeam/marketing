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
    }, [])

    return (
        <div className={style.root}>
            {
                data.map(({ title, para, cta, ctaLink }, i) => (
                    <div key={i} className={style.cards}>
                        <h3>{title}</h3>
                        <p>{para}</p>
                        <div dangerouslySetInnerHTML={{__html: `<a href=${ctaLink}>${cta}</a>`}} />
                    </div>
                ))
            }
        </div>
    )
}