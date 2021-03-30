import React, { useEffect, useRef } from "react";
import { Button, Form, Card } from "antd";
import "antd/dist/antd.css";

// useRef sample
// 1- preserve Values Between the renders
// 2- DOESN'T trigger re-render
// target DOM nodes/elements

const UseRefSample = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  // function to console value when I submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  // this needed to focus on input element as I re-render
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <Card title="useRef Sample" style={{ margin: "auto", width: 300 }}>
      <Form>
        {/* use input base component because can conflict with ant UI component */}
        {/* googling for solution */}
        <input
          style={{ margin: "0rem 1rem 1rem 0rem", width: "100%" }}
          type="text"
          // useRef assignment to 'input' element
          ref={refContainer}
        />

        <Button
          style={{ margin: "0rem 1rem 1rem 0rem", width: "100%" }}
          type="primary"
          // call handle funciton
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      {/* useRef assignment to 'div' element */}
      <div ref={divContainer}>Hello World</div>
    </Card>
  );
};

export default UseRefSample;
