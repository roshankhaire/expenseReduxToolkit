import { createSlice } from "@reduxjs/toolkit";

   


    
const expenseSlice=createSlice({
    name:"expense",
    initialState:[{
           id:1,
           money:100,
           discription:"shopping",
           category:"food"
    },
    {
        id:2,
        money:200,
        discription:"vacation",
        category:"salary"
 },],
    reducers:{
       addExpense(state,action){
          // console.log(action)
           
              state.push(action.payload)
       },
   
       deleteExpense(state,action){
        const {id}=action.payload
          console.log(id) 
        const updExp=state.find(expense=>
        expense.id===id)
        if(updExp){
            return state.filter(f=>f.id!==id)
        }
       
       },
       
    }
        
   
})
export const expenseActions=expenseSlice.actions
export default expenseSlice