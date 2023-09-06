import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { PiSteeringWheelBold } from "react-icons/pi"

const DriverView = () => {
  return (
    <OptionsWrapper title="Driver View" subtext={`Interior: ${""}`}>
      <div className="pr-2">
        <PiSteeringWheelBold size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default DriverView
