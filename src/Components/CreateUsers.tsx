import React, { useState } from 'react'
import { InputGroup } from 'react-bootstrap';

const CreateUsers = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    website: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Created:", user);
  };

  return (
      
    <div>
      <h2>Create User</h2>
      <div className='mb-3'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3 flex-column'>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3 flex-column'>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            <label htmlFor="address"> Address: </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3  flex-column'>
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <label htmlFor="website">Website: </label>
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
            />
            <label htmlFor="company">Company: </label>
            <input
              type="text"
              name="company"
              value={user.company}
              onChange={handleChange}
            />
          </div>
          {/* Add other fields as needed */}
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>  
  )
}

export default CreateUsers;