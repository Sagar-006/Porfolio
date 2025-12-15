import { AnimatedThemeTogglerDemo } from "../common/AnimatedThemerTogglerDemo";
import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function About(){
    return (
      <Container className=" p-0 flex flex-col  gap-y-8 pt-2 text-lg">
        <div className="flex  justify-between items-center">
          <Heading className="px-3 py-0.5 text-sm bg-white border text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800 ">
            ABOUT
          </Heading>

          <div className="cursor-pointer">
            <AnimatedThemeTogglerDemo />
          </div>
        </div>

        <p className="  text-black dark:bg-black dark:text-white  text-[16px] ">
          I am Sagar Biradar, a passionate Web Designer & Developer residing in
          the dynamic city of Berlin, Germany. My expertise lies at the
          intersection of visual design and technical implementation.
        </p>

        <p className="  text-black dark:bg-black dark:text-white  text-[16px]">
          With over 5 years of experience in creating visually stunning and
          user-centric websites, I've honed my skills in both front-end and
          back-end development.
        </p>
      </Container>
    );
}