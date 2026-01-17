import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_APP_MODE === "development"
      ? process.env.NEXT_PUBLIC_API_DEV_URL
      : process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));