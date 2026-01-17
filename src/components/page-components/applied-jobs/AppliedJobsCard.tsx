import { JobDetails, JobPayload } from "@/app/job-board/types/JobDetails";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Row } from "@/components/ui/row";
import {
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Ban } from "lucide-react";
import React from "react";

type Props = {
  details: JobDetails;
  updateJob: (id: string, data: JobPayload) => {};
};

export default function AppliedJobsCard({ details, updateJob }: Props) {
  const { label, value, description, location, salary, skills, applied_at } =
    details;
  return (
    <div className="flex justify-center m-2">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-between border-4 border-dotted border-amber-500 w-250 p-3 rounded-2xl mb-2 cursor-pointer">
            <div className="md:w-100 w-50">
              <Label className="text-md w-60 mb-2 md:text-xl ">{label} </Label>
              <Badge className="mr-2 bg-green-600 text-sm">
                ₱ {salary?.toLocaleString()}
              </Badge>
              <Badge className="bg-blue-400 text-sm">{location}</Badge>
            </div>
            <Row>
              <Label className="mr-5 italic text-gray-600 text-xs md:text-sm mb-2">{applied_at}</Label>
              <Button
                className="text-red-500 border-2 border-red-500 bg-transparent cursor-pointer hover:bg-red-500 hover:text-white mt-2 rounded-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  updateJob(value, {
                    ...details,
                    applied_at: "",
                    is_applied: false,
                  });
                }}
              >
                <Ban />
              </Button>
            </Row>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Label className="text-md">
                {label} in {location}
              </Label>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>{description}</DialogDescription>
          <DialogFooter className="flex flex-row">
            {skills?.map((skill) => (
              <Badge key={skill} className="bg-gray-500">
                {skill}
              </Badge>
            ))}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
