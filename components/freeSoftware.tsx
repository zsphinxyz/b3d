import Image from "next/image";

export default function FreeSoftware() {
  return (
    <section className="max-w-screen-2xl min-h-[640px] h-dvh max-h-[1000px] relative cursor-default w-full flex flex-col justify-center gap-10 mx-auto">

        <h1 className="text-5xl text-balance text-center md:text-left sm:text-7xl block font-black md:w-10/12 lg:1/2 pl-5 capitalize leading-relaxed mix-blend-exclusion lg:tracking-wide z-[1]">Free Software Never <wbr /> Looked This Awesome.</h1>
      
      <video autoPlay muted loop width={1080} height={1920} poster="/security_bot.jpg" className="h-full w-max object-contain object-right absolute right-0 top-0 z-[0]">
          <source src="/security_bot.mp4" type="video/mp4" />
          Your Browser cant play this video.
      </video>
      <Image src='/blender_community_badge_orange.png' width={75} height={75} alt="Blender Community Badge" className="absolute -top-2 left-3 select-none" />
    </section>
  )
}
