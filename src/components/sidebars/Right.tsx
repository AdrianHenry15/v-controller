import React, { useState, useEffect } from "react"
import { PiLockSimpleOpenLight } from "react-icons/pi"
import { GiBadBreath, GiBouncingSpring, GiCarSeat } from "react-icons/gi"

const RightBar = () => {
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
          <GiCarSeat size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Seats</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <GiBouncingSpring size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Suspension</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <PiLockSimpleOpenLight size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Door Locks</span>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <GiBadBreath size={isMobile ? "15px" : "30px"} />
          <span style={{ paddingLeft: "15px" }}>Exhaust</span>
        </div>
      </div>
    </div>
  )
}

export default RightBar
