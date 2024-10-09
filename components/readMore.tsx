import Image from "next/image";

export default function ReadMore({link}: {link:string}) {
  return (
    <a href={link} className="text-lg text-blue-700 font-medium hover:underline uppercase group">
      Read More <Image src='/icons/downarrow_hlt.svg' width={25} height={25} alt="arrow" className="-ml-2 mb-1 invert -rotate-90 inline group-hover:ml-0 transition-all" />
    </a>
  )
}
