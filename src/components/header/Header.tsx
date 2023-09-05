import React from "react"
import Settings from "./Settings"
import Title from "./Title"

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <Settings />
      <Title />
    </div>
  )
}

export default Header
