import { SlideIn } from './Animate'

export default function Card({header, link, children, imgClass, reverse, timeOffset}: {header:string, link:string, children:React.ReactNode, imgClass:string, reverse:boolean, timeOffset:number}) {
  return (
    <SlideIn timeOffset={timeOffset} className={`flex flex-col bg-blend-color-burn [background-size:auto_100%] sm:[background-size:100%_auto] lg:[background-size:auto_100%] bg-center px-5 ${imgClass} hover:[background-size:auto_calc(100%+25px)] sm:hover:[background-size:calc(100%+25px)_auto] lg:hover:[background-size:auto_calc(100%+25px)] [transition:background-size_200ms_ease] rounded-mg border-neutral-500 border`}>
      <div className={`my-auto ${reverse ? 'ml-auto' : 'ml-0'} lg:ml-0 lg:mb-1 lg:mt-auto`}>
        <h3 className="text-3xl font-black">{header}</h3>
        <ul className="text-white/80 list-disc list-inside ml-3 mt-2">
          {children}
        </ul>
      </div>
        <a href={link} className={`my-3 block ${reverse ? 'ml-auto' : 'ml-0'} text-neutral-800 bg-white/70 w-max px-2 py-1 hover:bg-white/80 rounded-md font-medium select-none lg:mx-auto`}>Learn More</a>
    </SlideIn>
  )
}
