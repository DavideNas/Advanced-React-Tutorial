import React, { useState } from "react";
import { Button } from "@material-ui/core";

// Use State Object Example

const UseStateObject = () => {
  const changeMessage = () => {
    // use of spread operator (keeps unchanged 'name' and 'age')
    setPerson({ ...person, message: "oggi l'acqua è tiepida" });
    // change only message (still not corrct)
    //setPerson({ message: "oggi l'acqua è calda" });
    // not correct method
    //setPerson("oggi l'acqua è freddda");
  };
  // structured object with useState hook
  const [person, setPerson] = useState({
    name: "Kappa",
    age: 10,
    message: "ho sete di sangue",
  });
  console.log(person);
  return (
    <div className="container">
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>“{person.message}„</h3>
      <Button variant="outlined" color="primary" onClick={changeMessage}>
        Change Message
      </Button>
    </div>
  );
};

export default UseStateObject;
