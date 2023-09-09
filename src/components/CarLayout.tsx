"use client"

import React from "react"
import Container from "./Container"
import WidgetContainer from "./widgets/WidgetContainer"

import OptionsContainer from "./options/OptionsContainer"
import CarDisplay from "./car-display/CarDisplay"

const CarLayout = () => {
  return (
    <div>
      <Container>
        <div className="backSplash">
          {/* <Header /> */}
          {/* <GasDisplay /> */}
          <CarDisplay />
          {/* <DriverView /> */}
          {/* <WidgetContainer /> */}
        </div>
        {/* <OptionsContainer /> */}
      </Container>
    </div>
  )
}

export default CarLayout
