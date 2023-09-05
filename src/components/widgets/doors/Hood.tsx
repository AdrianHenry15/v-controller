import React from "react"
import WidgetWrapper from "../WidgetWrapper"

import { AiFillLock, AiFillUnlock } from "react-icons/ai"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const Hood = () => {
  const { hoodOpen, setHoodOpen } = useWidgetStore()
  return (
    <WidgetWrapper text="Hood">
      {hoodOpen ? <AiFillUnlock size="20px" /> : <AiFillLock size="20px" />}
    </WidgetWrapper>
  )
}

export default Hood
