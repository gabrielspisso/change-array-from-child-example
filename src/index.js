import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import P1 from "./p1";

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); // empty array because we only run once

  const setter = (index, value) => {
    let newUsers = users;
    newUsers[index] = value;
    setUsers(newUsers);
  };

  return <P1 setter={setter} users={users} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GitHubUsers />, rootElement);
