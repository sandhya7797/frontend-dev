import { useState } from "react"

const todoList = ({ title, myStyles }) => {
    // let new_item = ''; js
    const [items, setItems] = useState(["item1","item2","item3","item4","item5"]);//this is state variable, items will hold current array elements and setItems is the setter method used to update items.
    const[newItem, setNewItem] = useState('');//state variable newItem holds new item which are adding dynamically and setNewItem is used for updating thew newItem
    const handleOnChange = (e) => {
        // new_item = e.target.value;
        setNewItem(e.target.value);
    }
    const handleOnClick = (e) => {
        // items.push(new_item);
        const newItems = [...items,newItem];//React uses shallow comparison, so always create a new object/array to update state (e.g., [...items, newItem])This creates a new array, appends newItem, and triggers React to re-render.
        setItems(newItems);
    }
    return (
        <div>
            <h1>{title ? title : "TodoList"}</h1>
            <div style={{display:"flex"}}>
                <input type="text" placeholder="Enter new todo" onChange={handleOnChange}></input>
                <button onClick={handleOnClick}>Add</button>
            </div>
            <ul style={myStyles}>
                {
                    items.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default todoList;

