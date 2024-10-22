import Image from 'next/image'
import React from 'react'

function Block({text, href, title}: {text:string, href:string, title:string}) {
  return(
    <li title={title} className="hover:underline inline">
      <a href={href} className="text-neutral-400 font-light text-sm">{text}</a> <br />
    </li>
  )
}

export default function Footer() {
  return (
  <footer className="bg-[#292d32] text-neutral-300 pt-10 pb-5 px-3 lg:px-5 w-full block max-w-screen-2xl mx-auto">
  <div className="">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      <div className="">
        <a href="https://www.blender.org/download/" className="font-bold">Download</a>
        <ul className='mb-2'>
            <Block text='Latest Blender' href="https://www.blender.org/download/" title="Download Blender" />
            <Block text='Blender LTS' href="https://www.blender.org/download/lts/" title="Blender Long-term Support"/>
            <Block text='Blender Benchmark' href="https://opendata.blender.org/?utm_medium=www-footer" title="Blender Benchmark"/>
            <Block text='Previous Versions' href="https://www.blender.org/download/previous-versions/" title="Previous Versions"/>
            <Block text='Experimental Builds' href="https://builder.blender.org/download/daily/" title="Experimental Builds"/>
            <Block text='Source Code' href="https://projects.blender.org/blender/blender?utm_medium=www-footer" title="Source Code"/>
            <Block text='Release Notes' href="https://www.blender.org/download/releases/" title="Release Notes"/>
            <Block text='Requirements' href="https://www.blender.org/download/requirements/" title="Requirements"/>
        </ul>

        <div className="font-bold">Organization</div>
        <ul className='mb-2'>
            <Block text='People' href="https://www.blender.org/about/people/" title="People"/>
            <Block text='Jobs' href="https://www.blender.org/jobs/" title="Jobs"/>
        </ul>
      </div>
      <div className=""><a href="https://www.blender.org/about/" className="font-bold">About</a>
        <ul className='mb-2'>
            <Block text='Blender Foundation' href="https://www.blender.org/about/foundation/" title="Blender Foundation"/>
            <Block text='Blender Institute' href="https://www.blender.org/about/institute/" title="Blender Institute"/>
            <Block text='Blender Studio' href="https://www.blender.org/about/studio/" title="Blender Studio"/>
            <Block text='License' href="https://www.blender.org/about/license/" title="License"/>
            <Block text='Logo &amp; Trademark' href="https://www.blender.org/about/logo/" title="Logo &amp; Trademark"/>
            <Block text='Credits' href="https://www.blender.org/about/credits/" title="Credits"/>
            <Block text='Privacy Policy' href="https://www.blender.org/privacy-policy/" title="Privacy Policy"/>
        </ul>

        <a href="https://www.blender.org/news/" title="Articles" className="font-bold">Articles</a>
        <ul className='mb-2'>
            <Block text='News' href="https://www.blender.org/category/news/" title="News" />
            <Block text='Press Releases' href="https://www.blender.org/category/press/" title="Press Releases" />
            <Block text='User Stories' href="https://www.blender.org/get-involved/user-stories/" title="User Stories" />
        </ul>
      </div>
      <div className=""><a href="https://www.blender.org/get-involved/" className="font-bold">Get Involved</a>
        <ul className='mb-2'>
            <Block text='Dashboard' href="https://www.blender.org/get-involved/dashboard/" title="Dashboard" />
            <Block text='Development' href="https://www.blender.org/get-involved/developers/" title="Development" />
            <Block text='Documentation' href="https://www.blender.org/get-involved/documenters/" title="Documentation" />
            <Block text='Education' href="https://www.blender.org/get-involved/" title="Education" />
        </ul>

        <a href="https://fund.blender.org/?utm_medium=www-footer" className="font-bold">Donate</a>
        <ul className='mb-2'>
            <Block text='Development Fund' href="https://fund.blender.org/?utm_medium=www-footer" title="Blender Development Fund" />
            <Block text='One-time Donations' href="https://www.blender.org/about/donations/?utm_medium=www-footer" title="One-time Donations" />
        </ul>

        <a href="https://studio.blender.org/?utm_medium=www-footer" title="Blender Studio" className="font-bold">Blender Studio</a>
        <ul className='mb-2'>
            <Block text='Films' href="https://studio.blender.org/films/?utm_medium=www-footer" title="Blender Studio Films" />
            <Block text='Training' href="https://studio.blender.org/training/?utm_medium=www-footer" title="Blender Studio Training" />
        </ul>

      </div>
      <div className=""><a href="https://developer.blender.org/?utm_medium=www-footer" className="font-bold">Developers</a>
        <ul className='mb-2'>
            <Block text='Get Started' href="https://developer.blender.org/?utm_medium=www-footer" title="Get Started" />
            <Block text='Projects' href="https://projects.blender.org/?utm_medium=www-footer" title="Projects" />
            <Block text='Docs' href="https://developer.blender.org/docs/?utm_medium=www-footer" title="Developers Docs" />
            <Block text='Blog' href="https://code.blender.org/?utm_medium=www-footer" title="Developers Blog" />
            <Block text='Forum' href="https://devtalk.blender.org/?utm_medium=www-footer" title="Developers Forum" />
            <Block text='Python API' href="https://docs.blender.org/api/current/?utm_medium=www-footer" title="Python API" />
        </ul>

        <a href="https://www.blender.org/support/" className="font-bold">Support</a>
        <ul className='mb-2'>
            <Block text='Manual' href="https://docs.blender.org/manual/?utm_medium=www-footer" title="Manual" />
            <Block text='Community' href="https://www.blender.org/community/" title="Community" />
            <Block text='FAQ' href="https://www.blender.org/support/faq/" title="FAQ" />
        </ul>

        <a href="https://conference.blender.org/" title="Blender Conference" className="font-bold">Blender Conference</a>
      </div>

      <div className="lg:border-l-2 lg:pl-7 lg:ml-20 lg:border-white/20 col-span-2">
        <a href="" className="font-bold">Follow Blender</a>
        <ul className="mb-2">
          <Image src='/social/yt.svg' alt='youtube' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='Youtube' href="https://youtube.com/BlenderFoundation" title="Blender Official Youtube Channel" />
          <Image src='/social/x.svg' alt='X' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='X' href="https://twitter.com/blender" title="Blender on X" />
          <Image src='/social/ig.svg' alt='instagram' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='Instagram' href="https://instagram.com/blender.official/" title="Blender on Instagram" />
          <Image src='/social/fb.svg' alt='facebook' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='Facebook' href="https://www.facebook.com/YourOwn3DSoftware/" title="Blender on Facebook" />
          <Image src='/social/li.svg' alt='linkedin' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='Linkedin' href="https://www.linkedin.com/company/blender-org/" title="Blender on Linkedin" />
          <Image src='/social/md.svg' alt='mastodon' width={15} height={15} className='inline-block mr-1 invert opacity-50 aspect-square' /><Block text='Mastodon' href="https://mastodon.social/@blender" title="Blender on Mastodon" />
        </ul>
      </div>
      
    </div>
  </div>
    <p className="mt-8 max-w-[320px] font-light md:max-w-full text-sm text-center text-white/50 mx-auto">Artistic freedom starts with Blender &nbsp; 💖 &nbsp; The Free and Open Source 3D Creation Suite</p>
    <p className="flex flex-col sm:flex-row gap-1 mt-5 justify-between px-3 text-sm"> 
      <span className="block ml-auto">Website by <a href="https://linktr.ee/zsphinx" target='_blank' className="underline underline-offset-2 text-blue-400">zsphinx</a> </span>
      <span className="block ml-auto">Web Contents credits: {' '}
        <a className='underline underline-offset-2 text-blue-400' target='_blank' href="https://www.blender.org/">Blender</a> and {' '}
        <a className='underline underline-offset-2 text-blue-400' target='_blank' href="https://studio.blender.org/">Blender Studio</a>
      </span>
    </p>
</footer>
  )
}
