import React from "react"
import Owner from "./Owner"
import DriverView from "./DriverView"
import Climate from "./Climate"

const OptionsContainer = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <DriverView />
        <Climate />
        <Owner />
      </div>
    </div>
  )
}

export default OptionsContainer
