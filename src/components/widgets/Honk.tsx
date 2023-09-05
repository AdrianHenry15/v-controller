import React from "react"
import WidgetWrapper from "./WidgetWrapper"
import { AiOutlineSound, AiFillSound } from "react-icons/ai"
import { useWidgetStore } from "../../hooks/useWidgetStore"

const Honk = () => {
  const { honk, setHonk } = useWidgetStore()
  return (
    <WidgetWrapper
      onMouseUp={() => setHonk(true)}
      onMouseDown={() => setHonk(false)}
      onTouchStart={() => setHonk(true)}
      onTouchEnd={() => setHonk(false)}
      text="Honk">
      {!honk && <AiOutlineSound size="20px" />}
      {honk && <AiFillSound size="20px" />}
    </WidgetWrapper>
  )
}

export default Honk
