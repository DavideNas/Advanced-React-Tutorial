import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

// Show Hide Component

const ShowHide = () => {
    // the boolean state of show
    const [show, setShow] = useState(false);
    return (
        <div>
            <h2>Show / Hide</h2>
            <Button 
                // switch state of 'show' value to change render
                onClick={() => setShow(!show)}
                variant="contained" 
                color="primary">
              Show - Hide
            </Button>
            {/* switch from HIDE to SHOW reading 'show' variable */}
            {show && <Item />}
        </div>
    )
}

const Item = () => {
    // the value of width
    const [size, setSize] = useState(window.innerWidth);

    // update value of width size
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    // re-render by calling the function
    useEffect(()=>{
        window.addEventListener('resize', checkSize);
        // it's crucial use cleanup function to prevent slow emprovement
        return ()=>{
            window.removeEventListener('resize', checkSize);
        }
    }, []);

    return (
        <div style={{marginTop: '2rem' }}>
            <h1>Window</h1>
            {/* render size of the window */}
            <h2>Size: {size} px</h2>
        </div>
    )
}

export default ShowHide
