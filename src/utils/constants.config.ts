export const APPLICATION_ID_KEY: string = process.env.APPLICATION_ID_KEY || "";
export const API_ENDPOINT: string = process.env.API_ENDPOINT || "";
export const SUBSCRIPTION_KEY: string = process.env.SUBSCRIPTION_KEY || "";

export const isDevelopEnvironment = process.env.NODE_ENV === "development";

export enum ActionType {
  CREATE,
  EDIT,
  DELETE,
}

export const Config = {
  PUBLIC_PATH: "/",
  APPLICATION_ID_KEY,
  SUBSCRIPTION_KEY,
};

export enum requestType {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export interface Value {
  name: string;
  value: string | number;
  otherValue?: string;
  selected: boolean;
  disabled: boolean;
  hidden: boolean;
}
