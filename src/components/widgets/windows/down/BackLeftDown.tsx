import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowDownSquare, BsArrowDownSquareFill } from "react-icons/bs"

const BackLeftWindowDown = () => {
  const { backLeftWindowDown, setBackLeftWindowDown } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setBackLeftWindowDown(true)}
      onMouseUp={() => setBackLeftWindowDown(false)}
      onTouchStart={() => setBackLeftWindowDown(true)}
      onTouchEnd={() => setBackLeftWindowDown(false)}
      text="Window 3">
      {!backLeftWindowDown && <BsArrowDownSquare size="20px" />}
      {backLeftWindowDown && <BsArrowDownSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default BackLeftWindowDown
