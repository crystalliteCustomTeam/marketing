// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Awards = dynamic(() => import("./awards/awards"))
import Services from "./services/services"
const TrustedClients = dynamic(() => import("./trusted-clients/trusted-clients"))
const OurCustomers = dynamic(() => import("./our-customers/our-customers"))

export {
    Hero,
    Awards,
    Services,
    TrustedClients,
    OurCustomers
}