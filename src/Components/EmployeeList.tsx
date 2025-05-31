import React,{useEffect, useState} from 'react';
import { Table } from 'react-bootstrap'; // Importing Table component from react-bootstrap

type Employee = {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    website: string;
};
let cnt :number = 0; // Counter to ensure unique keys for each employee card
// This component fetches and displays a list of employees from an API

const EmployeeList = () => {

    const [employeelist, setEmployeelist] = useState<Employee[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>(''); // State to hold error messages
    const [url, setUrl] = useState<string>('http://localhost:3001/employees'); // URL to fetch employee data

    useEffect(() => {
    // Fetch employee data from the API
    fetch(url) // Using the URL state variable
        .then(response =>response.json()) // resolved returns a promise
        // The response is converted to JSON format
        .then(data =>{setEmployeelist(data); console.log(data)}) // data is the JSON data returned from the API
        .catch(err =>setErrorMsg(' Internal Server Error... Contact suppport team')); // If there's an error, set the error message

        

    }, [url]);
 // Empty dependency array means this effect runs once after the initial render. 
 // Once the application is render we need the data to be <fetched styleName={}></fetched>

  

  return (
    errorMsg? <p style={{color: 'red', fontSize: '14px'}}>{errorMsg}</p> : 
    // If there's an error, display the error message
    <section>
        <h2><center>Full Time Employee list</center></h2>
        {
            <Table striped bordered hover size="sm" variant="dark">
                <thead style={{backgroundColor: 'burlywood', textAlign: 'center', color: 'black'}}> 
                    <tr>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=id')}>Employee ID<span id="arrow">&#9650;</span></a></th>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=name')}>Name</a></th>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=email')}>Email</a></th>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=address')}>Address</a></th>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=phone')}>phone</a></th>
                        <th><a onClick={()=> setUrl('http://localhost:3001/employees?_sort=website')}>Website</a></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeelist.map((employee) => (
                            <tr key={employee.id+(cnt++)}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        }
      
    </section>
  )
}
export default EmployeeList

