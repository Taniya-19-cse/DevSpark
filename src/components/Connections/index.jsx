import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../../Store/connectionSlice'
import store from '../../Store/store'
const Connections = () => {
  const connections=useSelector((store)=>store.connections);
  const dispatch=useDispatch();
  const  fetchConnections=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
            dispatch(addConnections(res.data.data));
           
        }catch(err)
        {
            console.log(err.message);
        }
    }
    useEffect(()=>{
        fetchConnections();
    },[])
   
    if(connections.length===0){
      return <h1 className="text-bold text-2xl">No Connections Found</h1>
    }
  return (
    <div className='text-center my-10'>
      <h1 className="text-bold text-3xl text-white">Connections</h1>
      {
        connections.map((connection)=>{
          const{_id,firstName,lastName,photoURL,age,gender,about}=connection;
          return(
            <div  key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
              <div> <img src="" className='w-20 h-20 rounded-full ' alt="photo" src={photoURL} /></div>
             <div className='text-left mx-4'> 
              <h1 className='font-bold text-xl'>{firstName + " "+lastName}</h1>
             {age && gender &&<p>{age+", "+ gender}</p>}
              <p>{about}</p></div>
             
            </div>
          )
          
        })
      }
    </div>
  )
}

export default Connections