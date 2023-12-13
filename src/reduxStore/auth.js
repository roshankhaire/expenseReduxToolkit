import { createSlice } from "@reduxjs/toolkit";


     const initialState={
        isLoggedIn:false,
        token:"",
        user:null
     }
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.isLoggedIn=true;
            state.user=action.payload
            state.token=action.payload
         },
         logout(state){
            state.user=null
             state.token=null
         }
    }
        
   
})
export const authActions=authSlice.actions
export default authSlice