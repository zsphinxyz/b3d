import { FadeIn } from "../Animate";
import { CubeAni } from "../cubeAni";
import ReadMore from "../readMore";


export default function AniRig() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 justify-center items-center w-full">

      <FadeIn className="text-zinc-700 self-stretch basis-1/2 ">
        <h2 className="text-4xl font-bold mb-5">Animation & Rigging</h2>
        <p className="my-3 text-lg md:text-xl leading-relaxed">
          Designed for animation, Blender is being used for award-winning shorts and feature films.
        </p>
        <ul className="text-lg list-disc list-inside ml-3 mb-3">
          <li>Animation Toolset</li>
          <li>Rigging</li>
          <li>Constraints</li>
          <li>Drivers & Shape Keys</li>
          <li>Motion Paths</li>
        </ul>
        <ReadMore link="https://www.blender.org/features/animation/"/>
      </FadeIn>
      
      <FadeIn className="basis-1/2 min-h-80 lg:h-96 select-none self-stretch transparentt bg-[#222] relative">
        <CubeAni />
      </FadeIn>

    </div>
  )
}
