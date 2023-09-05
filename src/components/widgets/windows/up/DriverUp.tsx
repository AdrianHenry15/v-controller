import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsArrowUpSquare, BsArrowUpSquareFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const DriverWindowUp = () => {
  const { driverWindowUp, setDriverWindowUp } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setDriverWindowUp(true)}
      onMouseUp={() => setDriverWindowUp(false)}
      onTouchStart={() => setDriverWindowUp(true)}
      onTouchEnd={() => setDriverWindowUp(false)}
      text="Driver">
      {!driverWindowUp && <BsArrowUpSquare size="20px" />}
      {driverWindowUp && <BsArrowUpSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default DriverWindowUp
