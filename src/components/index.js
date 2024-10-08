// Next
import dynamic from "next/dynamic"

const AutoScrollSlider = dynamic(() => import("./sliders/autoscroll/autoscroll"))
const AutoPlaySlider = dynamic(() => import("./sliders/autoplay/autoplay"))

import { CTA } from "./CTA/CTA"
import { CTAGroupDark } from "./CTA/CTAGroupDark"
import { CTAGroupLight } from "./CTA/CTAGroupLight"
import { CTAGroupReviews } from "./CTA/CTAGroupReview"

const Header = dynamic(() => import("./website/header/header"))
const Footer = dynamic(() => import("./website/footer/footer"))

export {
  Header,
  CTA,
  CTAGroupDark,
  CTAGroupLight,
  CTAGroupReviews,
  AutoScrollSlider,
  AutoPlaySlider,
  Footer,
}