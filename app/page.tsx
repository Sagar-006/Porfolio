import { Container } from "@/components/common/Container";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="w-full bg-white">
      <Container className="min-h-screen py-16 border-2 border-red-700 bg-white text-black">
        <div className="">hi</div>
        <h1 className="">hello</h1>
        <Link href={"/demo"}>Demo page</Link>
      </Container>
    </div>
  );
}
