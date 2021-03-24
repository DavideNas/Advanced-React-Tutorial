import React, { useState } from "react";
import Button from "@material-ui/core/Button";

// UseState Counter Example
const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <section style={{ margin: "4rem" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <Button
          style={{
            margin: "0.25rem",
          }}
          variant="contained"
          color="primary"
          onClick={() => setValue(value - 1)}
        >
          Decrese
        </Button>
        <Button
          style={{
            margin: "0.25rem",
          }}
          variant="contained"
          color="primary"
          onClick={() => setValue(0)}
        >
          Reset
        </Button>
        <Button
          style={{
            margin: "0.25rem",
          }}
          variant="contained"
          color="primary"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </Button>
      </section>
    </div>
  );
};

export default UseStateCounter;
