import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <section>
      <h1 className="text-5xl font-bold px-2 md:px-10 py-5 mt-10 underline underline-offset-4">Latest NEWS</h1>

      <div className="flex flex-col md:flex-row items-center gap-3 p-3 justify-center">
        <Link href='https://www.blender.org/press/blender-survey-2024/' className="pb-2 block bg-white/5 hover:bg-white/10 rounded-md overflow-hidden group">
          <Image src='/blender_survey_2024.webp' alt="Blender Seryvey 2024" width={500} height={500} className="rounded-md h-52 object-cover group-hover:scale-105 transition-all" />
          <p className="uppercase text-xs bg-white/10 w-max p-1 rounded-sm my-2 font-medium text-white/60 ml-2">announcement</p>
          <p className="text-lg ml-2">Join The Officeal Blender Survery 2024!</p>
        </Link>

        <Link href='https://www.blender.org/press/blender-foundation-annual-report-2023/' className="pb-2 block bg-white/5 hover:bg-white/10 rounded-md overflow-hidden group">
          <Image src='/blender_annual_report.webp' alt="Blender Annual Report" width={500} height={500} className="rounded-md h-52 object-cover group-hover:scale-105 transition-all" />
          <p className="uppercase text-xs bg-white/10 w-max p-1 rounded-sm my-2 font-medium text-white/60 ml-2">blender foundation</p>
          <p className="text-lg ml-2">2023 Annual Report</p>
        </Link>
      </div>

    </section>
  )
}
