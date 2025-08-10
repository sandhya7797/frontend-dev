import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostUser.css"
import { API_BASE_URL } from '../../config';

/* after clicking on submit it should redirect to dashboard page */

const PostUser = () => {
    //state to store form input values and update them on user input
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        contact:"",
        department:""
    });

    const navigate = useNavigate();

    //update form value and setformdata
    const handleOnChange = (e) => {
        // Object destructuring to extract 'name' and 'value' properties from the event target
       const {name, value} = e.target;
       setFormData((prev) => ({
        ...prev, // Copy existing key-value pairs from previous state
        [name] : value  // Use computed property name to dynamically update the changed field
       }));
    }

    //validate if all fields of form are filled and then call backend API
    const handleOnSubmit = async (e) => {
        e.preventDefault();//prevents page reload
        if(formData.name===null || formData.email===null || formData.contact===null || formData.department===null) {
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/employees/create`, {
                method : "POST",
                headers : {
                    "Content-Type":"application/json"
                },
                body : JSON.stringify(formData)
            });

            if(response.ok) {
                const createdUser = await response.json();
                alert("User created succesfully!");
                console.log(createdUser);
                setFormData({name:"",email:"",contact:"",department:""});
                navigate("/");
            } else {
                alert("Backend call failed!");
            }
        } catch(error) {
            alert("Error while creating user!")
        }
    }

    return (
        <>
            <h2>Create New User</h2>
            <form className="form-container" onSubmit={handleOnSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="number" name="contact" value={formData.contact} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Department:</label>
                    <input type="text" name="department" value={formData.department} onChange={handleOnChange}/>
                </div>
                <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
            </form>
        </>
    );
}

export default PostUser;