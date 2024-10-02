// Css
import style from "./services.module.css"
// Components
import Cards from "./cards/cards"

export default function Services() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>What we do!</h2>
                        <p className={style.para}>Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.</p>
                        <a className={style.link} href="/">Explore</a>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}