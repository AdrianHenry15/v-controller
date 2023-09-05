import React from "react"
import Climate from "./Climate"
import Controls from "./Controls"
import Owner from "./Owner"

const OptionsContainer = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <Climate />
        <Controls />
        <Owner />
      </div>
    </div>
  )
}

export default OptionsContainer
