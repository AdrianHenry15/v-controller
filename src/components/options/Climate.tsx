import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { CiTempHigh } from "react-icons/ci"

const Climate = () => {
  return (
    <OptionsWrapper title="Climate" subtext={`Interior: ${""}`}>
      <div className="pr-2">
        <CiTempHigh size="25px" />
      </div>
    </OptionsWrapper>
  )
}

export default Climate
