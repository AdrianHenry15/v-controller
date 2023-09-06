import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { FaTemperatureLow } from "react-icons/fa"

const Climate = () => {
  return (
    <OptionsWrapper title="Climate">
      <div className="pr-2">
        <FaTemperatureLow size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default Climate
