"use client";

import JobCard from "@/components/page-components/home/JobCard";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useJobBoard } from "./hooks/useJobBoard";
import { useLoader } from "@/contexts/LoaderProvider";
import { useEffect } from "react";
import { delay } from "@/lib/utils";

export default function Home() {
  const { jobs, getJobs, updateJob } = useJobBoard();
  const { setLoading } = useLoader();

  const getJobList = async () => {
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

  const handleUpdateJob = async (id: string, data: boolean) => {
    try {
      setLoading(true);
      await delay(1000);
      await updateJob(id, data);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);
  return (
    <>
      <Label className="text-3xl justify-center ">Job Board</Label>
      <div className="md:flex md:justify-evenly flex-wrap">
        {jobs?.map((job) => (
          <JobCard key={job?.value} details={job} updateJob={handleUpdateJob} />
        ))}
      </div>
    </>
  );
}
