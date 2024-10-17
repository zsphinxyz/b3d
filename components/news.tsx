import Image from "next/image";
import Link from "next/link";

function Post({header, img, desc, link}: {header:string, img:string, desc: string, link:string}) {
  return(
    <Link href={link} className="p-1 max-w-80 lg:max-w-72 group self-stretch mx-auto">
      <Image src={img} alt={img} width={500} height={500} className="rounded-md h-40 object-cover group-hover:scale-105 transition-all" />
      <h3 className="uppercase my-1 font-medium text-white/90 ml-2 group-hover:text-blue-500 text-pretty ">{header}</h3>
      <p className="text-sm ml-2 text-white/60 text-pretty ">{desc}</p>
    </Link>
  )
}

export default function News() {
  return (
    <section className="pb-10">
      <Link href='https://www.blender.org/news/' className="text-3xl w-max block font-bold ml-2 md:ml-10 mt-10 mb-3 underline underline-offset-4 hover:text-blue-500">Latest NEWS</Link>

      <div className="flex flex-col md:flex-row items-center gap-3 p-3 justify-center flex-wrap">
        <Link href='https://www.blender.org/press/blender-survey-2024/' className="pb-2 block bg-white/5 hover:bg-white/10 rounded-md overflow-hidden group">
          <Image src='/blender_survey_2024.webp' alt="Blender Seryvey 2024" width={500} height={500} className="rounded-md h-52 lg:h-64 object-cover group-hover:scale-105 transition-all" />
          <p className="uppercase text-xs bg-white/10 w-max p-1 rounded-sm my-2 font-medium text-white/60 ml-2">announcement</p>
          <p className="text-lg ml-2">Join The Officeal Blender Survery 2024!</p>
        </Link>

        <Link href='https://www.blender.org/press/blender-foundation-annual-report-2023/' className="pb-2 block bg-white/5 hover:bg-white/10 rounded-md overflow-hidden group">
          <Image src='/blender_annual_report.webp' alt="Blender Annual Report" width={500} height={500} className="rounded-md h-52 lg:h-64 object-cover group-hover:scale-105 transition-all" />
          <p className="uppercase text-xs bg-white/10 w-max p-1 rounded-sm my-2 font-medium text-white/60 ml-2">blender foundation</p>
          <p className="text-lg ml-2">2023 Annual Report</p>
        </Link>

        <div className="basis-full w-full">
          <Link href='https://www.blender.org/category/news/' className="bg-neutral-300/90 hover:bg-neutral-200 font-medium px-2 py-1 w-max rounded-sm ml-auto block mx-auto mt-3 text-neutral-800">More News</Link>
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      <Link href='https://studio.blender.org/?utm_medium=homepage' className="text-3xl w-max block font-bold ml-2 md:ml-10 mt-10 mb-3 underline underline-offset-4 hover:text-blue-500">Blender Studio</Link>

      <div className="flex flex-col gap-5 md:gap-0 min-[700px]:flex-row flex-wrap justify-center items-center">
        <Post img="/BS_01.jpg" link="https://studio.blender.org/blog/benchmarking-version-control-git-lfs-svn-mercurial/?utm_medium=homepage" header="Benchmarking Version Control Solutions for Creative Collaboration" desc="A performance comparison between Git and SVN for short movie productions" />
        <Post img="/BS_02.jpg" link="https://studio.blender.org/blog/rigging-shaders/?utm_medium=homepage" header="Rigging Shaders" desc="Learn about our method to control properties of shaders on linked animated characters." />
        <Post img="/BS_03.jpg" link="https://studio.blender.org/blog/fighting-grease-pencil/?utm_medium=homepage" header="Fighting (with) Grease Pencil" desc="Animating a boxer in 2D, using Grease Pencil, from a 3D animator's perspective." />
        <Post img="/BS_04.jpg" link="https://studio.blender.org/blog/wing-it-a-lesson-in-the-mixture-of-layout-and-previs/?utm_medium=homepage" header="Wing It! A Lesson in the Mixture of Layout and Previs" desc="Director of Animation Hjalti shares his knowledge and experience on layout and previs, key steps in productions." />

        <div className="basis-full w-full">
          <Link href='https://studio.blender.org/?utm_medium=homepage' className="bg-neutral-300/90 hover:bg-neutral-200 font-medium px-2 py-1 w-max rounded-sm ml-auto block mr-10 mt-3 text-neutral-800">More Updates</Link>
        </div>
      </div>

      <hr className="my-10 border-white/10" />


      <Link href='https://code.blender.org/?utm_medium=homepage' className="text-3xl w-max block font-bold ml-2 md:ml-10 mt-10 mb-3 underline underline-offset-4 hover:text-blue-500">Blender Development</Link>

      <div className="flex flex-col gap-5 md:gap-0 min-[700px]:flex-row flex-wrap justify-center md:justify-start items-center">
        <Post img="/BDev_01.jpg" link="https://studio.blender.org/blog/benchmarking-version-control-git-lfs-svn-mercurial/?utm_medium=homepage" header="Blender 4.3 Beta is here!" desc="Development of Blender 4.3 has reached the Beta stage. Please test and report any issues you may find!" />
        <Post img="/BDev_02.jpg" link="https://studio.blender.org/blog/rigging-shaders/?utm_medium=homepage" header="Results from Google Summer of Code 2024" desc="Discover the final reports of the six exciting projects of GSoC 2024." />
        <Post img="/BDev_03.jpg" link="https://studio.blender.org/blog/fighting-grease-pencil/?utm_medium=homepage" header="VSE Workshop: August 2024" desc="Write up on the workshop around the Video Sequence Editor that took place at the Blender HQ in August 2024." />
        <Post img="/BDev_04.jpg" link="https://studio.blender.org/blog/wing-it-a-lesson-in-the-mixture-of-layout-and-previs/?utm_medium=homepage" header="Online Assets Workshop Report" desc="Remote Asset Libraries design and improvements on assets organization." />

        <div className="basis-full w-full">
          <Link href='https://code.blender.org/?utm_medium=homepage' className="bg-neutral-300/90 hover:bg-neutral-200 font-medium px-2 py-1 w-max rounded-sm ml-auto block mr-10 mt-3 text-neutral-800">More Posts</Link>
        </div>
      </div>

      <div className="w-max mx-auto mt-5">
        <p className="inline-block mr-3 font-light">The Freedom to Create.</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md shadow-blue-500/80">Download Blender</button>
      </div>


    </section>
  )
}
