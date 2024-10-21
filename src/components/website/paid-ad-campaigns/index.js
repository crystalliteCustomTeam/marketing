// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const RevenueGrowth = dynamic(() => import("./revenue-growth/revenue-growth"));
const Platforms = dynamic(() => import("./platforms/platforms"));
const AdStrategies = dynamic(() => import("./ad-strategies/ad-strategies"));
const Solutions = dynamic(() => import("./solutions/solutions"));
const NumbersSpeak = dynamic(() => import("./numbers-speak/numbers-speak"));
export {
  Hero,
  RevenueGrowth,
  Platforms,
  AdStrategies,
  Solutions,
  NumbersSpeak,
};
