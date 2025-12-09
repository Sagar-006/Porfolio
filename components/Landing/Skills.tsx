import { Container } from "../common/Container";
import { Heading } from "../Ui/Heading";

export function Skills (){
    return (
      <Container className="border p-0 flex flex-col gap-y-8 pt-2 text-lg">
        <Heading className="px-3 border-gray-300 py-0.5 text-sm border">
          SKILLS
        </Heading>
        <div className="flex gap-x-8 gap-y-4   flex-wrap  ">
          <Heading className="px-3  py-1 text-sm bg-white text-gray-600">
            Web Design
          </Heading>
          <Heading className="px-3 py-1 text-sm bg-white text-gray-600">
            Front-end development
          </Heading>
          <Heading className="px-3 py-1 text-sm bg-white text-gray-600">
            Web Animations
          </Heading>
          <Heading className="px-3 py-1 text-sm bg-white text-gray-600">
            Full-stack development
          </Heading>
          <Heading className="px-3 py-1 text-sm bg-white text-gray-600">
            Copywriting
          </Heading>
          <Heading className="px-3 py-1 text-sm bg-white text-gray-600">
            Marketing
          </Heading>
        </div>
      </Container>
    );
}