import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type JobDetails = {
  label: string;
  value: string;
  description: string;
  skills: string[];
  salary: number;
  location: string;
  isApplied: boolean;
};
type Props = {
  details: JobDetails;
};

export default function JobCard({ details }: Props) {
  const { label, value, description, skills, salary, location, isApplied } =
    details;
  return (
    <div className="flex flex-col h-100 border-3 border-amber-500 rounded-4xl m-5 inset-shadow-sm inset-shadow-amber-300 p-5 md:w-200">
      <Label className="text-4xl mb-5">{label}</Label>
      <div style={{ fontSize: "15px" }} className="flex mb-3">
        {location}
      </div>
      <div className="text-3xl italic text-green-500 mb-3">
        ₱{salary.toLocaleString()}
      </div>{" "}
      <p className="mb-5">{description}</p>
      <div className="mb-5">
        {skills?.map((skill) => (
          <Badge variant="secondary" className="bg-orange-200 mr-3">
            {skill}
          </Badge>
        ))}
      </div>
      <Button
        disabled={isApplied}
        className={
          isApplied
            ? "w-50 self-end rounded-2xl"
            : "w-50 cursor-pointer bg-white border-2 border-orange-400 text-black hover:bg-amber-400 hover:text-white self-end rounded-2xl"
        }
      >
        {isApplied ? "Applied" : "Apply"}
      </Button>
    </div>
  );
}
