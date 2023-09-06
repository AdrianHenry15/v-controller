import React from "react"
import Controls from "./Controls"
import Owner from "./Owner"
import DriverView from "./DriverView"

const OptionsContainer = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <DriverView />
        <Controls />
        <Owner />
      </div>
    </div>
  )
}

export default OptionsContainer
