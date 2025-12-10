import { Container } from "@/components/common/Container";
import { Left } from "@/components/common/Left";
import { Right } from "@/components/common/Right";
import { Hero } from "@/components/Landing/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Container className="min-h-screen py-10 border-2  border-green-700 bg-gray-100 text-black flex gap-x-4  ">
        <div className=" top-0 h-screen w-[230px] overflow-hidden ">
          <Left/>
        </div>
        <Right />
      </Container>
    </div>
  );
}
