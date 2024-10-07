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
                    <div className="text-center lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[20px] md:text-base text-sm leading-tight font-medium text-[#60677F] font-manrope">Clutch Average Review Rating: <span className="text-[#1B1B1D]">4.9 out of 5</span> <span className="text-[#FF0000]">★★★★★</span> based on <span className="text-[#1B1B1D]">20 reviews</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
};