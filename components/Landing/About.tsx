import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function About(){
    return (
      <Container className="border p-0 flex flex-col border-red-500  gap-y-8 pt-2 text-lg">
        <Heading className="px-3 border border-gray-300 py-0.5 text-sm">ABOUT</Heading>

        <p>
          I am Alex Morgan, a passionate Web Designer & Developer residing in
          the dynamic city of Berlin, Germany. My expertise lies at the
          intersection of visual design and technical implementation.
        </p>
        
        <p>
          With over 5 years of experience in creating visually stunning and
          user-centric websites, I've honed my skills in both front-end and
          back-end development.
        </p>
      </Container>
    );
}