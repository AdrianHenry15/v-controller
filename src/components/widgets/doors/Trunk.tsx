import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { AiFillLock } from "react-icons/ai"
import { AiFillUnlock } from "react-icons/ai"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const Trunk = () => {
  const { trunkOpen, setTrunkOpen } = useWidgetStore()
  return (
    <WidgetWrapper text="Trunk">
      {trunkOpen ? <AiFillUnlock size="20px" /> : <AiFillLock size="20px" />}
    </WidgetWrapper>
  )
}

export default Trunk
