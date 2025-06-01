import React, { Component } from 'react';
import axios from 'axios';

class UserServices extends Component {
    static getAllUsersDetails() {
        // This method is intended to fetch all user details from an API endpoint.
        console.log("Fetching all user details...");
        const userServiceUrl = "https://jsonplaceholder.typicode.com/users";
        return axios.get(userServiceUrl); // returns a promise that resolves to the response of the GET request
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default UserServices;
// This code defines a React component called UserServices that currently does not render anything.
