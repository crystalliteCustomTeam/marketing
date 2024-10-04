// Next
import dynamic from "next/dynamic"

import AutoScrollSlider from "./sliders/autoscroll/autoscroll"
import { CTA, CTAGroupDark, CTAGroupLight } from "./CTA"
const Header = dynamic(() => import("./website/header/header"))
import Footer from "./website/footer/footer"

export { Header, CTA, CTAGroupDark, CTAGroupLight, AutoScrollSlider, Footer }