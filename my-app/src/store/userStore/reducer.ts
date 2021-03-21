import { handleActions } from "redux-actions";

const initialState = {
  userAccounts: {
    success: null,
    error: null,
    loading: false,
  },
  userTransfers: {
    success: null,
    error: null,
    loading: false,
  },
  registerTransfer: {
    success: null,
    error: null,
    loading: false,
  },
};
export type UserState = typeof initialState;

export default handleActions(
  {
    "USER/GET_USER_ACCOUNTS_PENDING": (state: any, action: any) => ({
      ...state,
      userAccounts: {
        ...state.userAccounts,
        loading: true,
      },
    }),
    "USER/GET_USER_ACCOUNTS_FULFILLED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      userAccounts: {
        success: action.payload,
        loading: false,
        error: null,
      },
    }),
    "USER/GET_USER_ACCOUNTS_REJECTED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      userAccounts: {
        success: null,
        loading: false,
        error: action.payload,
      },
    }),
    "USER/GET_USER_TRANSFERS_PENDING": (state: any, action: any) => ({
      ...state,
      userTransfers: {
        ...state.userTransfers,
        loading: true,
      },
    }),
    "USER/GET_USER_TRANSFERS_FULFILLED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      userTransfers: {
        success: action.payload,
        loading: false,
        error: null,
      },
    }),
    "USER/GET_USER_TRANSFERS_REJECTED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      userTransfers: {
        success: null,
        loading: false,
        error: action.payload,
      },
    }),
    "USER/REGISTER_TRANSFER_PENDING": (state: any, action: any) => ({
      ...state,
      registerTransfer: {
        ...state.registerTransfer,
        loading: true,
      },
    }),
    "USER/REGISTER_TRANSFER_FULFILLED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      userTransfers: {
        ...state.userTransfers,
        success: action.payload, //Le meto a esta variable el resultado con la transferencia nueva, solamente para que quede reflejado en la tabla luego de que se registre
      },
      registerTransfer: {
        ...state.registerTransfer,
        loading: false,
        success: action.payload,
      },
    }),
    "USER/REGISTER_TRANSFER_REJECTED": (
      state: any,
      action: { payload: any }
    ) => ({
      ...state,
      registerTransfer: {
        ...state.registerTransfer,
        loading: false,
        error: action.payload,
      },
    }),
  },
  initialState
);
