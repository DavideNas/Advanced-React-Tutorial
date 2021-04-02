import React, { useState, useContext } from "react";
import { data } from "./data";

// Prop Drilling
// It's like a side effect when use multiple components
// and need to pass state between components. Use cases:
// 1- more components
// 2- fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two component - Provider, Consumer
// It's a better way to use prop drilling (hook useContext)

// main component
const ContextAPI = () => {
    // array of data
    const [people, setPeople] = useState(data);
    // function to filter list
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        })
    }
    return (
        // just assign to the value of 'useContext' the object of function
        <PersonContext.Provider value={{removePerson, people}}>
            <h1>Prop Drilling</h1>
            {/* render of component 'list', passing:
             1- array '' 
             2- function 'removePerson', must be the same throug passages */}
            <List />
        </PersonContext.Provider>
    )
}

// component for the list
const List = () => {
    const mainData = useContext(PersonContext);
    return(
        <>
        {/* split element of array into 'person' variable  */}
        {mainData.people.map((person) => {
            return (
                // render 'SinglePerson' component passing:
                // 1- 'id'
                // 2- the rest of object '...person'
                // 3- the function removePerson
                <SinglePerson key={person.id} {...person} />
            )
        })}
        </>
    )
}

// component for single row
const SinglePerson = ({ id, name }) => {
    // now I can receive function passed with the hook 'useContext'
    const { removePerson } = useContext(PersonContext);
    // if I pass data info consider a sample variable 
    // const data = useContext(PersonContext);
    return <div>
        {/* render name of person */}
        <h4>{ name }</h4>
        {/* render button to call prop drilled function */}
        <button onClick={ () => removePerson(id) }>remove</button>
    </div>
}

export default ContextAPI;
