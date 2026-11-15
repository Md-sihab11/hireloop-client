export type JobStatus = "active" | "expired";

export type JobListingItem = {
  _id: string;
  title: string;
  category: string;
  companyName: string;
  location: string;
  isRemote: boolean;
  jobType: string;
  minSalary: string;
  maxSalary: string;
  salaryFrequency: string;
  applicants: number;
  status: JobStatus;
  deadline: string;
  posted: string;
  responsibilities?: string;
  requirements?: string;
};

