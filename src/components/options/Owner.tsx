import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { BsFillPersonFill } from "react-icons/bs"
import { Owners, useOptionsStore } from "../../hooks/useOptionsStore"

const Owner = () => {
  const { owner, setOwner } = useOptionsStore()

  const changeOwner = () => {
    if (owner === Owners.HAQQ) {
      setOwner(Owners.SUMMAYAH)
    } else if (owner === Owners.SUMMAYAH) {
      setOwner(Owners.HAQQ)
    }
  }
  return (
    <OptionsWrapper onClick={() => changeOwner()} title={`Switch Owner`}>
      <div className="pr-2">
        <BsFillPersonFill size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default Owner
