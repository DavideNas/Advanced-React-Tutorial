import React, { useState, useEffect } from "react";

// UseEffect Cleanup
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  // sample function to change size with actual width
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    // sample listener that call function (insede useEffect)
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      // cleanup function to delete prevuois listener (improves performance)
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
