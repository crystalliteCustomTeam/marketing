// Css
import styles from "./cards.module.css"

export default function Cards() {
    return (
        <div className={styles.root}>
            {
                [

                    [
                        "Complete Ownership",
                        "You retain full ownership. We put in all the hard work. You gain all the assets with our skilled book writing assistance."
                    ],
                    [
                        "High Retention Rate",
                        "Our dedicated writer have been with us for years, providing stability and security for your book writing projects."
                    ],
                    [
                        "100% Transparency",
                        "As a trustworthy Book Marketing, We keep clients fully informed throughout the process, promoting open collaboration."
                    ],
                    [
                        "4.5/5 Average Rating",
                        "Our high ratings on Google Play and the App Store highlight our credibility as a Book Marketing company in USA."
                    ]
                ].map(([ title, para ], i) => (
                    <div key={i} className={`${styles.cards} group`}>
                        <h3 className={`${styles.title} group-hover:text-white`}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={`${styles.para} group-hover:text-white`}>
                            {para}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}