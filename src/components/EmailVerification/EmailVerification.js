import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const EmailVerification=()=>{
    const token=useSelector(state=>state.auth.token)
    console.log(token)
    const emailverification=()=>{
             // console.log("email")
             const emailToken=token;
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDUAlSTkFmPwdeyftQe3NeTtMOnLQlnHWk",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    requestType: "VERIFY_EMAIL",
                    token:emailToken
                })
            }).then((res)=>{
                if(res.ok){
                     return res.json().then((data)=>{
                        console.log(data)
                     })
                }
               
            })
    }

    return(
       <button onClick={emailverification}>Email Verification</button>
       
    )
}
export default EmailVerification