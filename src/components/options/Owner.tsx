import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { BsFillPersonFill } from "react-icons/bs"

const Owner = () => {
  return (
    <OptionsWrapper onClick={() => {}} title={`Switch Owner`}>
      <div className="pr-2">
        <BsFillPersonFill size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default Owner
