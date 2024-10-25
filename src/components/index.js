"use client"
// Next
import dynamic from "next/dynamic"

import { NextButton, PrevButton, usePrevNextButtons } from "./sliders/sliderarrows/sliderarrows"
const AutoScrollSlider = dynamic(() => import("./sliders/autoscroll/autoscroll"), { ssr: false })
const AutoPlaySlider = dynamic(() => import("./sliders/autoplay/autoplay"), { ssr: false })
import Counter from "./Counter"
import FrontEndForm from "./FrontEndForm"
import { CTA } from "./cta/cta"
import { CTAGroupDark } from "./cta/ctaGroupDark"
import { CTAGroupLight } from "./cta/ctaGroupLight"
import { CTAGroupReviews } from "./cta/ctaGroupReviews"
const Fancybox = dynamic(() => import("./fancyBox/fancyBox"), { ssr: false })
const Popup = dynamic(() => import("./website/popup/popup"), { ssr: false })
import Awards from "./website/awards/awards"
import WhyChoose from "./website/why-choose/why-choose"
import Reviews from "./website/reviews/reviews"
import TrustedClients from "./website/trusted-clients/trusted-clients"
import Traditional from "./website/traditional/traditional"
import Banner1 from "./website/banner-cta/banner-cta"
const Header = dynamic(() => import("./website/header/header"), { ssr: false })
const Footer = dynamic(() => import("./website/footer/footer"), { ssr: false })


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
  Banner1,
  Fancybox,
  Popup
}
