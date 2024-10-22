import Hero from "@/components/hero";
import Nav from "@/components/nav";
import News from "@/components/news";
import Features from "@/components/features";
import Free from "@/components/free";
import More from "@/components/more";
import FreeSoftware from "@/components/freeSoftware";
import Industry from "@/components/industry";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Loading from "./loading";
import GoTop from "@/components/gotop";

export default function Home() {
  return (
    <main className="w-full min-h-dvh h-[20dvh] bg-neutral-100 flex flex-col overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Nav />

      <GoTop />

      <section className="cursor-default w-full flex flex-col gap-10 max-w-screen-2xl mx-auto ">
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>

        <Free /> 

        <Suspense fallback={<Loading />}>
          <Features />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <More />
        </Suspense>
      </section>

      <section className="bg-black w-full h-1 snap-start snap-normal select-none pointer-events-none">
        .
      </section>

      <section className="bg-black text-neutral-300">
        <section className="max-w-screen-2xl mx-auto ">
          <Suspense fallback={<Loading />}>
            <FreeSoftware />
          </Suspense>

        <Suspense fallback={<Loading />}>
          <Industry />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <News />
        </Suspense>
        </section>
      </section>

      <section className="w-full bg-[#292d32]">
        <Footer />
      </section>

    </main>
  );
}
