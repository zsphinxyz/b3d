import Image from "next/image";
import React from "react";

export default function UI() {
  return (
    <>
      <div className="absolute top-0 bg-black/10 text-white p-2 rounded-md w-full gap-1 py-2 flex justify-between cursor-default select-none">

        <div className=" h-5 rounded-sm flex items-center gap-2">
          <span title='Editor' className="bg-[#121212] flex h-5 rounded-sm hover:bg-[#313131]">
            <Image src="/icons/view3d.svg" alt="view3d" width={20} height={20} />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} />
          </span>
          <span title='Interaction mode' className="bg-[#141414] flex items-center text-nowrap h-5 rounded-sm text-xs leading-5 text-center text-zinc-200 hover:bg-[#313131]">
            <Image src="/icons/object_data.svg" alt="object mode" width={20} height={20} />
            Object Mode
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} />
          </span>
          <span className=" h-5 rounded-sm hidden sm:inline-block">
            <ul className='flex text-xs *:px-1 *:rounded-sm leading-5 text-zinc-200 hover:*:bg-blue-500/30'>
              <li>View</li>
              <li>Select</li>
              <li>Add</li>
              <li>Object</li>
            </ul>
          </span>
        </div>

        <div className=" h-5 rounded-sm text-xs leading-5 md:flex gap-1 items-center hidden">
          <span title='orientation' className="bg-[#141414] flex items-center rounded-sm hover:bg-[#313131]">
            <Image src="/icons/orientation_global.svg" alt="global" width={20} height={20} />
            Global
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} />
          </span>
          <span title='pivot' className="bg-[#141414] h-5 rounded-sm flex items-center hover:bg-[#313131]">
            <Image src="/icons/pivot_median.svg" alt="pivot median" width={20} height={20} />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} />
          </span>
          <span className="bg-[#141414] w-10 h-5 rounded-sm flex items-center hover:bg-[#313131]">
            <Image src="/icons/snap_off.svg" title='snap' alt="snap" width={20} height={20} className='bg-zinc-500' />
            <Image src="/icons/snap_increment.svg" title='snap' alt="snap" width={20} height={20} />
          </span>
          <span className="bg-zinc-500 h-5 rounded-sm flex items-center">
            <Image src="/icons/proportional_off.svg" title='proportional' alt="proportional" width={20} height={20} />
            <span className="bg-[#141414] flex items-center hover:bg-[#313131]">
              <Image src="/icons/smooth_curve.svg" title='smooth' alt="smooth" width={20} height={20} />
              <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} />
            </span>
          </span>
        </div>

        <div className=" h-5 rounded-sm text-xs leading-5 flex gap-1 items-center">
          <span title='visibility' className="bg-[#141414] rounded-sm hover:bg-[#313131] flex items-center">
            <Image src="/icons/visual_selection_selectable.svg" alt="visual selection" width={22} height={22} />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} className='-ml-1' />
          </span>
          <span title='Gizmos' className="bg-[#141414] rounded-sm hover:bg-[#313131] flex items-center">
            <Image src="/icons/gizmo.svg" alt="gizmo" width={22} height={22} className='bg-blue-500/50' />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} className='-ml-1' />
          </span>
          <span title='Overlays' className="bg-[#141414] rounded-sm hover:bg-[#313131] flex items-center">
            <Image src="/icons/overlay.svg" alt="overlay" width={22} height={22} className='bg-blue-500/50' />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} className='-ml-1' />
          </span>

          <span className="bg-zinc-500 w-5 h-5 rounded-sm">
            <Image src="/icons/x_ray.svg" alt="x ray" width={22} height={22} />
          </span>
          <span className="bg-zinc-500 h-5 rounded-sm flex divide-x divide-zinc-600 *:scale-110 hover:*:bg-zinc-700">
            <Image title='wire' src="/icons/shading_wire.svg" alt="wire" width={22} height={22} />
            <Image title='solid' src="/icons/shading_solid.svg" alt="solid" width={22} height={22} className='bg-blue-500/50' />
            <Image title='texture' src="/icons/shading_texture.svg" alt="texture" width={22} height={22} />
            <Image title='render' src="/icons/shading_rendered.svg" alt="render" width={22} height={22} />
            <Image src="/icons/downarrow_hlt.svg" alt="downarrow" width={18} height={18} className='bg-[#141414]' />
          </span>
        </div>
      </div>

      <div className="absolute top-40 right-3 flex flex-col gap-2 *:rounded-full select-none">
        <div title="zoom" className="bg-[#141414] size-8 flex items-center justify-center hover:bg-[#1f1f1f]">
          <Image src="/icons/view_zoom.svg" alt="zoom" width={25} height={25} />
        </div>
        <div title="pan" className="bg-[#141414] size-8 flex items-center justify-center hover:bg-[#1f1f1f]">
          <Image src="/icons/view_pan.svg" alt="pan" width={25} height={25} />
        </div>
        <div title="camera" className="bg-[#141414] size-8 flex items-center justify-center hover:bg-[#1f1f1f]">
          <Image src="/icons/view_camera.svg" alt="camera" width={25} height={25} />
        </div>
        <div title="perspective" className="bg-[#141414] size-8 flex items-center justify-center hover:bg-[#1f1f1f]">
          <Image src="/icons/view_perspective.svg" alt="perspective" width={25} height={25} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-5 cursor-default bg-gradient-to-t from-black/50 to-transparent w-full">

        <h1 className="text-5xl font-extrabold">Blender 4.2 LTS</h1>
        <p className="my-3 text-lg">Packed with features and improvements ready to <br /> power your projects for the next two years.</p>
        <div className="flex gap-3 select-none">
          <button className="bg-zinc-300 hover:bg-zinc-50 transition text-black px-3 py-1 rounded-md font-medium">Download</button>
          <button className="bg-zinc-200/30 hover:bg-zinc-200/40 transition text-white px-3 py-1 rounded-md font-medium">What&apos; New</button>
        </div>

      </div>
    </>
  )
}
