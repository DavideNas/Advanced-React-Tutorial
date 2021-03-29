import React, { useState } from "react";
import ReactDOM from "react-dom";

// *Integration of Ant Framework
import { Button, Input, Form, Card } from "antd";
import "antd/dist/antd.css";
import {
  UserOutlined,
  MailOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import { render } from "@testing-library/react";

// Forms in React
// management of update input with same 'handle function'
const MultipleInputForm = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  // I need to group handle dinamically to emprove speed
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      // with this method I spread params to the object, initialize also unique ID
      const newPerson = { ...person, id: new Date().getTime().toString() };
      // set 'newPerson' object as new element of array 'people'
      setPeople([...people, newPerson]);
      // clear field of form
      setPerson({ firstName: "", email: "", age: "" });
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
        <Form>
          <Input
            // params to stylize field
            style={{ marginBottom: "1rem" }}
            prefix={<UserOutlined />}
            type="text"
            name="firstName"
            placeholder="Username"
            //value to write
            value={person.firstName}
            // updated dinamically calling function
            onChange={handleChange}
          />

          <Input
            // params to stylize field
            style={{ margin: "0rem 1rem 1rem 0rem" }}
            prefix={<MailOutlined />}
            type="text"
            name="email"
            placeholder="E-mail"
            value={person.email}
            // updated dinamically calling function
            onChange={handleChange}
          />

          <Input
            // params to stylize field
            style={{ margin: "0rem 1rem 1rem 0rem" }}
            prefix={<HourglassOutlined />}
            type="text"
            name="age"
            placeholder="Age"
            value={person.age}
            // updated dinamically calling function
            onChange={handleChange}
          />

          <Button
            style={{ margin: "0rem 1rem 1rem 0rem", width: "100%" }}
            type="primary"
            // call submit function
            onClick={handleSubmit}
          >
            Add Person
          </Button>
        </Form>
      </Card>
      {/* display all person saved to list */}
      <div style={{ margin: "1rem 1rem 1rem 1rem" }}>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <Card
              key={id}
              style={{ margin: "auto", marginBottom: "1rem", width: 300 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{firstName}</h3>
                <p>{age}</p>
                <p>{email}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </article>
  );
};

export default MultipleInputForm;
