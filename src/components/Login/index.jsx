import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';
const Login = () => {
    const[emailId,setEmailId]=useState("");
    const[password,setPassword]=useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[isLogin,setIsLogin]=useState(true);
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
        const handleSignup =async()=>{
          try{
            const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{
              withCredentials:true
            })
             dispatch(addUser(res.data.data));
            return navigate("/profile");
          }catch(err){
            console.log(err.message);
          }
        }
  return (
  <div className="flex justify-center mt-3"> 
    <div className="card bg-base-100 w-96 shadow-md">
  <div className="card-body">
    <h2 className="card-title justify-center">{isLogin ? "Login":"Sign up"}</h2>
    <div className='justify-center'>
     
    <fieldset className="fieldset">
       {
        !isLogin && <>
         <label className="label" htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
       <label className="label" htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
        </>
      }
  <label className="label" htmlFor="email">Email</label>
  <input type="text" id="email" className="input" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="Email" />
   <label className="label" htmlFor="Password">Password</label>
  <input type="text" id="password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={isLogin ? handleLogin : handleSignup }>{isLogin ? "Login":"Sign Up"}</button>
    </div>
    <p className='m-auto cursor-pointer py-2'
    onClick={()=>setIsLogin((value)=>!value)}
    >{isLogin ?"New User? Signup Here":"Existing User? Login Here"}</p>
  </div>
</div>
  </div>
  )
}

export default Login