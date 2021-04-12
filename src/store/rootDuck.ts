import { all, fork } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";

import * as users from "./ducks/users.duck";

export type TAppActions = users.TActions;

export interface IAppState {
  users: users.IUsersInitialState;
}

export const rootReducer: Reducer<IAppState, TAppActions> = combineReducers<
  IAppState,
  TAppActions
>({
  users: users.reducer,
});

export function* rootSaga() {
  yield all([users.saga].map((saga) => fork(saga)));
}
