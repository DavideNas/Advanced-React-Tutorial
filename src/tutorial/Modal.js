import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal}) => {
    
    useEffect(()=>{
        setTimeout(() => {
            // referred to function in Main component 'UseReducerSample'
            closeModal();
        },3000);
    });
    return (
        <div>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal;
