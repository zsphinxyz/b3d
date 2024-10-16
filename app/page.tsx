import Hero from "@/components/hero";
import Nav from "@/components/nav";
import News from "@/components/news";
import Features from "@/components/features";
import Free from "@/components/free";
import More from "@/components/more";
import FreeSoftware from "@/components/freeSoftware";
import Industry from "@/components/industry";

export default function Home() {
  return (
    <main className="w-full min-h-dvh h-[20dvh] bg-neutral-100 flex flex-col overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Nav />
      <section className="cursor-default w-full flex flex-col gap-10 max-w-screen-2xl mx-auto">
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
          <p className="text-center py-2 bg-green-300 text-xl text-green-700 my-5">In progress</p>
        </section>
      </section>

    </main>
  );
}
