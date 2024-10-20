import { FadeIn } from "../Animate";
import ReadMore from "../readMore";


export default function Simulation() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full">

      <FadeIn className="text-zinc-700 self-stretch basis-1/2 ">
        <h2 className="text-4xl font-bold mb-5">Simulation</h2>
        <p className="my-3 text-lg md:text-xl leading-relaxed">
        Featuring industry-standards libraries like Bullet and MantaFlow, Blender offers powerful simulation tools.
        </p>
        <ul className="text-lg list-disc list-inside ml-3 mb-3">
          <li>Fluid, Smoke & Fire</li>
          <li>Hair</li>
          <li>Cloth</li>
          <li>Rigid Bodies</li>
          <li>Particles</li>
        </ul>
        <ReadMore link="https://www.blender.org/features/simulation/" />
      </FadeIn>

      <FadeIn className="basis-1/2 min-h-full h-80 lg:h-96 select-none self-stretch relative">
        <video autoPlay muted loop width={640} height={360} src="/muzzle_flash.mp4" className="h-full w-full object-cover object-left">
          {/* <source src="/sim.mov" type="video/mp4" /> */}
          Your Browser cant play this video.
        </video>
        <span className="absolute left-0 bottom-0 p-2 text-zinc-200 bg-gradient-to-t from-black/70 to-transparent w-full">
          <a href="https://studio.blender.org/films/charge/gallery/?asset=6194" className='text-blue-400 underline' target='_blank'>Muzzle Flash FX</a> from Blender Studio
        </span>
    </FadeIn>
  </div>
  )
}
