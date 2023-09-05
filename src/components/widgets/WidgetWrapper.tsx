import React, { MouseEventHandler } from "react"

interface WidgetWrapperProps {
  children: React.ReactNode
  text: string
  onClick?: () => void
}

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({
  children,
  text,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 active:bg-zinc-700 rounded-full h-20 w-20 cursor-pointer">
      {children}
      <span style={{ fontSize: "10px" }} className="pt-2">
        {text}
      </span>
    </div>
  )
}

export default WidgetWrapper
