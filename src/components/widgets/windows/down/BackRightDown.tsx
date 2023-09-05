import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowDownSquare, BsArrowDownSquareFill } from "react-icons/bs"

const BackRightWindowDown = () => {
  const { backRightWindowDown, setBackRightWindowDown } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setBackRightWindowDown(true)}
      onMouseUp={() => setBackRightWindowDown(false)}
      onTouchStart={() => setBackRightWindowDown(true)}
      onTouchEnd={() => setBackRightWindowDown(false)}
      text="Window 4">
      {!backRightWindowDown && <BsArrowDownSquare size="20px" />}
      {backRightWindowDown && <BsArrowDownSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default BackRightWindowDown
