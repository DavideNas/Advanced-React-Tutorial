import React, {useReducer, useState } from 'react';
import Modal from "./Modal";
import {data} from "./data";

// useReducer sample
// used to add more structured form

const UseReducerSample = () => {
    const [name, setName] = useState('');
    const [people, setPeople] = useState(data);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            setShowModal(true);
            setPeople([...people,{id:new Date().getTime().toString(), name}]);
            setName("");
        }
        else {
            setShowModal(true)
        }
    }
    return (
        <>
            {/* render component Modal if 'showModal' is true */}
            {showModal && <Modal />}
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form>
            {people.map((person) => {
                return <div key={person.id}>
                    <h3>{person.name}</h3>
                </div>
            })}
        </>
    )
}

export default UseReducerSample;