import React, { useState } from "react";
import Button from "@material-ui/core/Button";

// UseState Counter Example
const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState(0);

  const timedIncrease = () => {
    setTimeout(() => {
      // increase by 1 per click
      setTimer((prevTimer) => {
        return prevTimer + 1;
      });
    }, 1000);
  };

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

      <section style={{ margin: "4rem" }}>
        <h2>Timer Counter</h2>
        <h1>{timer}</h1>
        <Button
          style={{
            margin: "0.25rem",
          }}
          variant="contained"
          color="primary"
          onClick={timedIncrease}
        >
          Increase
        </Button>
      </section>
    </div>
  );
};

export default UseStateCounter;
