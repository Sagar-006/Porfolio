import { FiSmartphone } from "react-icons/fi";
import { Button } from "../Ui/Button";
import { SiReaddotcv } from "react-icons/si";
import Link from "next/link";
import WorldIcon from "../Ui/world-icon";
import  SendIcon from '@/components/Ui/send-icon';
import MailFilledIcon from '@/components/Ui/mail-filled-icon';

export function ContactInfo() {
  return (
    <div className="">
      <div className=" border bg-white dark:bg-black text-black dark:text-white border-gray-200 dark:border-gray-800 flex md:flex-col gap-y-2.5 px-2 py-2 w-full rounded-xl">
        <div className="text-xs md:text-sm flex flex-col gap-y-4 md:gap-y-1">
          <div className=" flex items-center gap-x-1 ">
            <WorldIcon className="w-4 h-4" />
            <Link href="https://sagarb.vercel.app/">
              <p>sagarb.com</p>
            </Link>
          </div>

          <div className="flex  items-center gap-x-1">
            <FiSmartphone />
            <p>9545431913</p>
          </div>

          <div className=" flex items-center gap-x-1">
            <MailFilledIcon className="shrink-0 w-4 h-4" />
            <p className="truncate">sagarbiradar7030@gmail.com</p>
          </div>
        </div>

        <div className=" flex flex-col  w-full items-center">
          <Link href="Sagar's.pdf" target="_blank" className="">
            <Button size="lg">
              <SiReaddotcv />
              Resume / CV
            </Button>
          </Link>

          <Link href="/contact" className="px-2  md:w-full">
            <Button size="lg" variant="secondary" className="">
              <SendIcon className="" />
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
