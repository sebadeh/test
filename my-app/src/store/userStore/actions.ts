import { createAction } from "redux-actions";
import * as apiClient from "../../services/api-client";

enum ACTIONS {
  GET_USER_ACCOUNTS = "USER/GET_USER_ACCOUNTS",
  GET_USER_TRANSFERS = "USER/GET_USER_TRANSFERS",
  REGISTER_TRANSFER = "USER/REGISTER_TRANSFER",
}

export const getUserAccounts = createAction(
  ACTIONS.GET_USER_ACCOUNTS,
  apiClient.getUserAccounts
);

export const getUserTransfers = createAction(
  ACTIONS.GET_USER_TRANSFERS,
  apiClient.getUserTransfers
);

export const registerTransfer = createAction(
  ACTIONS.REGISTER_TRANSFER,
  apiClient.registerTransfer
);
