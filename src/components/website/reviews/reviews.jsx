// Next
import dynamic from "next/dynamic"
// Css
import styles from "./reviews.module.css"
// Components
const Cards = dynamic(() => import("./cards/cards"))

export default function OurCustomers() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Listen to what our customers say!</h2>
                        <p className={styles.para}>When clients engage our services, we become their strategic technology partner. Our teams help refine the business strategy and drive product marketing to achieve commercial goals.</p>
                    </div>
                    <Cards/>
                    <div className={styles.rating}>
                        <p className={styles.para2}>Clutch Average Review Rating: <span className={styles.paraDark}>4.9 out of 5</span> <span className={styles.stars}>★★★★★</span> based on <span className={styles.paraDark}>20 reviews</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
};