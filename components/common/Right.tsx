import { About } from "../Landing/About";
import { TechStack } from "../Landing/TechStack";
import { Skills } from "../Landing/Skills";
import { Experience } from "../Landing/Experience";
import Projects from "../Landing/Projects";
import { Education } from "../Landing/Education";
import { Links } from "../Landing/Links";
import { Quote } from "../Landing/Quote";

export function Right (){
    return (
      <div className=" min-h-screen w-[600px]">
        {/* About */}
        <div className="w-full   flex flex-col gap-y-4">
          <About />
          <Skills />
          <Experience />
          <TechStack />
          <Projects/>
          <Education/>
          <Links/>
          <Quote/>
          
        </div>
      </div>
    );
}