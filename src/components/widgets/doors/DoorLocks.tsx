import React, { useState } from "react"
import WidgetWrapper from "../WidgetWrapper"
import { AiFillUnlock, AiFillLock } from "react-icons/ai"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const DoorLocks = () => {
  const { doorsLocked, setDoorLocks } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setDoorLocks()} text="Doors">
      {doorsLocked ? <AiFillUnlock size="20px" /> : <AiFillLock size="20px" />}
    </WidgetWrapper>
  )
}

export default DoorLocks
