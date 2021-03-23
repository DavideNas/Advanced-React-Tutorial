import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Godzilla from "./images/godzilla.jpg";
import Gamera from "./images/gamera.jpg";

const SimpleUsestate = () => {
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
