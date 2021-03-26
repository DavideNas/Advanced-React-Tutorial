import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

// Short Circuit (Ternary Operator)
const ShortCircuit = () => {
    // useState can be Falsy ('') or not ('k')
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(true);

    return (
        <div>
            <h1>{text || 'ciao'}</h1> 
            <Button
                // switch status on click
                onClick={() => setIsError(!isError)}
                variant="contained" 
                color="primary"
            >
              Toggle Error
            </Button>
            
            {/* show 'Error...' or NOT */}
            {isError && <h1> Error... </h1> }
            {/* ternary operator */}
            {isError ? <p>There is an ERROR</p> : <p>It's all Ok (no error)</p>}
        </div>
    )
}

export default ShortCircuit
