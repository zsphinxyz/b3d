"use client";
import {Canvas} from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, Grid, OrbitControls, Outlines, PerspectiveCamera} from '@react-three/drei'
import UI from './ui';


export default function Hero() {

  return (
    <main className="w-full h-[720px] flex flex-col border relative max-w-screen-2xl mx-auto bg-[#222]">
      <Canvas>

        <mesh>
          <boxGeometry args={[1,1,1]} />
          {/* <meshStandardMaterial color="#454545" /> */}
          <meshMatcapMaterial color='#a1a1a1' />
          <Outlines thickness={2} color='#FFA028' />
        </mesh>

        <group name='Light&Camera'>
          <ambientLight intensity={1} />
          <directionalLight position={[0.3, 0.5, 0.5]} intensity={10} />
          <PerspectiveCamera makeDefault position={[0, 0, -5]} />
        </group>

        <group name='UI'>
          <OrbitControls minZoom={4} maxZoom={5} enablePan={false} enableZoom={false}  />
          <PerspectiveCamera makeDefault position={[3, 3, 5]} />

          <Grid position={[0, 0.01, 0]} args={[1, 100]} 
            cellSize={0} 
            cellThickness={0.7}
            sectionSize={100} 
            sectionThickness={1.25}
            sectionColor={'#8BDC00'}
            fadeDistance={20}
            fadeStrength={1}
          />
          <Grid position={[0, 0, 0]} args={[100, 1]} 
            cellSize={0} 
            cellThickness={0.7}
            sectionSize={100} 
            sectionThickness={1.25}
            sectionColor={'#FF3352'}
            fadeDistance={20}
            fadeStrength={1}
          />

          <Grid position={[0, 0, 0]} args={[100, 100]} 
            cellSize={0.5} 
            cellThickness={0.7} 
            cellColor={'#545454'} 
            sectionSize={0} 
            sectionThickness={0}
            fadeDistance={20}
            fadeStrength={1}
          />

          <GizmoHelper
            alignment="top-right"
            margin={[50, 100]}
          >
            <GizmoViewport axisColors={['#FF3352', '#2890FF', '#8BDC00']} axisHeadScale={1} labels={['X', 'Z', 'Y']} />
          </GizmoHelper>
        </group>

      </Canvas>

      <UI />

    </main>
  )
}
