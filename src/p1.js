import React from "react";

export default function P1(props) {
  const { users, setter } = props;

  return (
    <div className="section">
      {users.map((user, index) => (
        <div
          key={user.id}
          onClick={() => {
            const newUser = {
              id: user.id,
              login: user.login + "1"
            };
            setter(index, newUser);
          }}
          className="card"
        >
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}
