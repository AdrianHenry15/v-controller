import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const PassengerLight = () => {
  const { passengerLightOn, setPassengerLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setPassengerLights()} text="Passenger">
      {passengerLightOn ? (
        <BsLightbulbFill size="20px" />
      ) : (
        <BsLightbulb size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default PassengerLight
