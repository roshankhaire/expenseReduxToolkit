import React from "react";
import { NavLink } from "react-router-dom";
import EmailVerification from "../EmailVerification/EmailVerification";
const Welcome=()=>{
    return(
        <>
        
        <NavLink to="/expenseTracker">
        <button >Welcome To Expense Tracker</button>
         
           </NavLink>  
        
       
        <div ><span>Your Profile is incomplte.</span>
            <NavLink to="/contactupdate">
           <button>Complete Now</button>
           </NavLink>
        </div>
       
        <NavLink to="/emailverification">
        <button >Email Verification</button>
         
           </NavLink> 
        </>
    )
}
export default Welcome