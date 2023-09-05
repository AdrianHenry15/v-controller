import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowUpSquare, BsArrowUpSquareFill } from "react-icons/bs"

const BackLeftWindowUp = () => {
  const { backLeftWindowUp, setBackLeftWindowUp } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setBackLeftWindowUp(true)}
      onMouseUp={() => setBackLeftWindowUp(false)}
      onTouchStart={() => setBackLeftWindowUp(true)}
      onTouchEnd={() => setBackLeftWindowUp(false)}
      text="Window 3">
      {!backLeftWindowUp && <BsArrowUpSquare size="20px" />}
      {backLeftWindowUp && <BsArrowUpSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default BackLeftWindowUp
