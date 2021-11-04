import React from 'react';
import {Link} from "react-router-dom";
import api from "../../../../../apis";

const Registration = (props) => {
  
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  
  function handleChange(e){
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.trim()
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    let complete = true;
    for (const userDataKey in userData) {
      if(!userData[userDataKey]){
        complete = false
      }
    }
    if(complete){
      if(userData.password !== userData.confirmPassword){
        alert("password not matched")
        return;
      }
      api.post("/api/users", {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
      }).then(data=>{
        console.log(data)
      })
    }
  }
  
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="bg-white px-6 py-4 rounded-5 max-w-xl mx-auto">
          <h1 className="text-2xl font-400 text-primary text-center">Create a new account.</h1>
          <form onSubmit={handleSubmit} className="py-5">
            
            <div className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">First Name</label>
              <input
                value={userData.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name."
                className="w-full px-2 py-2 outline-none border-primary border-1 rounded-3 border-opacity-50 " type="text" name="firstName" />
            </div>
  
            <div className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">Last Name</label>
              <input
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name."
                className="w-full px-2 py-2 outline-none border-primary border-1 rounded-3 border-opacity-50  " type="text" name="lastName" />
            </div>
            
            <div className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">Email</label>
              <input
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter Your Email."
                className="w-full px-2 py-2 outline-none border-primary border-1 rounded-3 border-opacity-50  "
                type="email" name="email" />
            </div>
            <div  className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">Password</label>
              <input
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter Your Password."
                className="w-full px-2 py-2 outline-none  border-primary border-1 rounded-3 border-opacity-50  "
                type="text" name="password"
              />
            </div>
            <div  className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter Your Password."
                className="w-full px-2 py-2 outline-none  border-primary border-1 rounded-3 border-opacity-50  "
                type="text" name="confirmPassword"
              />
            </div>
            <div className="mt-2 mb-3">
              <h4 className="text-sm font-400">Already have a account?
                <span className="cursor-pointer text-blue-400 p-px ml-0.5 "><Link to="/auth/login">Click</Link></span>
                Login Page </h4>
  
            </div>
            <div>
              <button className="bg-primary px-4 py-1.5 rounded-2 text-sm text-white cursor-pointer">Registration</button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
};

export default Registration;