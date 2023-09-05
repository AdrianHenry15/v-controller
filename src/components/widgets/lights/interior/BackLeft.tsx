import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const BackLeftLight = () => {
  const { leftLightOn, setBackLeftLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setBackLeftLights()} text="Light 3">
      {leftLightOn ? (
        <BsLightbulbFill size="20px" />
      ) : (
        <BsLightbulb size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default BackLeftLight
