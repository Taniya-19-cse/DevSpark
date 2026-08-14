import React from 'react'
import axios from 'axios';
import { useRevalidator } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../../Store/feedSlice';
import {BASE_URL} from "../../utils/constants";
function Card({user}) {
    const{_id,firstName,lastName,age,gender,about,photoURL}=user;
    const dispatch=useDispatch();
    // console.log(user);
    const handleRequest=async(status,userId)=>{
      try{
        const res= await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true});
        dispatch(removeUserFromFeed(userId));
      }catch(err){
        console.log(err.message);
      }
    }
  return (
    <div><div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photoURL}
      alt="user Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{user.about}</p>
    <p>{user.gender}</p>
    <p>{user.age} years</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleRequest("interested",_id)}>Interested</button>
       <button className="btn btn-secondary" onClick={()=>handleRequest("rejected",_id)}>Ignore</button>
    </div>
  </div>
</div></div>
  )

}

export default Card