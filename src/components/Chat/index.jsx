import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../../utils/socket';
import { useSelector } from 'react-redux';
const Chat = () => {
    const {targetUserId}=useParams();
    const [messages,setMessages]=useState([]);
    const [newMessage,setNewMessage]=useState("");
    const user=useSelector((store)=>store.user);
    const userId=user?._id;
    const firstName=user?.firstName;
    useEffect(()=>{
        if(!userId) return;
    const socket=createSocketConnection();
    socket.on("messageReceived",({firstName,text})=>{
        setMessages((messages)=>[...messages,text]);
    })
    socket.emit("joinChat",{targetUserId});
    return()=>{
        socket.disconnect();
    }
    },[userId,targetUserId]);
    const sendMessage=()=>{
         const socket=createSocketConnection();
        socket.emit("sendMessage",{firstName,userId,targetUserId,text:newMessage});
        setNewMessage("");
    }
  return (
    <div className='w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
        <h1 className='p-5 border-5 border-gray-600'>Chat</h1>
        <div className='flex-1 overflow-scroll p-5'>
        {
            messages.map((msg,idx)=>{
                return(
                    <div key={idx}>{msg.text}</div>
                )
            })
        }
        </div>
        <div className='p-5 border-gray-600 flex items-center gap-2'>
    <input value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} type="text" name="" id="" className='flex-1 border border-gray-500 text-white rounded p-2' />
    <button className='btn btn-secondary' onClick={sendMessage}>Send</button>
        </div>
    </div>
  )
}

export default Chat