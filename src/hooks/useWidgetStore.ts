import { create } from "zustand"

export enum ClimateTemp {
  LO,
  LVL1,
  LVL2,
  LVL3,
  LVL4,
  LVL5,
  LVL6,
  LVL7,
  LVL8,
  LVL9,
  LVL10,
  LVL11,
  HI,
}

interface WidgetStore {
  // STATE
  // EXTERIOR LIGHTS
  headLightsOn: boolean
  brakeLightsOn: boolean
  leftSignalOn: boolean
  rightSignalOn: boolean
  flashLights: boolean
  // INTERIOR LIGHTS
  driverLightOn: boolean
  passengerLightOn: boolean
  leftLightOn: boolean
  rightLightOn: boolean
  // DOORS
  doorsLocked: boolean
  trunkOpen: boolean
  hoodOpen: boolean
  // WINDOWS
  allWindowsUp: boolean
  allWindowsDown: boolean
  driverWindowDown: boolean
  driverWindowUp: boolean
  passengerWindowDown: boolean
  passengerWindowUp: boolean
  backLeftWindowDown: boolean
  backLeftWindowUp: boolean
  backRightWindowDown: boolean
  backRightWindowUp: boolean
  // MISC
  carStarted: boolean
  honk: boolean
  climate: boolean

  // ACTIONS
  // EXTERIOR LIGHTS
  setHeadLights: () => void
  setBrakeLights: () => void
  setLeftSignal: () => void
  setRightSignal: () => void
  setFlashLights: (active: boolean) => void
  // INTERIOR LIGHTS
  setDriverLights: () => void
  setPassengerLights: () => void
  setBackLeftLights: () => void
  setBackRightLights: () => void
  // DOORS
  setDoorLocks: () => void
  setTrunkOpen: () => void
  setHoodOpen: () => void
  // WINDOWS
  setAllWindowsUp: (open: boolean) => void
  setAllWindowsDown: (open: boolean) => void
  setDriverWindowDown: (open: boolean) => void
  setDriverWindowUp: (open: boolean) => void
  setPassengerWindowDown: (open: boolean) => void
  setPassengerWindowUp: (open: boolean) => void
  setBackLeftWindowDown: (open: boolean) => void
  setBackLeftWindowUp: (open: boolean) => void
  setBackRightWindowDown: (open: boolean) => void
  setBackRightWindowUp: (open: boolean) => void
  // MISC
  setHonk: (active: boolean) => void
  setClimate: () => void
  setCarStart: () => void
}

export const useWidgetStore = create<WidgetStore>((set, get) => ({
  // STATE
  // EXTERIOR LIGHTS
  headLightsOn: false,
  brakeLightsOn: false,
  leftSignalOn: false,
  rightSignalOn: false,
  flashLights: false,
  // INTERIOR LIGHTS
  driverLightOn: false,
  passengerLightOn: false,
  leftLightOn: false,
  rightLightOn: false,
  // DOORS
  doorsLocked: false,
  trunkOpen: false,
  hoodOpen: false,
  // WINDOWS
  allWindowsUp: false,
  allWindowsDown: false,
  driverWindowDown: false,
  driverWindowUp: false,
  passengerWindowDown: false,
  passengerWindowUp: false,
  backLeftWindowDown: false,
  backLeftWindowUp: false,
  backRightWindowDown: false,
  backRightWindowUp: false,
  // MISC
  carStarted: false,
  climate: false,
  honk: false,

  // ACTIONS
  // EXTERIOR LIGHTS
  setHeadLights: () => set({ headLightsOn: !get().headLightsOn }),
  setBrakeLights: () => set({ brakeLightsOn: !get().brakeLightsOn }),
  setLeftSignal: () => set({ leftSignalOn: !get().leftSignalOn }),
  setRightSignal: () => set({ rightSignalOn: !get().rightSignalOn }),
  setFlashLights: (active: boolean) => set({ flashLights: active }),
  // INTERIOR LIGHTS
  setDriverLights: () => set({ driverLightOn: !get().driverLightOn }),
  setPassengerLights: () => set({ passengerLightOn: !get().passengerLightOn }),
  setBackLeftLights: () => set({ leftLightOn: !get().leftLightOn }),
  setBackRightLights: () => set({ rightLightOn: !get().rightLightOn }),
  // DOORS
  setHoodOpen: () => set({ hoodOpen: !get().hoodOpen }),
  setDoorLocks: () => set({ doorsLocked: !get().doorsLocked }),
  setTrunkOpen: () => set({ trunkOpen: !get().trunkOpen }),
  // WINDOWS
  setAllWindowsUp: (open: boolean) => set({ allWindowsUp: open }),
  setAllWindowsDown: (open: boolean) => set({ allWindowsDown: open }),
  setDriverWindowDown: (open: boolean) => set({ driverWindowDown: open }),
  setDriverWindowUp: (open: boolean) => set({ driverWindowUp: open }),
  setPassengerWindowDown: (open: boolean) => set({ passengerWindowDown: open }),
  setPassengerWindowUp: (open: boolean) => set({ passengerWindowUp: open }),
  setBackLeftWindowDown: (open: boolean) => set({ backLeftWindowDown: open }),
  setBackLeftWindowUp: (open: boolean) => set({ backLeftWindowUp: open }),
  setBackRightWindowDown: (open: boolean) => set({ backRightWindowDown: open }),
  setBackRightWindowUp: (open: boolean) => set({ backRightWindowUp: open }),
  // MISC
  setHonk: (active: boolean) => set({ honk: !get().honk }),
  setClimate: () => set({ climate: !get().climate }),
  setCarStart: () => set({ carStarted: !get().carStarted }),
}))
