import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"
import { BsArrowUpSquare, BsArrowUpSquareFill } from "react-icons/bs"

const PassengerWindowUp = () => {
  const { passengerWindowUp, setPassengerWindowUp } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setPassengerWindowUp(true)}
      onMouseUp={() => setPassengerWindowUp(false)}
      onTouchStart={() => setPassengerWindowUp(true)}
      onTouchEnd={() => setPassengerWindowUp(false)}
      text="Passenger">
      {!passengerWindowUp && <BsArrowUpSquare size="20px" />}
      {passengerWindowUp && <BsArrowUpSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default PassengerWindowUp
