import { BorderBeam } from "@/components/Ui/border-beam";

export default function Projects() {
  return (
    <div>
      <div className="relative w-[300px] h-[200px] bg-white rounded-xl p-4">
        {/* The animated border */}
        <BorderBeam className="rounded-xl" />

        {/* Your content */}
        <h1 className="text-xl font-bold">Hello</h1>
        <p>This has an animated border!</p>
      </div>
      <div className="relative rounded-xl bg-gray-100 p-6">
        {/* Blue Beam */}
        <BorderBeam
          className="rounded-xl"
          colorFrom="#00ddff"
          colorTo="#0077ff"
          duration={5}
        />

        {/* Pink Beam */}
        <BorderBeam
          className="rounded-xl"
          colorFrom="#ff00f5"
          colorTo="#ff77d1"
          duration={8}
          delay={1}
        />

        <h1 className="text-white">Two Border Beams 👀</h1>
      </div>
    </div>
  );
}
