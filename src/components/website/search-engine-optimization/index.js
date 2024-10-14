// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const SeoAgencies = dynamic(() => import("./seo-agencies/seo-agencies"));
const Results = dynamic(() => import("./results/results"));
const Process = dynamic(() => import("./process/process"));
const WeAreDifferent = dynamic(() =>
  import("./we-are-different/we-are-different")
);

export { Hero, ConvertTypes, SeoAgencies, Results, Process, WeAreDifferent };
