import { Config } from "../constants.config";

export enum APIAxiosClients {
  SECURITY = "API_SECURITY",
}

export const headerConfig = (): object => ({
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": Config.SUBSCRIPTION_KEY,
    "Cache-Control": "no-cache",
    "Ocp-Apim-Trace": "True",
    "X-Frame-Options": "DENY",
  },
});

export const headerConfigAuth = (token: string): object => ({
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": Config.SUBSCRIPTION_KEY,
    "Cache-Control": "no-cache",
    "Ocp-Apim-Trace": "True",
    Authorization: `Bearer ${token}`,
    "X-Frame-Options": "DENY",
  },
});
