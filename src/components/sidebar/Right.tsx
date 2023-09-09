import React from "react"
import SidebarContainer from "./SidebarContainer"

const RightBar = () => {
  return (
    <div className="sidebar-wrapper">
      <SidebarContainer text="Seats" />
      <SidebarContainer text="Suspension" />
      <SidebarContainer text="Door Locks" />
      <SidebarContainer text="Exhaust" />
    </div>
  )
}

export default RightBar
