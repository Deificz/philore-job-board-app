"use client";
import JobCard from "@/components/page-components/job-board/JobCard";
import { Label } from "@/components/ui/label";
import { useLoader } from "@/contexts/LoaderProvider";
import Image from "next/image";
import { useJobBoard } from "../job-board/hooks/useJobBoard";
import { delay } from "@/lib/utils";
import { useEffect, useState } from "react";
import AppliedJobsCard from "@/components/page-components/applied-jobs/AppliedJobsCard";
import { JobDetails, JobPayload } from "../job-board/types/JobDetails";
import { useNotif } from "@/contexts/NotifProvider";
import { Row } from "@/components/ui/row";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState<JobDetails[]>([]);
  const { setLoading } = useLoader();
  const { jobs, getJobs, updateJob } = useJobBoard();
  const { open } = useNotif();

  const getAppliedJobList = async () => {
    try {
      setLoading(true);
      await delay(1500);
      await getJobs();
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateJob = async (id: string, data: JobPayload) => {
    try {
      setLoading(true);
      await delay(1000);
      await updateJob(id, data);
    } catch {
      console.error();
    } finally {
      setLoading(false);
      open({
        message: `${data?.is_applied ? "Applied" : "Withdrawn"}`,
        type: data?.is_applied ? "success" : "error",
      });
    }
  };

  useEffect(() => {
    getAppliedJobList();
  }, []);

  useEffect(() => {
    if (jobs?.length > 0) {
      const data = jobs?.filter((job) => job?.is_applied);
      setAppliedJobs(data);
    }
  }, [jobs]);

  return (
    <>
      <Label className="text-3xl justify-center my-7">My Applications 💼</Label>
      {appliedJobs?.length > 0 ? (
        appliedJobs?.map((job) => (
          <AppliedJobsCard
            key={job?.value}
            details={job}
            updateJob={handleUpdateJob}
          />
        ))
      ) : (
        <Row className="flex justify-center">
          {" "}
          <Label className="text-center text-md">
            No applied jobs at the moment. Start seeking now 🚀
          </Label>
        </Row>
      )}
    </>
  );
}
