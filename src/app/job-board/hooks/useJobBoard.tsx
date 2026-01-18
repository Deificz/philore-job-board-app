"use client";
import { create } from "zustand";
import { JobDetails, JobPayload } from "../types/JobDetails";
import { getJoblistAPI, updateJobAPI } from "@/api/JobBoardApi";


interface JobStore {
  jobs: JobDetails[];
  getJobs: (params?: object) => Promise<void>;
  updateJob: (id: string, data: JobPayload) => Promise<void>;
}

export const useJobBoard = create<JobStore>((set) => ({
  jobs: [],
  getJobs: async (params) => {
    const response = await getJoblistAPI(params ?? {});
    set({
      jobs: response,
    });
  },
  updateJob: async (id, data) => {
    await updateJobAPI(id, data);
    set((state) => ({
      jobs: state.jobs.map((job) => {
        if (job?.value === id) {
          return { ...job, ...data };
        } else {
          return job;
        }
      }),
    }));
  },
}));
