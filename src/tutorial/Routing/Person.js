import React, { useState, useEffect } from 'react'
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
    // print the params I used to route 'Person' component
    // 1- look at index Route 'person'
    // 2- also at Link in People component
    //console.log(useParams());
    
    const [name, setName] = useState('default monster');
    const {id} = useParams();

    // render page as I load name from data file
    useEffect(() => {
        // use parseInt because basically id is a 'string'
        const newPerson = data.find((person) => person.id === parseInt(id));
        // write new value 'name' of person -> with id
        setName(newPerson.name);
    }, []);
    
    return (
        <div>
            {/* name render on screen */}
            <h2>{name}</h2>
            <Link to="/people">Back to People</Link>
        </div>
    )
}

export default Person;
