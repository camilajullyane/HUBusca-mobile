import { apiResponseData } from "./apiResponse";

export type User = Pick<
  apiResponseData,
  "name" | "login" | "avatar_url" | "location"
>;
