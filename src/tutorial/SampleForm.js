import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Form, Card } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

// Forms in React
// ADD person to a List
// Integration of Ant Framework

const SampleForm = () => {
  // used to save Name
  const [firstName, setFirstName] = useState("");
  // used to save Email
  const [email, setEmail] = useState("");
  //
  const [people, setPeople] = useState([]);

  // simple function to print form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if both of value are true
    if (firstName && email) {
      // I create an object 'person' with values 'firstName' and 'email'
      // const person = {firstName:firstName, email:email};
      // If the key value match with value I can short expression like this
      const person = { id: new Date().getTime().toString(), firstName, email };
      //console.log(person);
      // Now Add 'person' object to array
      setPeople((people) => {
        return [...people, person];
      });
      console.log(people);
      // ...and delete fields
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <article
      style={{
        margin: "auto",
        padding: "2rem",
        width: "100%",
        backgroundColor: "#efe",
      }}
    >
      <Card title="Form In React" style={{ margin: "auto", width: 300 }}>
        {/* onSubmit={handleSubmit} ,in side form still work if use different UI */}
        <Form>
          <Input
            // params to stylize field
            style={{ marginBottom: "1rem" }}
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
      {/* display all person saved to list */}
      <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <Card
              style={{
                margin: "auto",
                marginBottom: "1rem",
                width: 300,
              }}
              key={id}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{firstName}</h3>
                <p>{email}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </article>
  );
};

export default SampleForm;
