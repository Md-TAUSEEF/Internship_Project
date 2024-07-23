import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./EmployeeList.css";
export default function EmployeeList() {
  const [usersData, setUsersData] = useState([]);


  const getAllData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/employee`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      console.log(data);
      setUsersData(data);
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
     
      setUsersData(usersData.filter(user => user.id !== id));
    } catch (error) {
      console.error(`Error deleting user: ${error}`);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  
  return (
    <div className='alldatalist'>
      <h1>All Data List</h1>
      <div className='Alldatamid'>
       
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.salary}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)} className='deletbtn'>Delete</button>
                  <NavLink to="/empupdate">
                  <button className='updatebtn'>UPDATE</button>
                  </NavLink>
                  <NavLink to="/empinsert">
                  <button className='insertbtn'>INSERT</button>
                  </NavLink>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
