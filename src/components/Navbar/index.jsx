import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';
import { removeUser } from '../../Store/userSlice';
function Navbar() {
const user=useSelector((store)=>store.user);
const dispatch=useDispatch();
const handleLogout=async()=>{
  try{
    await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
    dispatch(removeUser());
  }catch(err)
  {
    console.log(err);
  }
}
  return (
<div className="navbar bg-base-200 shadow-sm text-white">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevSpark</Link>
  </div>
  <div className="flex gap-2">
{
  user &&  (
  <div className="dropdown dropdown-end flex">
    <p className='px-2'>Welcome,{user.firstName}</p>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user profile photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>)
}
   
  </div>
</div>
  )
}

export default Navbar