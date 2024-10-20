
export default function Free() {
  return (

      <div className="w-full px-3">
        <div className="w-full bg-neutral-800 px-5 py-10 rounded-xl shadow-lg shadow-black/50 relative z-10 overflow-hidden [border:solid_0.25px_#ffffff77]">
          <div className="absolute bottom-2 left-2 bg-white size-20 rounded-l-full rotate-[135deg] blur-3xl z-0 pointer-events-none" />

          <h1 className="text-5xl md:text-7xl font-black text-teal-400 origin-left mb-10 [filter:drop-shadow(1px_1px_0px_white)]">Free and Open Source</h1>
          <p className="text-lg text-white mb-5">Blender is public project hosted on blender.org, licensed as GNU GPL, owned by its contributors.</p>
          <p className="text-lg text-white z-10">For that reason Blender is Free and Open Source software, forever. <a href="https://www.blender.org/about/license/" target="_blank" className='underline underline-offset-2'>Learn more</a></p>

        </div>
      </div>
  )
}
