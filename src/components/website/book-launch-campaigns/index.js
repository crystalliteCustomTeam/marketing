// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const Publishing = dynamic(() => import("./publishing/publishing"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
export {
  Hero,
  Publishing,
  ConvertTypes
};
