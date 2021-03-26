import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, } from '@material-ui/core';


// sample url to get data to fetch
const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // async it use to initialize, can use inside , outside or when call useEffect

  // simple init by using async to fetch data from url
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  // set empty dependency to run only one time (no loop error)

  //UseEffect Fetch Data Example
  return (
    <div>
      <h3>Github Users</h3>
      <ul 
      style={{ liststyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center", }} 
      className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <Card 
            style={{
              minWidth: "290px",
              margin: "0", 
              height: "100%",
              color: "#617d98",
              fontSize: "0.75rem",
              margin: "1rem",
              background: "#fff",
              borderradius: "1rem",
              padding: "1rem 2rem",
              listStyle: "none",
            }}>
              <li 
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }} 
              
              key={id}>
                <Avatar alt={login} src={avatar_url} />
                  <h2 
                  style={{ color: "#617d98", margin: "1rem", textTransform: "uppercase" }}
                  >
                    {login}
                  </h2>
                  <Button href={html_url} variant="outlined" color="primary">
                  profile
                  </Button>
                
              </li>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
