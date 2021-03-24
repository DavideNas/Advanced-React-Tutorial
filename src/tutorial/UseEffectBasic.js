import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

// UseEffect Sample
const UseEffectBasic = () => {
  const [number, setNumber] = useState(0);

  // useState do 2 things:
  // 1- preserve the value within the renders
  // 2- it trigger re-render

  // useEffect :
  // 1- run some additional code after React update the DOM
  // 2- can use second parameter

  const increment = () => {
    setNumber(number + 1);
    console.log("call useEffect");
  };

  useEffect(() => {
    console.log("effect called");
    //conditioned render inside useEffect
    if (number >= 2) {
      document.title = `New message(${number})`;
    }
  });

  console.log("render component");
  return (
    <div>
      <h2>UseEffect Basics</h2>
      <h1>{number}</h1>
      <Button variant="contained" color="primary" onClick={increment}>
        click me
      </Button>
    </div>
  );
};

export default UseEffectBasic;
