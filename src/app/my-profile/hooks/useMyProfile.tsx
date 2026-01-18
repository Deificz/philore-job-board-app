"use client";
import { getProfileAPI, updateProfileAPI } from "@/api/MyProfileApi";
import { ProfileDetails } from "@/app/job-board/types/ProfileDetails";
import React from "react";
import { create } from "zustand";

interface ProfileStore {
  users: ProfileDetails[];
  user: Partial<ProfileDetails>;
  getProfile: (id: number) => Promise<void>;
  updateProfile: (id: number, data: ProfileDetails) => Promise<void>;
}

export const useMyProfile = create<ProfileStore>((set) => ({
  users: [],
  user: {},
  getProfile: async (id) => {
    const response = await getProfileAPI(id);
    set({
      user: response,
    });
  },
  updateProfile: async (id, data) => {
    await updateProfileAPI(id, data);
    set((state) => ({
      user: data,
    }));
  },
}));
