import { put, takeLatest, call } from "redux-saga/effects";
import { Reducer } from "redux";

import { TAppActions } from "../rootDuck";
import { createAction, ActionsUnion } from "../../utils/store";

import { getUsers } from "../../crud/users.crud";
import { IUser } from "../../interfaces/users";

const FETCH_USERS_REQUEST = "users/FETCH_REQUEST";
const FETCH_USERS_SUCCESS = "users/FETCH_SUCCESS";
const FETCH_USERS_FAIL = "users/FETCH_FAIL";

const CHANGE_FILTER = "users/CHANGE_FILTER";

export type TSortType = "0" | "ASC" | "DESC";

export interface IFilter {
  sort: TSortType;
  search: string;
  onlyActive: boolean;
}

export interface IUsersInitialState {
  loading: boolean;
  list: IUser[];
  filter: IFilter;
  loaded: boolean;
}

export const initialFilter: IFilter = {
  sort: "0",
  search: "",
  onlyActive: false,
};

const initialState: IUsersInitialState = {
  loading: false,
  filter: initialFilter,
  list: [],
  loaded: false,
};

export const reducer: Reducer<IUsersInitialState, TAppActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        list: [],
        loading: true,
      };
    }

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        loaded: true,
      };
    }

    case FETCH_USERS_FAIL: {
      return { ...state, loading: false };
    }

    case CHANGE_FILTER: {
      return { ...state, selectedSort: action.payload, filter: action.payload };
    }

    default:
      return state;
  }
};

export const actions = {
  fetchRequest: () => createAction(FETCH_USERS_REQUEST),
  fetchSuccess: (payload: IUser[]) =>
    createAction(FETCH_USERS_SUCCESS, payload),
  fetchFail: (payload: any) => createAction(FETCH_USERS_FAIL, payload),

  changeFilter: (payload: IFilter) => createAction(CHANGE_FILTER, payload),
};

function* fetchSaga() {
  try {
    const { data } = yield call(() => getUsers());
    yield put(actions.fetchSuccess(data));
  } catch (e) {
    yield put(
      actions.fetchFail(e?.response?.data?.message || "Ошибка соединения.")
    );
  }
}

export type TActions = ActionsUnion<typeof actions>;

export function* saga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchSaga);
}
