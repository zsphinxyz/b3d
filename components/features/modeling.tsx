import { FadeIn } from '../Animate'
import ReadMore from '../readMore'
import CubeModel  from '../CubeModel'

export default function Modeling() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 justify-center items-center w-full">

      <FadeIn className="text-zinc-700 self-stretch basis-1/2 ">
        <h2 className="text-5xl font-bold mb-5">Modeling</h2>
        <p className="my-3 text-lg md:text-xl leading-relaxed">
          Sculpting, retopology, modeling, curves. Blender’s modeling toolset is extensive.
        </p>
        <ul className="text-lg list-disc list-inside ml-3 mb-3">
          <li>Full N-Gon support</li>
          <li>Edge slide, collapse and dissolve</li>
          <li>Grid and Bridge fill</li>
          <li>Python scripting for custom tools and add-ons</li>
        </ul>
        <ReadMore link="https://www.blender.org/features/modeling/" />
      </FadeIn>

      <FadeIn className="basis-1/2 h-80 lg:h-96 select-none self-stretch overflow-hidden">
        <CubeModel />
      </FadeIn>

    </div>
  )
}
