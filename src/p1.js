import React, { useState, useEffect } from "react";

export default function P1(props) {
  const { user, index, setter } = props;

  return (
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
  );
}
