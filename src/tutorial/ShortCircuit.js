import React, { useState } from 'react';

// Short Circuit (by conditional rendering)
const ShortCircuit = () => {
    // useState can be Falsy ('') or not ('k')
    const [text, setText] = useState('');

    // it render if text is FALSY (init firstValue if it's false)
    const firstValue = text || 'hello';
    // it render if text it's not FALSY (init secondValue if it's true)
    const secondValue = text && 'world';
    return (
        <div>
            {/* render only the verified condition */}
            <h2>I° - {firstValue}</h2>
            <h2>II° - {secondValue}</h2>
            {/* case of 'or' condition (direct) : pass if FALSY */}
            {/* render one if it's false */}
            <h1>{text || 'ciao'}</h1> 
            {/* case of 'and' condition (direct) : pass if NOT FALSY. !text pass if FALSY */}
            {/* render one if it's true */}
            { text && <h1> mondo </h1> }
        </div>
    )
}

export default ShortCircuit
