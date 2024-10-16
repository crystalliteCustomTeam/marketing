// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const Feedback = dynamic(() => import("./feedback/feedback"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const ControlReputation = dynamic(() =>
  import("./control-reputation/control-reputation")
);
const Solutions = dynamic(() => import("./solutions/solutions"));
const AdvancedManagment = dynamic(() =>
  import("./advanced-managment/advanced-managment")
);

export {
  Hero,
  Feedback,
  ConvertTypes,
  ControlReputation,
  Solutions,
  AdvancedManagment,
};
