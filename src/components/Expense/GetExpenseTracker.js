import React, { useState,useEffect } from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { expenseActions } from "../../reduxStore/expense";
const GetExpenseTracker=(props)=>{
   const ExpenseData=useSelector(state=>state.exp)
   const [getExpenseData,setGetExpenseData]=useState([])
    console.log(ExpenseData.money)
    const dispatch=useDispatch()
 

   let premium=localStorage.getItem("money")
  premium=premium+localStorage.getItem("money")
   console.log(premium)
  
   function getData(){
         
         axios.get('https://654c394977200d6ba858a111.mockapi.io/expensePost/Post')
         .then((res)=>{
            console.log(res.data);
            setGetExpenseData(res.data)
         })

      
   
   }
 
   const deleteHandler=(id)=>{
    console.log("this is delete Handler",id)
    axios.delete(`https://654c394977200d6ba858a111.mockapi.io/expensePost/Post/${id}`)
    .then(()=>{
       getData()
    })
 }
   const setToLocalStorage=(id,money,discription,category)=>{
      localStorage.setItem("id",id)
      localStorage.setItem("money",money)
      localStorage.setItem("discription",discription)
      localStorage.setItem("category",category)

   }
   useEffect(()=>{
      getData()
   },[])
   const showPremium=()=>{
             console.log("premium")
   }

   let getExpenseMoney=localStorage.getItem("expenseMoney")
   getExpenseMoney=getExpenseMoney+getExpenseMoney
   return(
      <>
    
      <h2> getExpense Tracker data</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Money</th>
          <th>Discription</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    
        {
            getExpenseData.map((expense,index)=>{
                return(
                    <tr key={index}>
                    <th>{expense.id}</th>
                    <th>{expense.money}</th>
                    <th>{expense.discription}</th>
                    <th>{expense.category}</th>
                    <th>
                    <NavLink to="/editExpenseTracker">
                  <button className="btn-success" onClick={()=>setToLocalStorage(
                      expense.id,
                      expense.money,
                      expense.discription,
                      expense.category
                  )}>Edit</button>
                  </NavLink>
                        
                       
                        <button className="btn btn-sm btn-danger ms-2" onClick={()=>{deleteHandler(expense.id)}}>Delete</button>
                    </th>
                  </tr>
                )
              

                })
      
        } 
        
      </tbody>
    </Table>
   
    <div>
   
    {premium >10000 && <h1>Your Daily Expense is {getExpenseData.map((eachData)=>{return eachData.money})} Rs.
     </h1>}
   <NavLink to="/premium"> 
   <button onClick={showPremium}>Activate Premium</button> </NavLink> 
    {premium <10000 && <h1>Your Daily Expense is {getExpenseData.map((eachData)=>{return eachData.money})} Rs.
       </h1> }
</div>
  </>
   )
}
export default GetExpenseTracker