import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, theme, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        `flex h-[50px] w-full rounded-lg border focus-visible:border-2 ${theme == "dark" ? "border-[#1F2B48]" : ""} bg-transparent px-3 py-1 text-[16px] transition-colors file:border-0 file:bg-transparent file:text-[16px]  ${theme == "dark" ? "text-white" : ""} ${theme == "dark" ? "placeholder:text-[#4F5458]" : ""} focus-visible:outline-none focus-visible:border-pink disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
