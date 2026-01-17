import { JobDetails, JobPayload } from "@/app/job-board/types/JobDetails";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
  details: JobDetails;
  updateJob: (id: string, data: JobPayload) => {};
};

export default function JobCard({ details, updateJob }: Props) {
  const {
    label,
    value,
    description,
    skills,
    salary,
    location,
    is_applied,
    applied_at,
  } = details;
  return (
    <div className="flex flex-col h-120 md:h-100 border-3 border-amber-500 rounded-4xl m-5 inset-shadow-sm inset-shadow-amber-300 p-5 md:w-200">
      <Label className="text-2xl mb-5 md:text-4xl">{label}</Label>
      <div style={{ fontSize: "15px" }} className="flex mb-3">
        {location}
      </div>
      <div className="text-3xl italic text-green-500 mb-3">
        ₱{salary.toLocaleString()}
      </div>{" "}
      <p className="mb-5 md:overflow-visible overflow-scroll">{description}</p>
      <div className="mb-10">
        {skills?.map((skill) => (
          <Badge key={skill} variant="secondary" className="bg-orange-200 mr-3">
            {skill}
          </Badge>
        ))}
      </div>
      <Button
        onClick={() =>
          updateJob(value, {
            ...details,
            is_applied: !is_applied,
            applied_at: !is_applied
              ? new Date()?.toLocaleDateString("en-CA")
              : "",
          })
        }
        className={
          is_applied
            ? "w-50 self-center rounded-2xl bg-red-500 cursor-pointer hover:bg-red-600 md:self-end"
            : `w-50 self-center cursor-pointer bg-white border-2 border-orange-400 text-black hover:bg-amber-400 hover:text-white md:self-end rounded-2xl`
        }
      >
        {is_applied ? "Withdraw" : "Apply"}
      </Button>
    </div>
  );
}
