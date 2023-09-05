import React from "react"
import WidgetWrapper from "../../WidgetWrapper"
import { BsArrowUpSquare, BsArrowUpSquareFill } from "react-icons/bs"
import { useWidgetStore } from "../../../../hooks/useWidgetStore"

const AllWindowsUp = () => {
  const { allWindowsUp, setAllWindowsUp } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseDown={() => setAllWindowsUp(true)}
      onMouseUp={() => setAllWindowsUp(false)}
      onTouchStart={() => setAllWindowsUp(true)}
      onTouchEnd={() => setAllWindowsUp(false)}
      text="Close All">
      {!allWindowsUp && <BsArrowUpSquare size="20px" />}
      {allWindowsUp && <BsArrowUpSquareFill size="20px" />}
    </WidgetWrapper>
  )
}

export default AllWindowsUp
