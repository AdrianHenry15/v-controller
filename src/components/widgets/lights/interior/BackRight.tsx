import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const BackRightLight = () => {
  const { rightLightOn, setBackRightLights } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setBackRightLights()} text="Light 4">
      {rightLightOn ? (
        <BsLightbulbFill size="20px" />
      ) : (
        <BsLightbulb size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default BackRightLight
