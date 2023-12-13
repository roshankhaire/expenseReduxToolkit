import React from "react";
import {useRef} from "react"
//import GetUserProfile from "./GetUserProfile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios"
import GetContactData from "../GetContactData/GetContactData";

const ContactUpdate=(props)=>{
  const Token=useSelector(state=>state.auth.token)
  //console.log(Token)
    const nameRef=useRef()
    const profilePhotoRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
       const  name=nameRef.current.value
        const profilePhoto=profilePhotoRef.current.value
        const userData={
            name:nameRef.current.value,
            profilePhoto:profilePhotoRef.current.value
        }
        //console.log(name)
        //console.log(profilePhoto)
    axios.post("https://crudcrud.com/api/62a7144bd9dd4a32a4e0f98c5b258d3b/contactData",
    userData).then((res)=>{
      console.log(res)
    })
         
        }
     
         
        
        
      
  
      
     
   return<>
    <span>Winners never quite,Quitters never win </span>
   <form onSubmit={submitHandler}>

    <span>Contact Details</span>
    <label htmlFor="name">Full Name</label>
    <input type="text" ref={nameRef}/>
    <label htmlFor="profilePhotoUrl">ProfilePhotoUrl</label>
    <input type="text" ref={profilePhotoRef}/><br/>
    <button>Update</button>
   </form>
   <GetContactData/>

   </>
}
export default ContactUpdate