import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="container">
      <h1>UseState Array Example</h1>
      {people.map((person) => {
        // create a structure from data file
        const { id, name } = person;
        console.log(person);
        return (
          <Box>
            <Paper style={{ padding: "0.25rem" }}>
              <div key={id} className="item">
                <h4>{name}</h4>
              </div>
            </Paper>
          </Box>
        );
      })}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setPeople([])}
      >
        Clear Character
      </Button>
    </div>
  );
};

export default UseStateArray;
