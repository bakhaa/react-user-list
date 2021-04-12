import { createSelector } from "reselect";

import { IAppState } from "../rootDuck";

export const usersSelector = (state: IAppState) => state.users.list;
export const filterSelector = (state: IAppState) => state.users.filter;

export const usersWithFilter = createSelector(
  usersSelector,
  filterSelector,
  (users, { onlyActive, sort, search }) => {
    let userList = users;
    // sort
    const isDefaultSort = sort === "0";
    const isAscSort = sort === "ASC";

    if (isDefaultSort) {
      userList = userList.sort((a, b) => (a.id < b.id ? -1 : 1));
    } else {
      userList = userList.sort((a, b) =>
        a.created_at < b.created_at ? (isAscSort ? -1 : 1) : isAscSort ? 1 : -1
      );
    }

    // state
    if (onlyActive) {
      userList = userList.filter((user) => user.is_active === onlyActive);
    }

    // search
    if (search.length) {
      const searchText = search.toLocaleLowerCase();
      userList = userList.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchText) ||
          user.last_name.toLowerCase().includes(searchText)
      );
    }

    return userList;
  }
);
