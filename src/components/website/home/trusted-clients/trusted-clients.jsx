// Css
import styles from "./trusted-clients.module.css"
// Components
import Logos from "./logos/logos"

export default function TrustedClients() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__content}>
                        <h2 className={styles.title}>Our trusted clients!</h2>
                    </div>
                    <Logos />
                </div>
            </div>
        </section>
    )
}
