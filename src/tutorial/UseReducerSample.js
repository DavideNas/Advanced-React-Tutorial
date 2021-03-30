import React, {useReducer, useState } from 'react';
import Modal from "./Modal";
import {data} from "./data";

// useReducer sample
// used to add more structured form

// reducer hook ( read action passed )
const reducer = (state,action) => {
    // check if is 'ADD_ITEM' type
    if(action.type === 'ADD_ITEM') {
        // create new object (previous one + new payload)
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        };
    }
    if(action.type === "NO_VALUE") {
        return {
            ...state, 
            isModalOpen: true,
            modalContent:'please enter value',
        }
    }
    if(action.type === 'CLOSE_MODAL') {
        return {...state,isModalOpen:false}
    }
    throw new Error ('No matching action type');
};

const defaultState = {
    //no records printed
    people:[],
    //print array
    //people:data,
    isModalOpen:false,
    modalContent:"",
}
const UseReducerSample = () => {
    const [name, setName] = useState('');
    // superseded by 'useReducer'
    // const [people, setPeople] = useState(data);
    // const [showModal, setShowModal] = useState(false);

    // useReducer init 'state' passing object 'defaultState' to it
    // it's always assotiated to 'dispatcher'
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name) {
            const newItem = {id:new Date().getTime().toString(), name}
            // Pass 'payload' to action ( also with the type 'ADD_ITEM' )
            dispatch({type:'ADD_ITEM', payload:newItem })
        }
        else {
            dispatch({type:'NO_VALUE'})
        }
    }

    // called by Modal component after 3 seconds
    const closeModal = () => {
        // dispatch special type to close component 'Modal' 
        dispatch({type:'CLOSE_MODAL'})
    }

    return (
        <>
            {/* render component Modal if 'showModal' is true */}
            {/* showModal && <Modal />*/}
            {/* read boolean of modalContent using 'state' */}
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
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
            {/* print of array */}
            {state.people.map((person) => {
                return <div key={person.id}>
                    <h3>{person.name}</h3>
                </div>
            })}
        </>
    )
}

export default UseReducerSample;
