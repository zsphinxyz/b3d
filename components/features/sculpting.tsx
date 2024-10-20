import { FadeIn } from "../Animate";
import ReadMore from "../readMore";

export default function Sculpting() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">

      <FadeIn className="text-zinc-700 self-stretch basis-1/2 ">
        <h2 className="text-5xl font-bold mb-5">Sculpting</h2>
        <p className="my-3 text-lg md:text-xl leading-relaxed">
          Digital sculpting tools provide the power and flexibility required in several stages of the digital production pipeline.
        </p>
        <ul className="text-lg list-disc list-inside ml-3 mb-3">
          <li>Dedicated Workspace</li>
          <li>Brushes</li>
          <li>Dynamic Topology</li>
          <li>Masking</li>
        </ul>
        <ReadMore link="https://www.blender.org/features/sculpting/" />
      </FadeIn>

      <FadeIn className="basis-1/2 min-h-full h-80 lg:h-96 select-none self-stretch relative">
      {/* https://studio.blender.org/training/stylized-character-workflow/5d289585e50af1f7c9c6df35/ */}
        <video autoPlay loop muted width={640} height={360} src="/sculpt.mp4" className="h-full w-full object-cover object-left-top">
          {/* <source src="/sim.mov" type="video/mp4" /> */}
          Your Browser doens&apos;t support this video. 
        </video>
        <span className="absolute left-0 bottom-0 p-2 text-zinc-200 bg-gradient-to-t from-black/70 to-transparent w-full">
          <a href="https://studio.blender.org/training/stylized-character-workflow/5d289585e50af1f7c9c6df35/" className='text-blue-400 underline' target='_blank'>Rain</a> from Blender Studio
        </span>
      </FadeIn>

    </div>
  )
}
