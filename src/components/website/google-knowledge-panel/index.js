// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const KeywordResearch = dynamic(() => import("./keyword-research/keyword-research"));
export {
  Hero,
  KeywordResearch
};
