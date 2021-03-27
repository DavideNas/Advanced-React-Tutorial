import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Form, Card } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

// Forms in React (just print values on console)
// Integration of Ant Framework

const SampleForm = () => {
  // used to save Name
  const [firstName, setFirstName] = useState("");
  // used to save Email
  const [email, setEmail] = useState("");

  // simple function to print form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // print name in the field
    console.log("name: ", firstName);
    // print email in the field
    console.log("email: ", email);
  };

  return (
    <article
      style={{ padding: "2rem 2rem 2rem 2rem", backgroundColor: "#eee" }}
    >
      <Card
        title="Form In React"
        bodyStyle={{ margin: "auto", padding: "auto" }}
      >
        {/* onSubmit={handleSubmit} ,in side form still work if use different UI */}
        <Form>
          <Input
            // params to stylize field
            style={{ margin: "0rem 1rem 1rem 0rem" }}
            prefix={<UserOutlined />}
            type="text"
            name="firstName"
            placeholder="Username"
            //value to write
            value={firstName}
            // this will update the 'name' value as I type something
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            // params to stylize field
            style={{ margin: "0rem 1rem 1rem 0rem" }}
            prefix={<MailOutlined />}
            type="text"
            name="email"
            placeholder="E-mail"
            //value to write
            value={email}
            // this will update the 'email' value as I type something
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* onClick={handleSubmit} still work , if button isn't type="submit" */}

          <Button
            // params to stylize button
            style={{ margin: "0rem 1rem 1rem 0rem", width: "100%" }}
            // cannot call type="submit" because is used by Ant-UI framework
            type="primary"
            // function called on submit
            onClick={handleSubmit}
          >
            Add Person
          </Button>
        </Form>
      </Card>
    </article>
  );
};

export default SampleForm;
