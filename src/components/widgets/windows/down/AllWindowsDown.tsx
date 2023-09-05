import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsArrowDownSquare, BsArrowDownSquareFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const AllWindowsDown = () => {
  const { allWindowsDown, setAllWindowsDown } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setAllWindowsDown(true)}
      onMouseUp={() => setAllWindowsDown(false)}
      onTouchStart={() => setAllWindowsDown(true)}
      onTouchEnd={() => setAllWindowsDown(false)}
      text="Open All">
      {!allWindowsDown && <BsArrowDownSquare size="20px" />}
      {allWindowsDown && <BsArrowDownSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default AllWindowsDown
