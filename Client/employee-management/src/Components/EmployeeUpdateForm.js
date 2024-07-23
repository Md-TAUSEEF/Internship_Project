import React, { useState } from 'react';
import "./EmployeeUpdateForm.css";
export default function EmployeeUpdateForm() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    position: "",
    salary: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/update-data", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Update successful");
        setUser({ id: "", name: "", position: "", salary: "" });
      } else {
        console.log("Error inside response");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className='Update_list'>
      <h1>Update Data</h1>
      <form onSubmit={handleSubmit}>
        <div className='dataform'>
          <label htmlFor='id'>Enter ID</label>
          <input
            type='number'
            name='id'
            placeholder='Enter user id'
            required
            autoCapitalize='off'
            value={user.id}
            onChange={handleChange}
          />
        </div>

        <div className='dataform'>
          <label htmlFor='name'>User Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter username'
            required
            autoCapitalize='off'
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className='dataform'>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            placeholder='Enter your position'
            required
            autoCapitalize='off'
            value={user.position}
            onChange={handleChange}
          />
        </div>

        <div className='dataform'>
          <label htmlFor='salary'>Salary</label>
          <input
            type='number'
            name='salary'
            placeholder='Enter your salary'
            required
            autoCapitalize='off'
            value={user.salary}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
