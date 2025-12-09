import { About } from "../Landing/About";
import { TechStack } from "../Landing/TechStack";
import { Skills } from "../Landing/Skills";
import { Experience } from "../Landing/Experience";

export function Right (){
    return (
      <div className="border max-h-screen border-blue-800  w-[600px]">
        {/* About */}
        <div className="w-full h-20 border flex flex-col gap-y-4">
          <About />
          <Skills />
          <Experience />
          <TechStack />
          
        </div>
      </div>
    );
}