import Link from "next/link";
import { SlideIn } from "./Animate";
import Image from "next/image";

export default function Post({header, img, desc, link, timeOffset}: {header:string, img:string, desc: string, link:string, timeOffset:number}) {
  return(
    <SlideIn timeOffset={timeOffset} className="p-1 max-w-80 lg:w-72 group self-stretch mx-auto">
      <Link href={link}>
        <Image src={img} alt={img} width={500} height={500} className="rounded-md h-40 object-cover group-hover:scale-105 transition-all" />
        <h3 className="uppercase my-1 font-medium text-white/90 ml-2 group-hover:text-blue-500 text-pretty ">{header}</h3>
        <p className="text-sm ml-2 text-white/60 text-pretty ">{desc}</p>
      </Link>
    </SlideIn>
  )
}