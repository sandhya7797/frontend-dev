import { useEffect, useState } from "react";
import "./Dashboard.css"

const Dashboard = () => {

    const [employees, setEmployees] = useState([]);

    //when component mounts for the first time it fetches data from backend and renders on the UI.
    useEffect( () => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employees", {
                    method : "GET",
                    headers : {
                        "Content-Type" :"application/json"
                    },
                })
                if(response.ok) {
                    const fetchedUsers = await response.json();
                    setEmployees(fetchedUsers);
                } else {
                    console.log("Error fetching employees");
                }
            }catch(error) {
                alert("Error fetching employees!");
            }
        }
        fetchEmployees();
    },[]);

    const handleOnUpdateButton = async (currentEmployee) => {

        const updatedName = prompt('Enter new name:', currentEmployee.name);
        const updatedEmail = prompt('Enter new email:', currentEmployee.email);
        const updatedPhone = prompt('Enter new phone:', currentEmployee.contact);
        const updatedDepartment = prompt('Enter new department:', currentEmployee.department);

        //if there's any change then only proceed else return gracefully

        const updatedEmployee = {
            ...currentEmployee,
            name: updatedName,
            email: updatedEmail,
            contact: updatedPhone,
            department: updatedDepartment
        };

        try {
            const response = await fetch(`http://localhost:8080/api/employees/update/${currentEmployee.id}`, {
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(updatedEmployee)
            });

            if(response.ok) {
                const updatedEmployee = await response.json();
                setEmployees(prevEmployees => 
                    prevEmployees.map(emp=>emp.id===updatedEmployee.id?updatedEmployee:emp));
                console.log("Employee Updated Successfully:", updatedEmployee);
            } else {
                console.log("Update Failed!");
            }
            }catch(error) {
                alert("Update Failed!");
            }
    }

    const handleOnDeleteButton = async (currentEmployee) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employees/delete/${currentEmployee.id}`, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
            });
            
            if(response.ok) {
            setEmployees(prevEmployees => 
                prevEmployees.filter(emp=>emp.id!==currentEmployee.id));
            console.log("Employee Deleted Successfully:", currentEmployee);
            } else {
                console.log("Delete Failed!");
            }
            }catch(error) {
                alert("Delete Failed!");
            }
    }
    return (
        <>
        <div className="container">
            <h2>Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Email</th><th>Contact</th><th>Department</th><th>Action1</th><th>Action2</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.map((emp) => (
                               <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.contact}</td>
                                    <td>{emp.department}</td>
                                    <td><button onClick={() => handleOnUpdateButton(emp)}>Update</button></td>
                                    <td><button onClick={() => handleOnDeleteButton(emp)}>Delete</button></td>
                               </tr> 
                            ))
                        }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Dashboard;