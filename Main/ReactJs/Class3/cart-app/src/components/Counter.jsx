import React, { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div style={{display: 'inline-block'}}>
            <button onClick={increment}>+</button><span>{count}</span><button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;