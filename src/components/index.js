// Next
import dynamic from "next/dynamic"

const AutoScrollSlider = dynamic(() => import("./sliders/autoscroll/autoscroll"))
const AutoPlaySlider = dynamic(() => import("./sliders/autoplay/autoplay"))

import { CTA, CTAGroupDark, CTAGroupLight } from "./CTA"

const Header = dynamic(() => import("./website/header/header"))
const Footer = dynamic(() => import("./website/footer/footer"))

export {
  Header,
  CTA,
  CTAGroupDark,
  CTAGroupLight,
  AutoScrollSlider,
  AutoPlaySlider,
  Footer,
}