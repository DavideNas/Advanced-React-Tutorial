import React, { useState } from "react";
import { Button } from "@material-ui/core";

// Specific (multiple) state value

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Kappa",
    age: 10,
    message: "ho sete di sangue",
  });

  const [name, setName] = useState("Kappa");
  const [age, setAge] = useState(5);
  const [message, setMessage] = useState("l'acqua è fredda");

  //
  const changeMessage = () => {
    // change a specific state value
    setMessage("lacqua è tiepida");
  };

  // structured object with useState hook
  console.log(person);
  return (
    <div className="container">
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>“{message}„</h3>
      <Button variant="outlined" color="primary" onClick={changeMessage}>
        Change Message
      </Button>
    </div>
  );
};

export default UseStateObject;
