import Image from "next/image";
import { Container } from "../common/Container";
import { heroConfig } from "@/config/Hero";

export function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;
  return (
    <Container className="mx-auto max-w-5xl flex flex-col">
      {/* <Image src={avatar} alt="hero" width={100} height={100}/> */}
      
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          Hi, I&apos;m {name} — <span className="">{title}</span>
        </h1>

        <div>
          <p>
            I build interactive web apps using Typescript,React,NextJs and
            postgreSQL
          </p>
        </div>
      </div>
    </Container>
  );
}
