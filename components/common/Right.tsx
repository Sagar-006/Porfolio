import { About } from "../Landing/About";
import { Skills } from "../Landing/Skills";

export function Right (){
    return (
    <div className="border min-h-screen border-red-500  w-[600px]">
        {/* About */}
        <div className="w-full h-20 border flex flex-col gap-y-4">
        <About/>
        <Skills/>
        </div>
    </div>
    )
}