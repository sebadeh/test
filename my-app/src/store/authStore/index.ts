import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions";
import { getLoginRequestStatus, getLoginResult } from "./selectors";

export function useAuth() {
  const dispatch = useDispatch();
  return {
    logIn: (data: any) => dispatch(logIn(data)),
    loginRequestStatus: useSelector(getLoginRequestStatus),
    loginResult: useSelector(getLoginResult),
  };
}
