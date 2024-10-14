'use client'

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CubeAni } from "./cubeAni";
import ReadMore from "./readMore";
import { CubeModel } from "./CubeModel";
import BlenderGrid from "./blenderGrid";

export default function Features() {
  return (
    <section className="px-2 md:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-stone-700 mb-20">Everything You Need</h1>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
        <div className="text-zinc-700 self-stretch basis-1/2  ">
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
          <ReadMore link="https://www.blender.org/features/rendering/" />
        </div>

        <div className="basis-1/2 relative select-none h-80">
          <div className="transparent absolute inset-0" />
          <div className="contents size-20 overflow-hidden ">
            <Image draggable={false} src="/render.jpg" alt="Cycles" width={500} height={500} quality={100} className="mask w-full h-full max-h-[500px] object-cover object-center" />
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
            <ReadMore link="https://www.blender.org/features/modeling/" />
          </div>

          <div className="basis-1/2 h-80 select-none self-stretch bg-[#222]">
            <Canvas className="h-full min-h-80" style={{height: '320px'}} camera={{fov: 80, position: [1,4,5], zoom:1.5, isPerspectiveCamera: true, }} >
              <CubeModel />
              <OrbitControls enablePan={false} enableZoom={false} enableDamping={false} />
              <BlenderGrid />
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
            <ReadMore link="https://www.blender.org/features/sculpting/" />
          </div>

          <div className="basis-1/2 min-h-full h-80 select-none self-stretch relative">
          {/* https://studio.blender.org/training/stylized-character-workflow/5d289585e50af1f7c9c6df35/ */}
            <video autoPlay loop muted width={640} height={360} src="/sculpt.mp4" className="h-full w-full object-cover object-left-top">
              {/* <source src="/sim.mov" type="video/mp4" /> */}
              Your Browser doens&apos;t support this video. 
            </video>
            <span className="absolute left-0 bottom-0 p-2 text-zinc-200 bg-gradient-to-t from-black/70 to-transparent w-full">Rain from {' '}
              <a href="https://studio.blender.org/training/stylized-character-workflow/5d289585e50af1f7c9c6df35/" className='text-blue-400 underline' target='_blank'>Blender Studio</a>
            </span>
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
            <ReadMore link="https://www.blender.org/features/animation/"/>
          </div>

          <CubeAni />

        </div>
      </div>

      <hr className="my-10" />

      <div className="">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">

          <div className="text-zinc-700 self-stretch basis-1/2 ">
            <h2 className="text-4xl font-bold mb-5">Simulation</h2>
            <p className="my-3 text-lg md:text-xl leading-relaxed">
            Featuring industry-standards libraries like Bullet and MantaFlow, Blender offers powerful simulation tools.
            </p>
            <ul className="text-lg list-disc list-inside ml-3 mb-3">
              <li className="">Fluid, Smoke & Fire</li>
              <li className="">Hair</li>
              <li className="">Cloth</li>
              <li className="">Rigid Bodies</li>
              <li className="">Particles</li>
            </ul>
            <ReadMore link="https://www.blender.org/features/simulation/" />
          </div>

          <div className="basis-1/2 min-h-full h-80 select-none self-stretch relative">
            <video autoPlay muted loop width={640} height={360} src="/muzzle_flash.mp4" className="h-full w-full object-cover object-left">
              {/* <source src="/sim.mov" type="video/mp4" /> */}
              Your Browser cant play this video.
            </video>
            <span className="absolute left-0 bottom-0 p-2 text-zinc-200 bg-gradient-to-t from-black/70 to-transparent w-full">Muzzle Flash FX from {' '}
              <a href="https://studio.blender.org/films/charge/gallery/?asset=6194" className='text-blue-400 underline' target='_blank'>Blender Studio</a>
            </span>
          </div>
        </div>
      </div>

      

    </section>
  )
}
