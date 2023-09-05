"use client"

import React from "react"
import Container from "./Container"
import WidgetContainer from "./widgets/WidgetContainer"
import Header from "./header/Header"
import CarDisplay from "./car-display/CarDisplay"
import OptionsContainer from "./options/OptionsContainer"

const CarLayout = () => {
  const handleCLick = () => {
    console.log("Click")
  }
  return (
    <div>
      <Container>
        <div className="backSplash">
          <Header />
          {/* <GasDisplay /> */}
          <CarDisplay />
          <WidgetContainer />
        </div>
        <OptionsContainer />
      </Container>
      <div
        className="pointer-events-auto cursor-pointer"
        onClick={() => handleCLick()}>
        Click Me
      </div>
    </div>
  )
}

export default CarLayout
