import React, { useState } from 'react';
import { useEffect } from 'react';
import { use } from 'react';
const Counter = ({quantity, productId, update}) => {
    const [count, setCount] = useState(quantity);
    const increment = () => {
        setCount(count + 1);
        //Below is the function to update the new quantity of the product in the cart
        //The update function is passed as a prop from the Cart component
        // update(productId, count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        // update(productId, count - 1);
    }

    useEffect(() => {
        update(productId, count);
    }, [count]);

    return (
        <div style={{display: 'inline-block'}}>
            <button onClick={increment}>+</button><span>{count}</span><button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;