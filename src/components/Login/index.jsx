import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';
const Login = () => {
    const[emailId,setEmailId]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
        const handleLogin= async () => {
            try{
              const res= await axios.post(BASE_URL+"/login",{
                emailId,
                password,
            },{withCredentials:true})
            dispatch(addUser(res.data));
            navigate("/");
            }
          catch(err)
          {
            console.log(err);
          }
        }
  return (
  <div className="flex justify-center"> 
    <div className="card bg-base-100 w-96 shadow-md">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className='justify-center'>
    <fieldset className="fieldset">
  <label className="label" htmlFor="name">Email</label>
  <input type="text" id="email" className="input" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="Email" />
   <label className="label" htmlFor="Password">Name</label>
  <input type="text" id="password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Buy Now</button>
    </div>
  </div>
</div>
  </div>
  )
}

export default Login