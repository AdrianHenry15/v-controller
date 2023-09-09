import React, { useState, useEffect } from "react"
import CarDisplay from "./car-display/CarDisplay"
import LeftBar from "./sidebar/Left"
import RightBar from "./sidebar/Right"
import "./CarLayout.css"

const CarLayout = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  if (isMobile) {
    return (
      <div className="car-layout">
        <CarDisplay />
        <div className="options-layout">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    )
  } else {
    return (
      <div className="car-layout">
        <LeftBar />
        <CarDisplay />
        <RightBar />
      </div>
    )
  }
}

export default CarLayout
