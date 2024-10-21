// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const OneRoof = dynamic(() => import("./one-roof/one-roof"));
const ConsumerTrust = dynamic(() => import("./consumer-trust/consumer-trust"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const Solutions = dynamic(() => import("./solutions/solutions"));
const AmazonInfluencer = dynamic(() =>
  import("./amazon-influencer/amazon-influencer")
);
const SaveTime = dynamic(() => import("./save-time/save-time"));
export {
  Hero,
  OneRoof,
  ConsumerTrust,
  ConvertTypes,
  Solutions,
  AmazonInfluencer,
  SaveTime
};
