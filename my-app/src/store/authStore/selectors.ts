import { State } from "..";

export const getLoginRequestStatus = (state: State) => {
  return state.auth.logIn;
};

export const getLoginResult = (state: State) => {
  return state.auth.logIn.success;
};
