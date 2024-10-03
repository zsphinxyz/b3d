import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-dvh bg-[#252525] flex flex-col ">
      <nav className="bg-white">
        <section className="flex justify-between items-center bg-white w-full text-black md:px-7 px-3 py-4 max-w-screen-2xl mx-auto">
          <div className=" ">
            <Image src='/blender_logo.png' alt="blender logo" width={120} height={10} className=" object-contain" />
          </div>

          <div className="">
            <ul className=" gap-3 md:gap-5 text-zinc-500 items-center hidden sm:flex font-medium text-sm hover:*:text-blue-500 cursor-pointer">
              <li className="">Features</li>
              <li className="">Download</li>
              <li className="">Support</li>
              <li className="">Get Involved</li>
              <li className="">About</li>
              <li className="">Jobs</li>
              <li> <button className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md shadow-blue-500/80">💖Donate</button></li>
            </ul>
          </div>
      </section>
      </nav>

      <section className="bg-white pb-10">
        <Hero />
      </section>
    </section>
  );
}
