import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from './Components/EmployeeList'
import EmployeeUpdateForm from './Components/EmployeeUpdateForm';
import EmployeeForm from './Components/EmployeeForm';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/emplyelist" element={<EmployeeList/>}/>
    <Route exact path="/empupdate" element={<EmployeeUpdateForm/>}/>
    <Route exact path="/empinsert" element={<EmployeeForm/>}/>
    </Routes>
   </BrowserRouter>
  )
}
