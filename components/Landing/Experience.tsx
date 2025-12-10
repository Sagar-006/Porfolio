import { experience } from "@/config/Hero";
import { Container } from "../common/Container";
import { ExperienceCard } from "../common/ExperienceCard";
import { Heading } from "../Ui/Heading";
import { Accordion } from "../Ui/accordion";

export function Experience() {
  return (
    <Container className="border p-0 flex flex-col gap-y-8 pt-2 text-lg">
      <Heading className="px-3 border border-gray-300 py-0.5 text-sm text-gray-900">
        Experience
      </Heading>

      {/* WRAP ALL ExperienceCards INSIDE ACCORDION */}
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {experience.map((m, index) => (
          <ExperienceCard key={index} experienceData={m} />
        ))}
      </Accordion>
    </Container>
  );
}
