"use client"
// React
import { useState } from "react"
// Next
import Image from "next/image";
// Media
import PlayIcon from "media/icons/playIcon.svg"
// CN
import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger 
} from "@/components/shadcnui";
// CSS
import style from "./modal-video.module.css"

const ModalVideo = ({
    thumbnailImage,
    videoSource
}) => {
    const [isLoading, setIsLoading] = useState(true)
    const handleLoadedData = () => {
        setIsLoading(false)
    }
    return (
        <Dialog>
            <DialogTrigger>
                {thumbnailImage &&
                    <div className={style.thumbnailCard}>
                    <Image tabIndex={0} src={thumbnailImage} blurDataURL={thumbnailImage.blurDataURL} alt="clients" />
                    <div className={style.playIcon}>
                        <Image tabIndex={0} src={PlayIcon} alt="icon" />
                    </div>
                </div>
                }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden">Video Player</DialogTitle>
                    <DialogDescription className="relative">
                        {thumbnailImage && isLoading && (
                            <Image src={thumbnailImage} blurDataURL={thumbnailImage.blurDataURL} alt="thumbnail" />
                        )}
                        {videoSource &&
                            <video
                                tabIndex={0}
                                loop
                                autoPlay
                                muted
                                playsInline
                                preload="metadata"
                                aria-label="Video Modal"
                                className={isLoading ? 'hidden' : ''}
                                onLoadedData={handleLoadedData}>
                                <source src={videoSource} type="video/mp4" />
                            </video>
                        }
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default ModalVideo;