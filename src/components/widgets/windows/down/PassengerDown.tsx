import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowDownSquare, BsArrowDownSquareFill } from "react-icons/bs"

const PassengerWindowDown = () => {
  const { passengerWindowDown, setPassengerWindowDown } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setPassengerWindowDown(true)}
      onMouseUp={() => setPassengerWindowDown(false)}
      onTouchStart={() => setPassengerWindowDown(true)}
      onTouchEnd={() => setPassengerWindowDown(false)}
      text="Passenger">
      {!passengerWindowDown && <BsArrowDownSquare size="20px" />}
      {passengerWindowDown && <BsArrowDownSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default PassengerWindowDown
