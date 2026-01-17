import { api } from "@/lib/utils";
import { JobPayload } from "../job-board/types/JobDetails";

export const getJoblistAPI = async (data: object) => {
  try {
    const response = await api.get("/jobs", { params: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateJobAPI = async (id: string, data: JobPayload) => {
  try {
    const response = await api.patch(`/jobs/${id}`, { ...data });
    return response.data;
  } catch (error) {
    throw error;
  }
};