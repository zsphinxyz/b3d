import Hero from "@/components/hero";
import Nav from "@/components/nav";
import News from "@/components/news";
import Features from "@/components/features";
import Free from "@/components/free";
export default function Home() {
  return (
    <main className="w-full min-h-dvh bg-neutral-100 flex flex-col ">
      <Nav />
      <section className="cursor-default w-full flex flex-col gap-10 max-w-screen-2xl mx-auto">
        <Hero />
        <Free /> 
        <Features />
        <News />
      </section>
    </main>
  );
}
