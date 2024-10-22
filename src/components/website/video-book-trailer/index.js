// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const Video = dynamic(() => import("./video/video"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const Publishing = dynamic(() => import("./publishing/publishing"));
const Solutions = dynamic(() => import("./solutions/solutions"));
const BestSellers = dynamic(() => import("./best-sellers/best-sellers"));
export {
  Hero,
  Video,
  ConvertTypes,
  Publishing,
  Solutions,
  BestSellers
};
