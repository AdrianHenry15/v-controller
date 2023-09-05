import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BsSignTurnLeft, BsSignTurnLeftFill } from "react-icons/bs"
import { useWidgetStore } from "../../../hooks/useWidgetStore"

const LeftSignal = () => {
  const { leftSignalOn, setLeftSignal } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setLeftSignal()} text="LeftSignal">
      {leftSignalOn ? (
        <BsSignTurnLeftFill size="20px" />
      ) : (
        <BsSignTurnLeft size="20px" />
      )}
    </WidgetWrapper>
  )
}

export default LeftSignal
