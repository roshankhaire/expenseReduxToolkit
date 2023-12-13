import React ,{useState}from "react";
import { useEffect } from "react";
import axios from "axios";
const GetContactData=(props)=>{
   const [userData,setUserData]=useState([])
  useEffect(()=>{
   axios.get("https://crudcrud.com/api/62a7144bd9dd4a32a4e0f98c5b258d3b/contactData")
   .then((response)=>{
      console.log(response)
      setUserData(response.data)
   })
  },[])
        
 
  
     return(
        <>
     
      
       {userData.map((data)=>{
               return<div>
                 <li key={data.name}>
                  <h3>Full Name: {data.name} </h3> 
                  <h3> ProfilePhoto{data.profilePhoto} </h3> 
                  </li>
               </div>
       })}
        </>
     )
}
export default GetContactData