import { handleActions } from "redux-actions";

const initialState = {
  logIn: {
    success: null,
    error: null,
    loading: false,
  },
};
export type AuthState = typeof initialState;

export default handleActions(
  {
    "AUTH/LOG_IN_PENDING": (state: any, action: any) => ({
      ...state,
      logIn: {
        ...state.logIn,
        loading: true,
      },
    }),
    "AUTH/LOG_IN_FULFILLED": (state: any, action: { payload: any }) => ({
      ...state,
      logIn: {
        success: action.payload,
        loading: false,
        error: null,
      },
    }),
    "AUTH/LOG_IN_REJECTED": (state: any, action: { payload: any }) => ({
      ...state,
      logIn: {
        success: null,
        loading: false,
        error: action.payload,
      },
    }),
  },
  initialState
);
