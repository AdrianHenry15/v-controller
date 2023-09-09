import React, { useState, useEffect } from "react"
import WebgiViewer from "../WebgiViewer"
import AerialCar from "../../assets/images/aerial_car.png"

const CarDisplay = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className="flex w-full justify-center items-center flex-1">
      <img
        src={AerialCar}
        alt="aerial-car"
        width={isMobile ? "150px" : "300px"}
        className="w-36 md:w-72 "
      />
      {/* <WebgiViewer /> */}
    </div>
  )
}

export default CarDisplay
