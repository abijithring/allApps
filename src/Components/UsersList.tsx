import React,{useEffect, useState} from 'react'
import axios from 'axios';
import UserServices from '../services/UserServices';
import { Table } from 'react-bootstrap';



type User = {
    id: number;
    name: string;
    username?: string; // username is optional
    email: string;
    address?: Address; // address as object
    phone?: string;
    website?: string;
    company?: Company; // company as object
    // add other fields if needed
};
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    // add geo if needed
};

type Company = {
    name: string;
    catchPhrase?: string;
    bs?: string;
};

export default function UsersList() {

    const [users, setUsers] = useState<User[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>(''); // State to hold error messages

    useEffect(() => {
        const fetchUsers = async () => {
            UserServices.getAllUsersDetails()
            .then(response => {
                console.log(response.data); // Log the fetched data to the console
                setUsers(response.data as User[]); // Set the users state with the fetched data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setErrorMsg('Failed to fetch users.'); // Set error message state
            });
            
        };

        fetchUsers();
    }, []);// only run once when the component mounts

  return (
    errorMsg? <p style={{color: 'red', fontSize: '14px'}}>{errorMsg}</p> : 
    <section>
            <h2><center>Full Time Employee list</center></h2>
            {
                <Table striped bordered hover size="sm" variant="dark">
                    <thead style={{backgroundColor: 'burlywood', textAlign: 'center', color: 'black'}}> 
                        <tr>
                            <th> User ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                      {user.address && typeof user.address === 'object'
                                        ? `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
                                        : user.address}
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>
                                      {user.company && typeof user.company === 'object'
                                        ? user.company.name
                                        : user.company}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
          
        </section>
  );
}
