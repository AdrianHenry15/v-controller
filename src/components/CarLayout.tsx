"use client"

import React from "react"
import Container from "./Container"
import WidgetContainer from "./widgets/WidgetContainer"
import Header from "./header/Header"
import CarDisplay from "./car-display/CarDisplay"
import OptionsContainer from "./options/OptionsContainer"
import DriverView from "./car-display/DriverView"

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
          {/* <CarDisplay /> */}
          <DriverView />
          <WidgetContainer />
        </div>
        <OptionsContainer />
      </Container>
    </div>
  )
}

export default CarLayout
