import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import auth from "./authStore/reducer";
import { AuthState } from "./authStore/reducer";
import user from "./userStore/reducer";
import { UserState } from "./userStore/reducer";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware));

export interface State {
  auth: AuthState;
  user: UserState;
}

export default createStore(
  combineReducers({
    auth,
    user,
  }),
  enhancer
);
