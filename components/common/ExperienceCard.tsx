"use client";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../Ui/accordion";
import { Card } from "../Ui/card";
import Image from "next/image";

type ExperienceData = {
  logo: string;
  company: string;
  role: string;
  date: string;
  description: string;
};

export function ExperienceCard({
  experienceData,
}: {
  experienceData: ExperienceData;
}) {
  return (
    <AccordionItem value={experienceData.company} className="border-none">
      <Card className="rounded-xl border border-gray-200 shadow-sm bg-white">
        <AccordionTrigger className="flex items-center justify-between p-4 cursor-pointer">
          <div className="flex items-center gap-3">
            <Image
              src={experienceData.logo}
              alt={experienceData.company}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <p className="font-semibold text-gray-900">{experienceData.company}</p>
              <p className="text-sm text-gray-500">{experienceData.role}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 border ml-48">{experienceData.date}</p>
        </AccordionTrigger>

        <AccordionContent className="p-4 pt-0 text-sm text-gray-600 leading-relaxed">
          {experienceData.description}
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
