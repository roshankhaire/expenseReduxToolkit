import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../reduxStore/expense";

const EditExpenseTracker=(props)=>{
   // const navigate=useNavigate()

   // const dispatch=useDispatch()
   const getExpenseData=useSelector(state=>state.exp)
   const navigate=useNavigate()
   const [id,setId]=useState(getExpenseData[getExpenseData.length-1].id+1)
   const [money,setMoney]=useState("")
   const [discription,setDiscription]=useState("")
   const [category,setCategory]=useState("")
   const expenseObject={
       id:id,
       money:money,
       discription:discription,
       category:category

     }
     const setToLocalStorage=(id,money,discription,category)=>{
       localStorage.setItem("id",id)
       localStorage.setItem("money",money)
       localStorage.setItem("discription",discription)
       localStorage.setItem("category",category)
 
    }
   useEffect(()=>{
          setId(localStorage.getItem("id"))
          setMoney(localStorage.getItem("money"))
          setDiscription(localStorage.getItem("discription"))
          setCategory(localStorage.getItem("category"))
   },[]) 
const editHandler=(e)=>{
   e.preventDefault()
 
  
   axios.put( `https://654c394977200d6ba858a111.mockapi.io/expensePost/Post/${id}`,
             
   expenseObject,


 )

 .then(()=>{
   navigate("/getExpenseTracker")
 })
}
   
    
    return(
  <>
  <h1>Update Expense Tracker</h1>
<Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter money</Form.Label>
        <Form.Control type="money" placeholder="Enter money"
          onChange={(e)=>setMoney(e.target.value)} value={money} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Category</Form.Label>
        <Form.Control type="category" placeholder="category" 
           onChange={(e)=>setCategory(e.target.value)} value={category}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Discription</Form.Label>
        <Form.Control type="discription" placeholder="discription"  
          onChange={(e)=>setDiscription(e.target.value)}value={discription} />
      </Form.Group>
     
      <Button variant="primary" type="submit"  onClick={editHandler}>
        Update
      </Button>
    </Form>
  </>
    )
}
export default EditExpenseTracker