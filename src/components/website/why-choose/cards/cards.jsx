// Css
import Image from "next/image"
import styles from "./cards.module.css"

export default function Cards({ data }) {
    return (
        <div className={styles.root}>
            {
                data && data?.map((e, i) => (
                    <div key={i} className={`${styles.cards} group`}>
                        {e.icon && (<Image src={e.icon} alt="icon" priority className={`${styles.icon} group-hover:brightness-0 group-hover:invert`} />)}
                        <h3 className={`${styles.title} group-hover:text-white`}
                            dangerouslySetInnerHTML={{ __html: e.title }}
                        />
                        <p className={`${styles.para} group-hover:text-white`}>
                            {e.desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}