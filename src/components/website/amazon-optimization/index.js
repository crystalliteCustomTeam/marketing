// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const AmazonEcommerce = dynamic(() =>
  import("./amazon-ecommerce/amazon-ecommerce")
);
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const AutomationServices = dynamic(() =>
  import("./automation-services/automation-services")
);
const ScaleUp = dynamic(() => import("./scale-up/scale-up"));
const MaximumBenefit = dynamic(() =>
  import("./maximum-benefit/maximum-benefit")
);
export {
  Hero,
  AmazonEcommerce,
  ConvertTypes,
  AutomationServices,
  ScaleUp,
  MaximumBenefit,
};
