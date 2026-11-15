export type AuthRole = "seeker" | "admin" | "recruiter";
export type SignupRole = "seeker" | "recruiter";

export type UserSessionInfo = {
  name: string;
  email: string;
  role: AuthRole;
};

