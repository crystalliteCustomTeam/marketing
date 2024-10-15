// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));

export { Hero };
