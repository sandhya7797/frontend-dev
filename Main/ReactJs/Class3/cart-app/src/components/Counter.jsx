import React, { useState } from 'react';
import { useEffect } from 'react';
import { use } from 'react';
const Counter = ({ quantity, productId, update }) => {
    const [count, setCount] = useState(quantity);
    const [randomNumber, setRandomNumber] = useState(0);
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

    //Mount
    useEffect(() => {
        setInterval(() => {
            setRandomNumber(Math.random());
        }, 1000);
        console.log('Counter component mounted');
    }, []);

    //Update
    useEffect(() => {
        console.log('Counter updated - trigger only on count change'); // B
    }, [count]);

    useEffect(() => {
        console.log('Counter updated - Trigger on every rerender'); // C
    }); //Trigger on every rerender


    //Unmount
    useEffect(() => {
        return () => {
            console.log('Counter unmounted'); // D
        }
    }, []);

    //Trigger on every rerender or count change
    useEffect(() => {
        update(productId, count);
    }, [count]);

    return (
        <div style={{ display: 'inline-block' }}>
            <button onClick={increment}>+</button><span>{count}</span><button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;