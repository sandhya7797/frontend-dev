import React from 'react';
import Counter from './Counter';
import { useState } from 'react';
const Cart = () => {
    const[products, setProducts] = useState([        
        { id: '1', name: 'Product 1', price: 100, quantity: 1 }, 
        { id: '2', name: 'Product 2', price: 150, quantity: 2 }, 
        { id: '3', name: 'Product 3', price: 200, quantity: 4 }]);

        //Below is the function to update the new quantity of the product in the cart
        const handleQuantityChange = (productId, quantity) => {
            const updatedProducts = products.map((product) => {
                return product.id==productId?{...product, quantity:quantity}:product;
            });
            setProducts(updatedProducts);
        }

        //Below is the function to handle the checkout process
        const handleCheckOut = () => {
            console.log('Checkout', products);
        }

    return (
        <div>
            <ul>
                {   //Below is the map function to iterate through the products array and display each product with its name, price, and quantity
                    //The Counter component is used to update the quantity of each product
                    products.map((product) => (
                        <li>{product.name} price is {product.price}<Counter quantity={product.quantity} productId={product.id} update={handleQuantityChange}/></li>
                    ))
                }
            </ul>
            <button onClick={handleCheckOut}>Checkout</button>
        </div>
    )
}

export default Cart;