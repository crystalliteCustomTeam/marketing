// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const Publishing = dynamic(() => import("./publishing/publishing"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const BestSellers = dynamic(() => import("./best-sellers/best-sellers"));
const Solutions = dynamic(() => import("./solutions/solutions"));
const Statistics = dynamic(() => import("./statistics/statistics"));
export {
  Hero,
  Publishing,
  ConvertTypes,
  BestSellers,
  Solutions,
  Statistics
};
