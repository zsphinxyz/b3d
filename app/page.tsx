import Hero from "@/components/hero";
import Nav from "@/components/nav";
import News from "@/components/news";
import Features from "@/components/features";
export default function Home() {
  return (
    <section className="w-full min-h-dvh bg-neutral-100 flex flex-col ">
      <Nav />
      <section className="cursor-default w-full flex flex-col gap-10 max-w-screen-2xl mx-auto">
        <Hero />
        <Features />
        <News />
      </section>
    </section>
  );
}
