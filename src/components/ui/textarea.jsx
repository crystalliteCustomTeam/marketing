import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, theme, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `flex min-h-[100px] resize-none w-full rounded-md border ${theme == "dark" ? "border-[#1F2B48]" : ""} bg-transparent px-3 py-2 ${theme == "dark" ? "text-white" : ""} ${theme == "dark" ? "placeholder:text-[#4F5458]" : ""} text-[16px] focus-visible:border-2 focus-visible:outline-none focus-within:border-pink disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
