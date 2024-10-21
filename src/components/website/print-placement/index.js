// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const OneRoof = dynamic(() => import("./one-roof/one-roof"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const Capabilities = dynamic(() => import("./capabilities/capabilities"));
const Possibilities = dynamic(() => import("./possibilities/possibilities"));
const Narratives = dynamic(() => import("./narratives/narratives"));
export {
  Hero,
  OneRoof,
  ConvertTypes,
  Capabilities,
  Possibilities,
  Narratives
};
