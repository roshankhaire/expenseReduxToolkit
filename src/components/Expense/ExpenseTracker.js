import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { expenseActions } from "../../reduxStore/expense";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const ExpenseTracker=(props)=>{
    const getExpenseData=useSelector(state=>state.exp)
    const navigate=useNavigate()
    const dispatch=useDispatch()
      const moneyInputRef=useRef();
      const categoryInputRef=useRef()
      const discriptionInputRef=useRef()
     
    const submitHandler=(event)=>{
        event.preventDefault()
        const money=moneyInputRef.current.value
        const category=categoryInputRef.current.value
        const discription=discriptionInputRef.current.value
   console.log(money)
   console.log(category)
   console.log(discription)
   const id=getExpenseData[getExpenseData.length-1].id+1
   console.log(id)
   const expenseObject={
    id:id,
    money:money,
    category:category,
    discription:discription
   }
    dispatch(expenseActions.addExpense({id:getExpenseData[getExpenseData.length-1].id+1,
        money,
        category,
        discription}))
        navigate("/getExpenseTracker")
       axios.post( 'https://654c394977200d6ba858a111.mockapi.io/expensePost/Post',
              
        expenseObject,
      

      )
      localStorage.setItem("id",id)
      localStorage.setItem("money",money)
      localStorage.setItem("category",category)
      localStorage.setItem("discription",discription)

     
   
         
    }
   return(
    <>
    <h1>Welcome To Expense Tracker</h1>
<Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter money</Form.Label>
        <Form.Control type="money" placeholder="Enter money" ref={moneyInputRef} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Category</Form.Label>
        <Form.Control type="category" placeholder="category" ref={categoryInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Discription</Form.Label>
        <Form.Control type="discription" placeholder="discription"  ref={discriptionInputRef}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
   )
}
export default ExpenseTracker