import React, { useState } from "react"
import WidgetWrapper from "../WidgetWrapper"
import { AiFillLock } from "react-icons/ai"
import { AiFillUnlock } from "react-icons/ai"

const DoorLocks = () => {
  return (
    <WidgetWrapper text="Doors">
      <AiFillUnlock size="20px" />
    </WidgetWrapper>
  )
}

export default DoorLocks
