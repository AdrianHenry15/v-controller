import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const DriverLight = () => {
  const { driverLightOn, setDriverLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setDriverLights()} text="Driver">
      {driverLightOn ? (
        <BsLightbulbFill size="20px" />
      ) : (
        <BsLightbulb size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default DriverLight
