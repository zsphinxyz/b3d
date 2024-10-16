import Image from "next/image"

const imgs = [
  {logo: '/khronos.png', link: 'https://khronos.org/'},
  {logo: '/linux_foundation.png', link: 'https://www.linuxfoundation.org/'},
  {logo: '/open_invention_network.png', link: 'https://openinventionnetwork.com/'},
  {logo: '/academy_software_foundation.png', link: 'https://www.aswf.io/'},
]

export default function Industry() {
  
  return (
    <section className="px-5 cursor-default flex flex-col gap-5 text-neutral-400">

      <section className="p-5 border border-blue-500 rounded-lg bg-blue-700/5">
        <h1 className="text-3xl sm:text-5xl font-black text-blue-500 mb-3">Part of the Industry</h1>
        <p className="md:text-lg md:w-9/12">
          Blender is a member of ASWF, Khronos, Linux Foundation and OIN. It&apos;s also well supported by major hardware vendors such as AMD, Apple, Intel, and NVIDIA.
        </p>

        <div className="flex gap-5 items-center justify-around flex-wrap">
          {
            imgs.map( img => (
              <a key={img.link} href={img.link}>
                <Image draggable={false} src={img.logo} alt={img.logo.replace('.png', '')} width={120} height={120} className="md:size-40 invert flex-shrink-0 p-3 object-contain aspect-square" />
              </a> 
            ))
          }
        </div>
      </section>

      <section className="p-5 border border-yellow-500 rounded-lg bg-yellow-700/5">
          <h1 className="text-3xl sm:text-5xl font-black text-yellow-500 mb-3">The Ecosystem</h1>
          <p className="md:text-lg md:w-9/12 mb-10">
            Countless communities and thriving businesses are built around Blender. <br />Together, these tutorial makers and content creators, add-on developers and global marketplaces form an ever-expanding ecosystem.
          </p>

          <div className="mt-2 flex flex-wrap gap-2 justify-start lg:justify-around items-center">
            <a href="https://www.blender.org/community/" target="_blank" className="text-lg w-[442px] h-[109px] border-[0.1px] border-white/10 flex gap-2 p-4 bg-black">
              <p className="text-yellow-500">
                <Image draggable={false} src='/community_svg.svg' alt="blender on github" width={20} height={20} className="opacity-70 inline"/>
                  <span className="ml-2 font-medium text-sm sm:text-base">Blender Communities</span>
                <span className="text-white/50 text-xs sm:text-sm block mt-3">Independent Blender groups all around the globe.</span>
              </p>
            </a>

            <a href="https://projects.blender.org/blender/blender.git" target="_blank">
              <Image draggable={false} src='/blender_git.svg' alt="blender on github" width={442} height={109} className="invert"/>
            </a>
          </div>
      </section>

      <section className="p-5 border border-purple-500 rounded-lg bg-purple-500/5">
        <h1 className="text-3xl sm:text-5xl font-black text-purple-500 mb-3">It&apos;s about People.</h1>
        <p className="md:text-lg md:w-9/12 mb-10">
          Designers, developers, engineers, artists. All driven by passion. All using Blender to make an impact.
        </p>

        <div className="mt-2 flex flex-wrap justify-evenly items-center lg:max-w-screen-lg gap-2 lg:gap-2">

          <a href="https://www.youtube.com/playlist?list=PLa1F2ddGya_87HJ72v_IgKUTNLIXSMfvB" target="_blank" className="w-full min-h-32 max-h-36 md:max-h-full md:w-40 lg:w-52 border border-white/10 hover:bg-white/5 p-1 rounded-md shrink-0 mx-auto flex gap-2 md:flex-col self-stretch">
            <Image src='/pablo.jpg' alt="story" width={500} height={500} className="w-20 h-auto object-cover rounded-md self-stretch md:w-40 lg:w-52" />
            <div className="overflow-hidden">
              <p className="text-xl md:text-sm lg:text-base md:text-center font-medium mb-2 text-neutral-500">Connecting Blender Community</p>
              <span className="text-sm block leading-tight md:hidden">Weekly live show highlighting what's new in Blender and its community. Hosted by Pablo Vazquez since 2018.</span>
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=23m0eG1Qr1c" target="_blank" className="w-full min-h-32 max-h-36 md:max-h-full md:w-40 lg:w-52 border border-white/10 hover:bg-white/5 p-1 rounded-md shrink-0 mx-auto flex gap-2 md:flex-col self-stretch">
            <Image src='/daniel_martinez.jpg' alt="story" width={500} height={500} className="w-20 h-auto object-left object-cover rounded-md self-stretch md:w-40 lg:w-52" />
            <div className="overflow-hidden">
              <p className="text-xl md:text-sm lg:text-base md:text-center font-medium mb-2 text-neutral-500">Showcasing Blender at industry events</p>
              <span className="text-sm block leading-tight md:hidden">The Blender team is back from the Annecy International Animation Film Festival 2018 and MIFA, the industry marketplace which takes place during the festival.</span>
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=whPWKecazgM" target="_blank" className="w-full min-h-32 max-h-36 md:max-h-full md:w-40 lg:w-52 border border-white/10 hover:bg-white/5 p-1 rounded-md shrink-0 mx-auto flex gap-2 md:flex-col self-stretch">
            <Image src='/ian_hubert.jpg' alt="Ian Hubert" width={500} height={500} className="w-20 h-auto object-cover rounded-md self-stretch md:w-40 lg:w-52" />
            <div className="overflow-hidden">
              <p className="text-xl md:text-sm lg:text-base md:text-center font-medium mb-2 text-neutral-500">Creating Worlds at BCON19</p>
              <span className="text-sm block leading-tight md:hidden">World Building in Blender Conference 2019 (BCON19) - Ian Hubert</span>
            </div>
          </a>

          <a href="https://mastodon.social/tags/geometrynodes" target="_blank" className="w-full min-h-32 max-h-36 md:max-h-full md:w-40 lg:w-52 border border-white/10 hover:bg-white/5 p-1 rounded-md shrink-0 mx-auto flex gap-2 md:flex-col self-stretch">
            <Image src='/nodevember.jpg' alt="story" width={500} height={500} className="w-20 h-auto object-left object-cover rounded-md self-stretch md:w-40 lg:w-52" />
            <div className="overflow-hidden">
              <p className="text-xl md:text-sm lg:text-base md:text-center font-medium mb-2 text-neutral-500">The demo scene with Nodevember</p>
              <span className="text-sm block leading-tight md:hidden">Nodevember is a whole month dedicated to everything 'nodes'. It is about creating something procedural every (other) day and sharing it online.</span>
            </div>
          </a>

        </div>

      </section>

    </section>
  )
}
