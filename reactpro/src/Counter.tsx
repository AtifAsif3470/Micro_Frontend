import React, { useState } from 'react';

const Counter = () => {
    // State to store the counter value
    const [counter, setCounter] = useState(0);


    return (
        <div>
            <p>Counter Value: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
