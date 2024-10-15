// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const TrustAndCredibility = dynamic(() =>
  import("./trust-&-credibility/trust-&-credibility")
);
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const Publishing = dynamic(() => import("./publishing/publishing"));
const CreateDesign = dynamic(() => import("./create-design/create-design"));
const Campaign = dynamic(() => import("./campaign/campaign"));

export { Hero, TrustAndCredibility, ConvertTypes, Publishing, CreateDesign,Campaign };
