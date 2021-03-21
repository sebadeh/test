import { useDispatch, useSelector } from "react-redux";
import { getUserAccounts, getUserTransfers, registerTransfer } from "./actions";
import {
  getRegisterTransferRequestStatus,
  getRegisterTransferResult,
  getUserAccountsRequestStatus,
  getUserAccountsResult,
  getUserTransfersRequestStatus,
  getUserTransfersResult,
} from "./selectors";

export function useUsers() {
  const dispatch = useDispatch();
  return {
    getUserAccounts: (data: any) => dispatch(getUserAccounts(data)),
    getUserTransfers: () => dispatch(getUserTransfers()),
    registerTransfer: (transfer) => dispatch(registerTransfer(transfer)),
    userAccountsRequestStatus: useSelector(getUserAccountsRequestStatus),
    userAccountsResult: useSelector(getUserAccountsResult),
    userTransfersRequestStatus: useSelector(getUserTransfersRequestStatus),
    userTransfersResult: useSelector(getUserTransfersResult),
    registerTransferRequestStatus: useSelector(
      getRegisterTransferRequestStatus
    ),
    registerTransferResult: useSelector(getRegisterTransferResult),
  };
}
