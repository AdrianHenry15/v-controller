// import * as THREE from 'three'
// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

// function CarDisplay(props: ThreeElements['mesh']) {
//   const meshRef = useRef<THREE.Mesh>(null!)
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// )

import React from "react"
import WebgiViewer from "../WebgiViewer"

const CarDisplay = () => {
  return (
    <div>
      <WebgiViewer />
    </div>
  )
}

export default CarDisplay
