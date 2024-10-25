// Css
import styles from "./cards.module.css"
// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import Promo from "media/home/services/promo.png"

const data = [
    {
        "title": "Book Launch <br class='hidden sm:block' /> Campaigns",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Social Media <br class='hidden sm:block' /> Marketing",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Video Book <br class='hidden sm:block' /> Trailer",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "News / Article <br class='hidden sm:block' /> Publishing",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Amazon <br class='hidden sm:block' /> Optimization",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Online Reputation <br class='hidden sm:block' /> Management",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Search Engine <br class='hidden sm:block' /> Optimization",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Paid Ad <br class='hidden sm:block' /> Campaigns",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "TV <br class='hidden sm:block' /> Interviews",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "SMM Follower <br class='hidden sm:block' /> & Likes",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Print Placement <br class='hidden sm:block' /> (Magazine)",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Google Knowledge <br class='hidden sm:block' /> Panel",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Email <br class='hidden sm:block' /> Newsletter",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    },
    {
        "title": "Influencer <br class='hidden sm:block' /> Marketing",
        "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
        "cta": "Read More",
        "ctaLink": "javascript:;"
    }
]

export default function Cards() {
    return (
        <div className={styles.root}>
            {
                data.map(({ title, para, cta, ctaLink }, i) => (
                    <div key={i} className={`${styles.cards} group`}>
                        <h3 className={`${styles.title} group-hover:text-white`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={`${styles.para} group-hover:text-white`}>
                            {para}
                        </p>
                        <div className={styles.cta}
                            dangerouslySetInnerHTML={{
                                __html: `<a href=${ctaLink}>
                                ${cta}
                                <img src="/icons/right-chevron.svg" width="8" height="13" alt="domain" />
                            </a>` }}
                        />
                    </div>
                ))
            }
            <div className={styles.promo}>
                <div>
                    <h3 className={styles.title}>
                        Estimate Your Book Marketing <br className="hidden sm:block" />  Project’s Cost Now!
                    </h3>
                    <p className={styles.para}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...
                    </p>
                    <CTA css="bg-white text-purple font-manrope font-medium capitalize [boxShadow:0px_5px_15px_rgba(15,_23,_42,_0.1)] hover:bg-black hover:border hover:border-white hover:text-white" text="Let’s Talk!" icon="chat-pink" />
                </div>
                <Image src={Promo} alt="domain" />
            </div>
        </div>
    )
}