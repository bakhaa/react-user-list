import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "@material-ui/core";

import UserList from "../components/UserList";
import UserFilter from "../components/UserFilter";

import { actions as usersActions } from "../store/ducks/users.duck";
import { IAppState } from "../store/rootDuck";
import { usersWithFilter } from "../store/selectors/users";

const MainPage: React.FC<TPropsFromRedux> = ({
  userList,
  fetchUsers,
  changeFilter,
  filter,
  loading,
  loaded,
}) => (
  <div className="app">
    <Button onClick={() => fetchUsers()} variant="contained" color="primary">
      Загрузить список
    </Button>

    <UserFilter
      isReadyUsers={loaded && !loading}
      filter={filter}
      changeFilter={changeFilter}
    />
    <UserList
      isReadyUsers={loaded && !loading}
      loading={loading}
      users={userList}
    />
  </div>
);

const connector = connect(
  (state: IAppState) => ({
    userList: usersWithFilter(state),
    loaded: state.users.loaded,
    loading: state.users.loading,
    filter: state.users.filter,
  }),
  {
    fetchUsers: usersActions.fetchRequest,
    changeFilter: usersActions.changeFilter,
  }
);

type TPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MainPage);
