export type JobDetails = {
  label: string;
  value: string;
  description: string;
  skills: string[];
  salary: number;
  location: string;
  applied_at?: string;
  is_applied: boolean;
};

export type JobPayload = {
  is_applied: boolean;
  applied_at: string;
};
