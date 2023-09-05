import React from "react"
import DoorLocks from "./doors/DoorLocks"
import Trunk from "./doors/Trunk"
import Honk from "./Honk"
import AllWindows from "./windows/AllWindows"
import BrakeLights from "./lights/Brake"
import LeftSignal from "./lights/LeftSignal"
import RightSignal from "./lights/RightSignal"
import BackRightLight from "./lights/interior/BackRight"
import BackLeftLight from "./lights/interior/BackLeft"
import DriverLight from "./lights/interior/Driver"
import PassengerLight from "./lights/interior/Passenger"
import BackLeftWindow from "./windows/BackLeft"
import BackRightWindow from "./windows/BackRight"
import DriverWindow from "./windows/Driver"
import PassengerWindow from "./windows/Passenger"
import Hood from "./doors/Hood"
import WindSheildWipers from "./windows/WindSheildWipers"
import HeadLights from "./lights/Headlights"

const WidgetContainer = () => {
  return (
    <div className="flex flex-col items-center justify-evenly pb-20 relative overflow-y-scroll border-y-2">
      <div className="max-h-0 ">
        {/* EXTERIOR LIGHTS */}
        <div className="flex">
          <HeadLights />
          <BrakeLights />
          <LeftSignal />
          <RightSignal />
        </div>
        {/* INTERIOR LIGHTS */}
        <div className="flex">
          <DriverLight />
          <PassengerLight />
          <BackLeftLight />
          <BackRightLight />
        </div>
        {/* DOORS */}
        <div className="flex">
          <Honk />
          <DoorLocks />
          <Trunk />
          <Hood />
        </div>
        {/* WINDOWS */}
        <div className="flex">
          <DriverWindow />
          <PassengerWindow />
          <BackLeftWindow />
          <BackRightWindow />
        </div>
        {/* WINDOWS */}
        <div className="flex">
          <AllWindows />
          <WindSheildWipers />
        </div>
      </div>
    </div>
  )
}

export default WidgetContainer
