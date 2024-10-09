"use client";
import {Canvas} from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, Loader, OrbitControls, Outlines, PerspectiveCamera} from '@react-three/drei'
import UI from './ui';
import { useState } from 'react';
import BlenderGrid from '@/components/blenderGrid';


export default function Hero() {

  const [cubeClick, setCubeClick] = useState(false);
  const [del, setDel] = useState(false);
  const [canvasClick, setCanvasClick] = useState(false)

  function handleCubeClick() {
    setCubeClick(!cubeClick)
  }

  function deleteCube() {
    setDel(true)
    setCubeClick(false)
  }

  function addCube() {
    setCubeClick(false)
    setDel(false)
    setCanvasClick(false)
  }

  function reset() {
    setCubeClick(false)
    setCanvasClick(false)
  }

  function handleCanvasClick() {
    del ? setCanvasClick(!canvasClick) : '';
  }



  return (
    <main className="w-full h-[720px] flex flex-col border relative max-w-screen-2xl mx-auto bg-[#222]">
      {
        cubeClick &&
        <div className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button className='bg-blue-500 text-white w-max px-4 py-0.5 rounded-sm text-sm shadow shadow-black/50 select-none' onClick={deleteCube}>Delete</button>
        </div>
      }

      {
        del && canvasClick &&
        <div className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button className='bg-blue-500 text-white w-max px-4 py-0.5 rounded-sm text-sm shadow shadow-black/50 select-none' onClick={addCube}>Add Cube</button>
        </div>
      }
      <Canvas id='canvas' onMouseDown={reset} onContextMenu={handleCanvasClick}>

        {!del ? <mesh onContextMenu={handleCubeClick}>
          <boxGeometry args={[1,1,1]} />
          <meshMatcapMaterial color='#a1a1af' />
          <Outlines thickness={2.5} color='#FFA028' />
        </mesh> : ''}

        <group name='Light&Camera'>
          <ambientLight intensity={1} />
        </group>

        <group name='UI'>
          <OrbitControls minZoom={4} maxZoom={5} enablePan={false} enableZoom={false}  />
          <PerspectiveCamera makeDefault position={[4, 4, 4]} />

          <BlenderGrid />

          <GizmoHelper
            alignment="top-right"
            margin={[50, 100]}
          >
            <GizmoViewport axisColors={['#FF3352', '#2890FF', '#8BDC00']} axisHeadScale={1} labels={['X', 'Z', 'Y']} />
          </GizmoHelper>
        </group>

      </Canvas>
      <Loader />

      <UI />

    </main>
  )
}
