// Css
import styles from "./our-customers.module.css"
import Testimonials from "./testimonials/testimonials"

export default function OurCustomers() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Listen to what our customers say!</h2>
                        <p className={styles.para}>When clients engage our services, we become their strategic technology partner. Our teams help refine the business strategy and drive product marketing to achieve commercial goals.</p>
                    </div>
                    <Testimonials/>
                </div>
            </div>
        </section>
    )
};