import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BsSignStop, BsSignStopFill } from "react-icons/bs"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const Brakes = () => {
  const { brakeLightsOn, setBrakeLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setBrakeLights()} text="Brakes">
      {brakeLightsOn ? (
        <BsSignStopFill size="20px" />
      ) : (
        <BsSignStop size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default Brakes
