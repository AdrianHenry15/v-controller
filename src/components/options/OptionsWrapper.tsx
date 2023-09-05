import React from "react"
import { BsChevronRight } from "react-icons/bs"

interface OptionsWrapperProps {
  children: React.ReactNode
  title: string
  subtext?: string
  onClick?: (mainOwner: boolean) => void
}

const OptionsWrapper = (props: OptionsWrapperProps) => {
  return (
    <div className="py-4 flex items-center">
      <div className="w-full">
        {/* ICON AND TITLE */}
        <div className="flex items-center justify-between">
          <div className="flex">
            {/* ICON */}
            {props.children}
            {/* TITLE */}
            <span className="text-sm">{props.title}</span>
          </div>
          <BsChevronRight size="25px" />
        </div>
        {/* SUBTITLE */}
        <span className="pl-10 text-xs font-thin">{props.subtext}</span>
      </div>
    </div>
  )
}

export default OptionsWrapper
