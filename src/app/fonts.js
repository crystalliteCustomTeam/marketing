// Next
import { DM_Serif_Display as FontMono } from "next/font/google"
import localFont from "next/font/local"

const fontSans = localFont({
    src: [{
        path: "./fonts/Satoshi-Variable.ttf",
        weight: "400",
        style: "normal",
    }],
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400",
    style: ["normal"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

export { fontSans, fontMono }