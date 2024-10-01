// Css
import style from "./video.module.css"

export default function Video() {
    return (
        <video
            tabIndex="0"
            preload="auto"
            loop
            autoPlay
            muted
            playsInline
            aria-label="video"
            className={style.video}
        >
            <source src="/home/hero/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}