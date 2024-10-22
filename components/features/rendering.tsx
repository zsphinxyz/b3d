import React from 'react'
import { FadeIn } from '../Animate'
import ReadMore from '../readMore'
import Image from 'next/image'

export default function Rendering() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">
    <FadeIn className="text-zinc-700 self-stretch basis-1/2  ">
      <h2 className="text-5xl font-bold mb-5">Rendering</h2>
      <p className="my-3 text-lg md:text-xl leading-loose">
        Create jaw-dropping renders thanks to Cycles, high-end production path tracer.
        Blender comes with a powerful unbiased rendering engine that offers stunning ultra-realistic rendering.
      </p>
      <ul className="text-lg list-disc list-inside ml-3 mb-3">
        <li>Cycles Rendering</li>
        <li>FreeStyle Rendering</li>
        <li>Eevee Rendering</li>
      </ul>
      <ReadMore link="https://www.blender.org/features/rendering/" />
    </FadeIn>

    <FadeIn className="basis-1/2 relative select-none h-80 lg:h-96">
      <div className="transparent absolute inset-0" />
      <div className="contents size-20 overflow-hidden ">
        <Image loading="eager" draggable={false} src="/render.jpg" alt="Cycles" width={500} height={500} priority className="mask w-full h-full max-h-[500px] object-cover object-center" />
        <div className="borderCorner" />
      </div>
    </FadeIn>
  </div>
  )
}
