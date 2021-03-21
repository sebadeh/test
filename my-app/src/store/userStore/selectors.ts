import { State } from "..";

export const getUserAccountsRequestStatus = (state: State) => {
  return state.user.userAccounts;
};

export const getUserAccountsResult = (state: State) => {
  return state.user.userAccounts.success;
};

export const getUserTransfersRequestStatus = (state: State) => {
  return state.user.userTransfers;
};

export const getUserTransfersResult = (state: State) => {
  return state.user.userTransfers.success;
};

export const getRegisterTransferRequestStatus = (state: State) => {
  return state.user.registerTransfer;
};

export const getRegisterTransferResult = (state: State) => {
  return state.user.registerTransfer.success;
};
