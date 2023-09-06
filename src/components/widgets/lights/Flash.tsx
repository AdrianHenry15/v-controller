import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { PiHeadlightsBold, PiHeadlightsFill } from "react-icons/pi"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const FlashLights = () => {
  const { flashLights, setFlashLights } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setFlashLights(true)}
      onMouseUp={() => setFlashLights(false)}
      onTouchStart={() => setFlashLights(true)}
      onTouchEnd={() => setFlashLights(false)}
      text="Flash">
      {!flashLights && <PiHeadlightsBold size="20px" />}
      {flashLights && <PiHeadlightsFill size="20px" />}
    </WidgetWrapper>
  )
}

export default FlashLights
