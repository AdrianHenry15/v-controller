import React, { useState, useEffect } from "react"
import { PiHeadlightsBold } from "react-icons/pi"
import { GiVacuumCleaner } from "react-icons/gi"
import { AiFillWindows } from "react-icons/ai"
import { MdMediaBluetoothOn } from "react-icons/md"
import SidebarContainer from "./SidebarContainer"

const LeftBar = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <div className="sidebar-item">
          <PiHeadlightsBold size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Headlights</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <GiVacuumCleaner size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Hvac</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <AiFillWindows size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Windows</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <MdMediaBluetoothOn size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Media</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
