import React from "react";
import { Button } from "@material-ui/core";

const SimpleUsestate = () => {
  let title = "Jumanji";
  const handleClick = () => {
    title = "King Kong";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change Title
      </Button>
    </React.Fragment>
  );
};

export default SimpleUsestate;
