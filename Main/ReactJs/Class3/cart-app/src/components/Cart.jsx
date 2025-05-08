import React from 'react';
import Counter from './Counter';
const Cart = () => {
    return (
        <ul>
            <li>Product1 - Price 100<Counter/></li>
            <li>Product2 - Price 200<Counter/></li>
            <li>Product3 - Price 300<Counter/></li>
            <li>Product4 - Price 400<Counter/></li>
            <li>Product5 - Price 500<Counter/></li>
        </ul>
    )
}

export default Cart;