// Css
import style from "./video.module.css"

export default function Video() {
    return (
        <video
            tabIndex="0"
            preload="none"
            loop
            autoPlay
            muted
            playsInline
            aria-label="video"
            className={style.video}
        >
            <source src="https://player.vimeo.com/progressive_redirect/playback/1024126167/rendition/720p/file.mp4?loc=external&log_user=0&signature=f734c07c75502b8dda0b544a09f363fac53c0b1765e8e5b25958e5c83a93e854" type="video/mp4" />
        </video>

    )
}