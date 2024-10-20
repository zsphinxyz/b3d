import Hero from "@/components/hero";
import Nav from "@/components/nav";
import News from "@/components/news";
import Features from "@/components/features";
import Free from "@/components/free";
import More from "@/components/more";
import FreeSoftware from "@/components/freeSoftware";
import Industry from "@/components/industry";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-dvh h-[20dvh] bg-neutral-100 flex flex-col overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Nav />

      <a href="/#b3d" title="Go to Top" className="size-8 rounded-full text-white opacity-60 hover:opacity-90 bg-neutral-500 hover:scale-105 transition fixed right-5 bottom-16 sm:bottom-10 flex shrink-0 items-center justify-center z-50 ">
        ▲
      </a>

      <section className="cursor-default w-full flex flex-col gap-10 max-w-screen-2xl mx-auto ">
        <Hero />

        <Free /> 
        <Features />
        <More />
      </section>

      <section className="bg-black w-full h-1 snap-start snap-normal select-none pointer-events-none">
        .
      </section>

      <section className="bg-black text-neutral-300">
        <section className="max-w-screen-2xl mx-auto ">
          <FreeSoftware />
          <Industry />
          <News />
        </section>
      </section>

      <section className="w-full bg-[#292d32]">
        <Footer />
      </section>

    </main>
  );
}
