import React from "react";
import { CircularProgress } from "@material-ui/core";
import dayjs from "dayjs";

import { IUser } from "../interfaces/users";

const UserList: React.FC<{
  users: IUser[];
  loading: boolean;
  isReadyUsers?: boolean;
}> = ({ users, loading, isReadyUsers }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (isReadyUsers && !users.length) {
    return <div>Ничего не найдено</div>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>{`${user.last_name} ${user.first_name}, ${dayjs(
          user.created_at
        ).format("DD.MM.YYYY, HH:mm:ss")}`}</li>
      ))}
    </ul>
  );
};

export default UserList;
