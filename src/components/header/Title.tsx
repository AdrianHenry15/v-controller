import { Owners, useOptionsStore } from "../../hooks/useOptionsStore"
import React from "react"

const Title = () => {
  const { owner } = useOptionsStore()
  return (
    <div>
      <h3>{owner === Owners.HAQQ ? "Haqq" : "Summayah"}</h3>
    </div>
  )
}

export default Title
