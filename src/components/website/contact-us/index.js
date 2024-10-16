// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Form = dynamic(() => import("./form/form"))

export {
    Hero,
    Form
}