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

  return (
    <div className="section">
      {users.map((user, index) => (
        <P1 setter={setter} user={user} index={index} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GitHubUsers />, rootElement);
