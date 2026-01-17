import { api } from "@/lib/utils";

export const getJoblistAPI = async (data: object) => {
  try {
    const response = await api.get("/jobs", { params: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateJobAPI = async (id: string, data: boolean) => {
  try {
    const response = await api.patch(`/jobs/${id}`, { isApplied: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};