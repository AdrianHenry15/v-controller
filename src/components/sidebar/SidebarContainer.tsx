import React, { useEffect, useState } from "react"
import { BsFillSquareFill } from "react-icons/bs"

interface SidebarContainerProps {
  text: string
}

const SidebarContainer = (props: SidebarContainerProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="sidebar-container">
      <div className="sidebar-item">
        <BsFillSquareFill size={isMobile ? "15px" : "30px"} />
        <span style={{ paddingLeft: "15px" }}>{props.text}</span>
      </div>
    </div>
  )
}

export default SidebarContainer
