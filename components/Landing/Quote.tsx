import { AnimatedThemeTogglerDemo } from "../common/AnimatedThemerTogglerDemo";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function Quote(){
    return (
      <Container className=" p-0 flex flex-col  gap-y-8 pt-2 text-lg ">
        <div className="flex flex-col items-center border p-2 rounded-lg text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800">
          <p className=" text-[16px]">
            "You have a right to perform your prescribed duty, but you are not
            entitled to the fruits of actions."
          </p>
          <p className="text-[14px] ml-[420px]">— Katha Upanishad</p>
        </div>
      </Container>
    );
}