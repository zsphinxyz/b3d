
import {TextBlurAni} from "./Animate";
import Rendering from "./features/rendering";
import Modeling from "./features/modeling";
import Sculpting from "./features/sculpting";
import AniRig from "./features/aniRig";

export default function Features() {
  return (
    <section className="px-2 md:px-10">
      <TextBlurAni text="Everything You Need" className="text-5xl sm:text-6xl md:text-7xl font-black text-stone-700 mb-20 text-center" />

      <Rendering />
      <hr className="my-10" />
      <Modeling />
      <hr className="my-10" />
      <Sculpting />
      <hr className="my-10" />
      <AniRig />
      <hr className="my-10" />
      
    </section>
  )
}
