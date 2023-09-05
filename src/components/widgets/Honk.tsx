import React from "react"
import WidgetWrapper from "./WidgetWrapper"
import { AiOutlineSound } from "react-icons/ai"

const Honk = () => {
  const handleClick = () => {
    console.log("Click")
    alert("Click")
  }
  return (
    <WidgetWrapper
      onClick={() => {
        handleClick
      }}
      text="Horn">
      <AiOutlineSound size="20px" />
    </WidgetWrapper>
  )
}

export default Honk
