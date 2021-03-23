import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { data } from "./data";

// UseState Array Example
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // filter function to show elements but the one removed
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div className="container">
      <h1>My characters</h1>
      {people.map((person) => {
        // create a structure from data file
        const { id, name } = person;
        console.log(person);
        return (
          <Box>
            {/* print each element from data array */}
            <Paper style={{ padding: "0.25rem" }}>
              <div key={id}>
                <h3>{name}</h3>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            </Paper>
          </Box>
        );
      })}
      {/* delete all list from screen view */}
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
