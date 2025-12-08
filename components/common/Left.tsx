import Image from "next/image";
import { Heading } from "../Ui/Heading";
import { FaLocationDot } from "react-icons/fa6";

export function Left(){
    return (
      <div className="border-0 rounded-2xl tracking-tighter leading-tight">
        <div className="bg-white flex flex-col gap-y-3 p-2 w-[220px] rounded-lg">
          <div className=" text-center  w-full">
            <Image
              className="rounded-lg object-cover h-50"
              src={"/images/profile.avif"}
              alt="Profile"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-xl font-semibold text-shadow-amber-50">
            Hello I'm <br /> Sagar Biradar
          </h1>
          <p>
            Web Designer,Content <br /> Creator & writer.
          </p>
          <Heading className="text-gray-800 py-0.5 flex ">
            Available for work.
          </Heading>
          <div className="flex item-center">
            <FaLocationDot className="text-gray-600 " /> <span>Pune,Maharashtra</span>
          </div>
        </div>
        <div></div>
      </div>
    );
}