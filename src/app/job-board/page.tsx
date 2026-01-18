"use client";

import JobCard from "@/components/page-components/job-board/JobCard";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useJobBoard } from "./hooks/useJobBoard";
import { useLoader } from "@/contexts/LoaderProvider";
import { useEffect, useState } from "react";
import { delay } from "@/lib/utils";
import { useNotif } from "@/contexts/NotifProvider";
import { JobPayload } from "./types/JobDetails";
import { useMyProfile } from "../my-profile/hooks/useMyProfile";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function JobBoard() {
  const { jobs, getJobs, updateJob } = useJobBoard();
  const [dynamicJobs, setDynamicJobs] = useState(jobs);
  const [searchValue, setSearchValue] = useState("");
  const { user, getProfile } = useMyProfile();
  const { setLoading } = useLoader();
  const { open } = useNotif();
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

  const handleGetProfile = async () => {
    try {
      await getProfile(1);
    } catch {
      console.error();
    } finally {
    }
  };
  const filterJobs = () => {
    if (jobs?.length > 0) {
      const filteredJobs = jobs?.filter((job) => {
        const formatLabel = job?.label?.toLocaleLowerCase();
        const formatInput = searchValue?.toLocaleLowerCase();
        return formatLabel?.includes(formatInput);
      });
      setDynamicJobs(filteredJobs);
    }
  };
  const handleSearch = async () => {
    try {
      setLoading(true);
      await delay(500);
      filterJobs();
    } catch {
    } finally {
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetProfile();
    getJobList();
  }, []);

  useEffect(() => {
    if (jobs?.length > 0) {
      filterJobs();
    }
  }, [jobs]);

  return (
    <>
      <Label className="text-3xl justify-center my-7">Job Board 📋</Label>

      <div className="flex justify-center mb-5 mx-5 md:mx-0">
        <Search className=" mt-2 mr-2 text-amber-600" />
        <Input
          className="w-100 border-amber-500 focus-visible:ring-amber-400 focus:border-amber-400border-2 rounded-xl"
          placeholder="Search"
          type="text"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch();
            }
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>

      <div className="md:flex md:justify-evenly flex-wrap">
        {dynamicJobs?.map((job) => (
          <JobCard
            key={job?.value}
            user={user}
            details={job}
            updateJob={handleUpdateJob}
          />
        ))}
      </div>
    </>
  );
}
