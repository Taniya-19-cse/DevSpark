import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer";
import { Feed } from '../Feed';
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { addUser } from '../../Store/userSlice';
const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async()=>{
    try{
       if(userData)
    {
      return;
    }
      const res=await axios.get(BASE_URL+"/profile/view",{withCredentials:true})
      dispatch(addUser(res.data));
    }catch(err)
    {
      if(err.status ==401)
      {
        navigate("/login");
      }
      console.log(err);
    }

  }
  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <> 
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body