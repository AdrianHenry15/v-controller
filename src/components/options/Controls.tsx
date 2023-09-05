import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { MdOutlineSettingsRemote } from "react-icons/md"

const Controls = () => {
  return (
    <OptionsWrapper title="Controls">
      <div className="pr-2">
        <MdOutlineSettingsRemote size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default Controls
