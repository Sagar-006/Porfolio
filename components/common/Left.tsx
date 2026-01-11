import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../Ui/Button";
import { TbWorld } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { AvailabilityBadge } from "../Ui/availabilityBadge";
import { TypeAnime } from "./TypeAnime";
import { SiReaddotcv } from "react-icons/si";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
import { Container } from "./Container";
import WorldIcon from '../Ui/world-icon'
import SendIcon from "../Ui/send-icon";


export function Left() {
  return (
    
      <div className=" main  rounded-2xl w-full   md:w-50 h-auto md:h-48  tracking-tighter leading-tight flex flex-row md:flex-col gap-y-2 items-center border border-red-600 ">
        <div className=" first-child   bg-white text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 flex gap-x-2  md:flex-col gap-y-2.5 p-3 md:p-2 rounded-xl border ">
          <div className=" text-center  w-full flex px-1">
            <Image
              className="rounded-lg object-cover  w-28 h-full
      md:w-[180px] md:h-[193px]"
              src={"/Profile2.jpeg"}
              alt="Profile"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <div >
              <h1 className="text-[24px] px-1 font-semibold text-shadow-amber-50 ">
                Hello I'm <br /> <TypeAnime />
              </h1>
            </div>

            <p className="text-md px-1">
              Full stack developer <br /> & Web Designer.
            </p>
            <div>
              <AvailabilityBadge />
            </div>
            <div className="flex item-center text-sm gap-x-1 px-1">
              <MdOutlineLocationOn /> <span>Pune,Maharashtra</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex border bg-white dark:bg-black text-black dark:text-white border-gray-200 dark:border-gray-800 flex-col gap-y-2.5 px-2 py-2 w-full rounded-xl">
          <div className="text-sm flex items-center gap-x-1">
            <WorldIcon className='w-4 h-4 '/>
            <Link href={"https://sagarb.vercel.app/"}>
              <p className="weight-">sagarb.com</p>
            </Link>
          </div>
          <div className="flex text-sm items-center gap-x-1">
            <FiSmartphone />
            <p>9545431913</p>
          </div>
          <div className="text-sm flex items-center gap-x-1">
            <AiOutlineMail className="shrink-0" />
            <p className="truncate">sagarbiradar7030@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Link
                href="Sagar's.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"default"}
                  className="bg-white inline-flex items-center gap-x-1 hover:bg-white border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 cursor-pointer w-46"
                  size={"lg"}
                >
                  <SiReaddotcv />
                  Resume / CV
                </Button>
              </Link>
            </div>
            <div rel="noopener noreferrer">
              <Link href={"/contact"}>
                <Button
                  className="w-46 inline-flex gap-x-0.5  items-center bg-black text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
                  variant={"secondary"}
                  size={"lg"}
                >
                  <SendIcon className='' ></SendIcon>
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}
