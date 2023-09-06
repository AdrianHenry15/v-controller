import React from "react"
import CarDemo from "../../assets/images/bmw_e39_m5.png"

const CarDisplay = () => {
  return (
    <div className="flex justify-center">
      <img src={CarDemo} alt="car-model" />
    </div>
  )
}

export default CarDisplay
