import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Godzilla from "./images/godzilla.jpg";
import Gamera from "./images/gamera.jpg";

const SimpleUsestate = () => {
  // general rule for hooks :
  // 1- they are preceded from word 'use' useState, useEffect
  // 2- component must be named with first capital letter, otherwise it is an error
  // 3- must to be in the function or component body, not outside
  // 4- cannot call conditionally

  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // simple case of useState assignment
  const [text, setText] = useState("Godzilla");
  const [image, setImage] = useState(Godzilla);
  // this change setText by click on the button
  const handleClick = () => {
    if (text === "Godzilla") {
      setImage(Gamera);
      setText("Gamera");
    } else {
      setImage(Godzilla);
      setText("Godzilla");
    }
  };
  return (
    <div className="container">
      <h1>{text}</h1>
      <img src={image} alt="" />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change Character
      </Button>
    </div>
  );
};

export default SimpleUsestate;
