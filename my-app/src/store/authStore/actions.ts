import { createAction } from "redux-actions";
import * as apiClient from "../../services/api-client";

enum ACTIONS {
  LOG_IN = "AUTH/LOG_IN",
}

export const logIn = createAction(ACTIONS.LOG_IN, apiClient.logIn);
