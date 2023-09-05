import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { PiHeadlightsBold } from "react-icons/pi"

const HeadLights = () => {
  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <WidgetWrapper onClick={() => handleClick()} text="Headlights">
      {" "}
      <PiHeadlightsBold size="20px" />
    </WidgetWrapper>
  )
}

export default HeadLights
