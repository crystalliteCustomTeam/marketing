// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/smm-follower-&-likes/icons/1.png"
import Two from "media/smm-follower-&-likes/icons/2.png"
import Three from "media/smm-follower-&-likes/icons/3.png"
import Four from "media/smm-follower-&-likes/icons/4.png"
import Five from "media/smm-follower-&-likes/icons/5.png"
import Six from "media/smm-follower-&-likes/icons/6.png"

const data = [
    {
        img: One,
        title: "Social Media Strategy",
        para: "Control the digital narrative, improve online visibility, and build trust with reputation management solutions designed for businesses of all sizes."
    },
    {
        img: Two,
        title: "Social Media Management",
        para: "Earn more positive online reviews, remove negative reviews that interfere with your brand’s online reputation, and improve trust in your brand with cutting-edge review management solutions."
    },
    {
        img: Three,
        title: "Management & Listening",
        para: "Identify current and emerging threats, streamline communications, and recover quickly with customized crisis management solutions."
    },
    {
        img: Four,
        title: "Social Selling",
        para: "Spot problems before they harm your business prospects with proactive 24/7 business reputation monitoring solutions designed for your needs."
    },
    {
        img: Five,
        title: "Analysis & ROI Modeling",
        para: "Remove harmful content and information that has the potential to damage your hard-earned online reputation."
    },
    {
        img: Six,
        title: "Paid Social Advertising",
        para: "Develop a visible, authoritative, and influential brand with comprehensive business branding services."
    }
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ img, title, para }, i) => (
                    <div key={i} className={`${style.cards} group`}>
                        <Image src={img} alt="domain" className="group-hover:brightness-0 group-hover:invert" />
                        <h3 className={`${style.title} group-hover:text-white`}>
                            {title}
                        </h3>
                        <p className={`${style.para} group-hover:text-white`}>
                            {para}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}