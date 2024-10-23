// Next
import dynamic from "next/dynamic"

const AutoScrollSlider = dynamic(() => import("./sliders/autoscroll/autoscroll"))
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./sliders/sliderarrows/sliderarrows"
const AutoPlaySlider = dynamic(() => import("./sliders/autoplay/autoplay"))

import Counter from "./Counter"

import FrontEndForm from "./FrontEndForm"

import { CTA } from "./cta/cta"
import { CTAGroupDark } from "./cta/ctaGroupDark"
import { CTAGroupLight } from "./cta/ctaGroupLight"
import { CTAGroupReviews } from "./cta/ctaGroupReviews"

const Awards = dynamic(() => import("./website/awards/awards"))
const WhyChoose = dynamic(() => import("./website/why-choose/why-choose"))
const Reviews = dynamic(() => import("./website/reviews/reviews"))
const TrustedClients = dynamic(() => import("./website/trusted-clients/trusted-clients"))
const Traditional = dynamic(() => import("./website/traditional/traditional"))
const Banner1 = dynamic(() => import("./website/banner-cta/banner-cta"));

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
  Counter,
  Footer,
  FrontEndForm,
  WhyChoose,
  Awards,
  Reviews,
  TrustedClients,
  Traditional,
  Banner1
}
