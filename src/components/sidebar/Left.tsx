import React from "react"
import { BsFillSquareFill } from "react-icons/bs"
import SidebarContainer from "./SidebarContainer"

const LeftBar = () => {
  return (
    <div className="sidebar-wrapper">
      <SidebarContainer text="Headlights" />
      <SidebarContainer text="Hvac" />
      <SidebarContainer text="Windows" />
      <SidebarContainer text="Media" />
    </div>
  )
}

export default LeftBar
