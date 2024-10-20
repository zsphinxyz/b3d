
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="bg-white top-0 z-50"
    >
        <section className="flex justify-between items-center bg-white w-full text-black md:px-14 px-3 py-4 max-w-screen-2xl mx-auto">
          <div className=" ">
            <Image src='/blender_logo.png' id="b3d" alt="blender logo" width={120} height={10} className="object-contain size-auto" />
          </div>

          <div className="">
            <ul className=" gap-3 md:gap-5 text-zinc-500 items-center hidden sm:flex font-sans font-medium text-sm hover:*:text-blue-500 cursor-pointer select-none">
              <li className="">Features</li>
              <li className="">Download</li>
              <li className="">Support</li>
              <li className="">Get Involved</li>
              <li className="">About</li>
              <li className="">Jobs</li>
              <li> <button className="glow bg-blue-500 px-3 py-1 rounded-md text-white hover:bg-blue-600 transition">💖Donate</button></li>
            </ul>
          </div>
      </section>
      </nav>
  )
}
