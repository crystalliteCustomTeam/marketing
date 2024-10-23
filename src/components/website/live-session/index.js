// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Score = dynamic(() => import("./score/score"))
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"))
const Sessions = dynamic(() => import("./sessions/sessions"))
export { Hero, Score, ConvertTypes, Sessions }
