import React, { useState  } from "react";
import { data } from "./data";

// Prop Drilling
// It's like a side effect when use multiple components
// and need to pass state between components. Use cases:
// 1- more components
// 2- fix - context api, redux (for more complex cases)

// main component
const PropDrilling = () => {
    // array of data
    const [people, setPeople] = useState(data);
    // function to filter list
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        })
    }
    return (
        <section>
            <h1>Prop Drilling</h1>
            {/* render of component 'list', passing:
             1- array '' 
             2- function 'removePerson' , must be the same throug passages */}
            <List people={people} removePerson={removePerson} />
        </section>
    )
}

// component for the list
const List = ({people, removePerson}) => {
    return(
        <>
        {/* split element of array into 'person' variable  */}
        {people.map((person) => {
            return (
                // render 'SinglePerson' component passing:
                // 1- 'id'
                // 2- the rest of object '...person'
                // 3- the function removePerson
                <SinglePerson key={person.id} {...person} 
                    removePerson={removePerson} />
            )
        })}
        </>
    )
}

// component for single row
const SinglePerson = ({id,name, removePerson}) => {
    return <div>
        {/* render name of person */}
        <h4>{name}</h4>
        {/* render button to call prop drilled function */}
        <button onClick={()=> removePerson(id)}>remove</button>
    </div>
}

export default PropDrilling;
