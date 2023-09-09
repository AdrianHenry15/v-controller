import React from "react"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between py-4 px-6 text-white">
      {children}
    </div>
  )
}

export default Container
