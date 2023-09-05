import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { PiHeadlightsBold, PiHeadlightsFill } from "react-icons/pi"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const HeadLights = () => {
  const { headLightsOn, setHeadLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setHeadLights()} text="Headlights">
      {headLightsOn ? (
        <PiHeadlightsFill size="20px" />
      ) : (
        <PiHeadlightsBold size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default HeadLights
