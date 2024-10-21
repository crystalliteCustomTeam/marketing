// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const LatestInterviews = dynamic(() =>
  import("./latest-interviews/latest-interviews")
);
const ConvertType = dynamic(() => import("./convert-types/convert-types"));
const TrendsInterview = dynamic(() =>
  import("./trends-interview/trends-interview")
);
const Solutions = dynamic(() => import("./solutions/solutions"));
const TvPlacement = dynamic(() => import("./tv-placement/tv-placement"));
export {
  Hero,
  LatestInterviews,
  ConvertType,
  TrendsInterview,
  Solutions,
  TvPlacement,
};
