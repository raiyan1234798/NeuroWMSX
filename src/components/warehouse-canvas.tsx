"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Grid } from "@react-three/drei"

function WarehouseRacks() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <group key={i} position={[(i - 2) * 4, 0, 0]}>
          {Array.from({ length: 3 }).map((_, j) => (
            <Box key={j} args={[1, 4, 10]} position={[0, 2, (j - 1) * 8]} castShadow receiveShadow>
              <meshStandardMaterial color={0x2050aa} roughness={0.3} metalness={0.8} />
            </Box>
          ))}
        </group>
      ))}
    </>
  )
}

export function WarehouseCanvas() {
  return (
    <div className="w-full h-full relative group">
      <Canvas shadows camera={{ position: [15, 10, 15], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 20, 10]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        />
        <color attach="background" args={['#0a0f1c']} />
        
        <WarehouseRacks />
        
        <Grid
          infiniteGrid
          fadeDistance={50}
          sectionColor="#00f0ff"
          cellColor="#004488"
          position={[0, -0.01, 0]}
        />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.05} />
      </Canvas>
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur p-4 rounded-xl border border-primary/20 pointer-events-none">
        <h3 className="font-bold text-primary">Live 3D Twin</h3>
        <p className="text-xs text-muted-foreground">Monitoring 15 Racks, 3,420 items.</p>
        <p className="text-xs text-emerald-500 font-semibold animate-pulse mt-1">4 AGVs Operating</p>
      </div>
    </div>
  )
}
