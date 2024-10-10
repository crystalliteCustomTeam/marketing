// Next
import dynamic from "next/dynamic"

const AutoScrollSlider = dynamic(() => import("./sliders/autoscroll/autoscroll"))
const AutoPlaySlider = dynamic(() => import("./sliders/autoplay/autoplay"))
import { NextButton, PrevButton, usePrevNextButtons } from "./sliders/sliderarrows/sliderarrows"

import { CTA } from "./CTA/CTA"
import { CTAGroupDark } from "./CTA/CTAGroupDark"
import { CTAGroupLight } from "./CTA/CTAGroupLight"
import { CTAGroupReviews } from "./CTA/CTAGroupReviews"

import FrontEndForm from "./FrontEndForm"


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
  NextButton,
  PrevButton,
  usePrevNextButtons,
  Footer,
  FrontEndForm
}