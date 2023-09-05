import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BsSignTurnRight, BsSignTurnRightFill } from "react-icons/bs"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const RightSignal = () => {
  const { rightSignalOn, setRightSignal } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setRightSignal()} text="RightSignal">
      {rightSignalOn ? (
        <BsSignTurnRightFill size="20px" />
      ) : (
        <BsSignTurnRight size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default RightSignal
