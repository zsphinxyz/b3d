'use client'

import Image from "next/image";
import { Model } from '@/components/Test'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CubeAni } from "./cubeAni";

export default function Features() {
  return (
    <section className="px-2 md:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-stone-700 mb-20">Everything You Need</h1>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
        <div className="text-zinc-700 self-stretch basis-1/2 ">
          <h2 className="text-5xl font-bold mb-5">Rendering</h2>
          <p className="my-3 text-lg md:text-xl leading-loose">
            Create jaw-dropping renders thanks to Cycles, high-end production path tracer.
            Blender comes with a powerful unbiased rendering engine that offers stunning ultra-realistic rendering.
          </p>
          <ul className="text-lg list-disc list-inside ml-3 mb-3">
            <li className="">Cycles Rendering</li>
            <li className="">FreeStyle Rendering</li>
            <li className="">Eevee Rendering</li>
          </ul>
          <a href="http://" className="text-lg text-blue-500 font-medium hover:underline uppercase">Read More</a>
        </div>

        <div className="basis-1/2 relative select-none">
          <div className="transparent absolute inset-0" />
          <div className="contents size-20 overflow-hidden ">
            <Image draggable={false} src="/ghost.jpg" alt="Cycles" width={500} height={500} quality={100} className="mask w-full h-full max-h-[500px] object-cover object-center" />
            <div className="borderCorner" />
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="">
        <div className="flex flex-col md:flex-row-reverse gap-5 justify-center items-center w-full">

          <div className="text-zinc-700 self-stretch basis-1/2 ">
            <h2 className="text-5xl font-bold mb-5">Modeling</h2>
            <p className="my-3 text-lg md:text-xl leading-relaxed">
              Sculpting, retopology, modeling, curves. Blender’s modeling toolset is extensive.
            </p>
            <ul className="text-lg list-disc list-inside ml-3 mb-3">
              <li className="">Full N-Gon support</li>
              <li className="">Edge slide, collapse and dissolve</li>
              <li className="">Grid and Bridge fill</li>
              <li className="">Python scripting for custom tools and add-ons</li>
            </ul>
            <a href="http://" className="text-lg text-blue-500 font-medium hover:underline uppercase">Read More</a>
          </div>

          <div className="basis-1/2 min-h-80 select-none self-stretch transparent">
            {/* <Image draggable={false} src="/ghost.jpg" alt="Cycles" width={500} height={500} quality={100} className="w-full h-full max-h-[500px] object-cover object-center" /> */}
            <Canvas className="h-full !min-h-80">
              {/* <Model /> */}
              <OrbitControls />
            </Canvas>
          </div>

        </div>
      </div>

      <hr className="my-10" />

      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">

          <div className="text-zinc-700 self-stretch basis-1/2 ">
            <h2 className="text-5xl font-bold mb-5">Sculpting</h2>
            <p className="my-3 text-lg md:text-xl leading-relaxed">
              Digital sculpting tools provide the power and flexibility required in several stages of the digital production pipeline.
            </p>
            <ul className="text-lg list-disc list-inside ml-3 mb-3">
              <li className="">Dedicated Workspace</li>
              <li className="">Brushes</li>
              <li className="">Dynamic Topology</li>
              <li className="">Masking</li>
            </ul>
            <a href="http://" className="text-lg text-blue-500 font-medium hover:underline uppercase">Read More</a>
          </div>

          <div className="basis-1/2 min-h-80 select-none self-stretch transparent">
            <Canvas className="w-full self-stretch min-h-80 h-full">
              
              <OrbitControls enablePan={false} enableZoom={false} />
              <PerspectiveCamera makeDefault position={[0,20,30]} />
            </Canvas>
          </div>

        </div>
      </div>

      <hr className="my-10" />

      <div className="">
        <div className="flex flex-col md:flex-row-reverse gap-5 justify-center items-center w-full">

          <div className="text-zinc-700 self-stretch basis-1/2 ">
            <h2 className="text-4xl font-bold mb-5">Animation & Rigging</h2>
            <p className="my-3 text-lg md:text-xl leading-relaxed">
              Designed for animation, Blender is being used for award-winning shorts and feature films.
            </p>
            <ul className="text-lg list-disc list-inside ml-3 mb-3">
              <li className="">Animation Toolset</li>
              <li className="">Rigging</li>
              <li className="">Constraints</li>
              <li className="">Drivers & Shape Keys</li>
              <li className="">Motion Paths</li>
            </ul>
            <a href="http://" className="text-lg text-blue-500 font-medium hover:underline uppercase">Read More</a>
          </div>

          <CubeAni />

        </div>
      </div>

    </section>
  )
}
