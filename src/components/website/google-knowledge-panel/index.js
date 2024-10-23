// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const KeywordResearch = dynamic(() =>
  import("./keyword-research/keyword-research")
)
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"))
const LogicalProcess = dynamic(() =>
  import("./logical-process/logical-process")
)
const Solutions = dynamic(() => import("./solutions/solutions"))
const IncreasePresence = dynamic(() =>
  import("./increase-presence/increase-presence")
)
const ResearchImportant = dynamic(() =>
  import("./research-important/research-important")
)
export {
  Hero,
  KeywordResearch,
  ConvertTypes,
  LogicalProcess,
  Solutions,
  IncreasePresence,
  ResearchImportant,
}
