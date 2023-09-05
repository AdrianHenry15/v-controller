import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BiWindowOpen } from "react-icons/bi"

const BackLeftWindow = () => {
  return (
    <WidgetWrapper
      onClick={() => {
        console.log("Clicked!")
      }}
      text="Window 3">
      <BiWindowOpen size="20px" />
    </WidgetWrapper>
  )
}

export default BackLeftWindow
