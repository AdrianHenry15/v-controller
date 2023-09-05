import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsArrowDownSquare, BsArrowDownSquareFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const DriverWindowDown = () => {
  const { driverWindowDown, setDriverWindowDown } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setDriverWindowDown(true)}
      onMouseUp={() => setDriverWindowDown(false)}
      onTouchStart={() => setDriverWindowDown(true)}
      onTouchEnd={() => setDriverWindowDown(false)}
      text="Driver">
      {!driverWindowDown && <BsArrowDownSquare size="20px" />}
      {driverWindowDown && <BsArrowDownSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default DriverWindowDown
