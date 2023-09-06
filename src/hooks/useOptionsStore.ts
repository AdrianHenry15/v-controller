import { create } from "zustand"

export enum Owners {
  HAQQ,
  SUMMAYAH,
}

interface OptionsStore {
  // STATE
  owner: Owners

  // ACTIONS
  setOwner: (selected: Owners) => void
}

export const useOptionsStore = create<OptionsStore>((set, get) => ({
  owner: Owners.HAQQ,
  setOwner: (selected: Owners) => set({ owner: selected }),
}))
