import { TextBlurAni } from './Animate'
import Card from './card'

export default function More() {
  return (
    <section className="px-3">
      <div className="transparent my-10 text-white px-3 py-5 rounded-lg">
        <TextBlurAni className='text-center text-5xl font-black mb-7' text='Elevate Your 3D Experience' />
        <ul className="flex flex-col lg:flex-row *:min-h-52 lg:*:min-h-96 *:basis-1/5 gap-3 overflow-hidden">

          <Card timeOffset={0.2} header="VFX" link="https://www.blender.org/features/vfx/" 
                imgClass="bg-[url('/vfx.jpg'),linear-gradient(to_right,teal,#fff0)] lg:bg-[url('/vfx.jpg'),linear-gradient(to_top,teal,#fff0)] lg:[background-position:calc(100%+50px)]" reverse={false}>
            <li>Compositing</li>
            <li>Motion Tracking</li>
            <li>Real-time Preview</li>
          </Card>

          <Card timeOffset={0.4} header="Story Art" link="https://www.blender.org/features/story-artist/" 
                imgClass="bg-[url('/story.jpg'),linear-gradient(to_right,#fff0,#872010)] lg:bg-[url('/story.jpg'),linear-gradient(to_top,#872010,#fff0)] bg-top" reverse>
            <li>Grease Pencil</li>
            <li>Modes</li>
            <li>Effects</li>
          </Card>

          <Card timeOffset={0.6} header="Editing" link="https://www.blender.org/features/video-editing/" 
                imgClass="bg-[url('/editing.jpg'),linear-gradient(to_right,#102e53,#fff0)] lg:bg-[url('/editing.jpg'),linear-gradient(to_top,#102e53,#fff0)]" reverse={false}>
            <li>Preview</li>
            <li>Audio Mixing</li>
            <li>Grade</li>
          </Card>

          <Card timeOffset={0.8} header="Scripting" link="https://www.blender.org/features/scripting/" 
                imgClass="bg-[url('/script.jpg'),linear-gradient(to_right,#fff0,#082929)] lg:bg-[url('/script.jpg'),linear-gradient(to_top,#082929,#fff0)]" reverse>
            <li>Add-ons</li>
            <li>Extensions</li>
            <li>Import & Export</li>
          </Card>

          <Card timeOffset={1} header="Interface" link="https://www.blender.org/features/interface/" 
                imgClass="bg-[url('/interface.jpg'),linear-gradient(to_right,#151515,#fff0)] lg:bg-[url('/interface.jpg'),linear-gradient(to_top,#151515,#fff0)]" reverse={false}>
            <li>Customization</li>
            <li>Keymap</li>
            <li>Preferences</li>
          </Card>
          
        </ul>
      </div>
      </section>
  )
}
