import React from "react"
import DriverSeat from "../../assets/images/bmw_e39_m5_driver_seat.png"

const DriverView = () => {
  return (
    <div className="carDisplayBg flex justify-center">
      <img src={DriverSeat} alt="car-model" className="w-80" />
    </div>
  )
}

export default DriverView
