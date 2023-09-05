import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowUpSquare, BsArrowUpSquareFill } from "react-icons/bs"

const BackRightWindowUp = () => {
  const { backRightWindowUp, setBackRightWindowUp } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setBackRightWindowUp(true)}
      onMouseUp={() => setBackRightWindowUp(false)}
      onTouchStart={() => setBackRightWindowUp(true)}
      onTouchEnd={() => setBackRightWindowUp(false)}
      text="Window 4">
      {!backRightWindowUp && <BsArrowUpSquare size="20px" />}
      {backRightWindowUp && <BsArrowUpSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default BackRightWindowUp
