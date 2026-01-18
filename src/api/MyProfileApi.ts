import { ProfileDetails } from "@/app/job-board/types/ProfileDetails";
import { api } from "@/lib/utils";

export const getProfileAPI = async (id: number) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfileAPI = async (id:number, data: ProfileDetails) => {
  try {
    const response = await api.patch(`/users/${id}`, { ...data });
    return response.data;
  } catch (error) {
    throw error;
  }
};
