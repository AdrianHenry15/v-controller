import React from "react"
import DoorLocks from "./doors/DoorLocks"
import Trunk from "./doors/Trunk"
import Honk from "./Honk"
import AllWindows from "./windows/up/AllWindowsUp"
import BrakeLights from "./lights/Brake"
import LeftSignal from "./lights/LeftSignal"
import RightSignal from "./lights/RightSignal"
import BackRightLight from "./lights/interior/BackRight"
import BackLeftLight from "./lights/interior/BackLeft"
import DriverLight from "./lights/interior/Driver"
import PassengerLight from "./lights/interior/Passenger"
import BackLeftWindow from "./windows/up/BackLeftUp"
import BackRightWindow from "./windows/up/BackRightUp"
import DriverWindow from "./windows/up/DriverUp"
import PassengerWindow from "./windows/up/PassengerUp"
import Hood from "./doors/Hood"
import HeadLights from "./lights/Headlights"
import AllWindowsDown from "./windows/down/AllWindowsDown"
import DriverWindowDown from "./windows/down/DriverDown"
import PassengerWindowDown from "./windows/down/PassengerDown"
import BackLeftWindowDown from "./windows/down/BackLeftDown"
import BackRightWindowDown from "./windows/down/BackRightDown"

const WidgetContainer = () => {
  return (
    <div className="flex flex-col items-center justify-evenly pb-20 relative overflow-y-scroll border-y-2">
      <div className="max-h-24 ">
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
          <AllWindowsDown />
          <DriverWindowDown />
          <PassengerWindowDown />
        </div>
        <div className="flex">
          <BackLeftWindowDown />
          <BackRightWindowDown />
        </div>
      </div>
    </div>
  )
}

export default WidgetContainer
