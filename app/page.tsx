import { Container } from "@/components/common/Container";
import { Left } from "@/components/common/Left";
import { Right } from "@/components/common/Right";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 min-h-screen  text-black dark:bg-black dark:text-white">
      <Container className="min-h-screen py-10   flex gap-x-6  bg-gray-100 text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800">
        <div className=" top-0 h-screen w-[230px] overflow-hidden ">
          <Left />
        </div>
        <Right />
      </Container>
    </div>
  );
}
