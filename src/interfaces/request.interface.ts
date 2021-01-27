import { requestType } from "../utils/constants.config";

export interface RequestConfig {
  requestState: requestType;
  statusCode?: number;
  message?: string;
}
