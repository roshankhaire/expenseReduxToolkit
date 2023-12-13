
import React, {useState,useRef} from "react";
import classes from "./AuthForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { authActions } from "../reduxStore/auth";

const AuthForm = () => {
  
    const navigate = useNavigate();
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)
    const dispatch=useDispatch()
   const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const confirmPasswordRef=useRef()
   
     const [isLogin, setIsLogin] = useState(true)
     const [isLoading,setIsLoading]=useState(false);
     const switchAuthModeHandler = (event) => {
        event.preventDefault()
        setIsLogin((prevState) => !prevState);

    };
    const submitHandler=(event)=>{
        event.preventDefault();
   
       
     const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    const enteredConfirmPassword=confirmPasswordRef.current.value;
    setIsLoading(true)
    let url;
    if(isLogin){
         url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrXKwWCPe_zUc5FVJdPqYgVHyEW9w2Lbw"
    }
    else{
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrXKwWCPe_zUc5FVJdPqYgVHyEW9w2Lbw"
    }
        fetch(url,{
            method:"POST",
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                confirmPassword:enteredConfirmPassword,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }

        }).then((res)=>{
            setIsLoading(false)
            if(res.ok){
                return res.json()
            }
            else{
                return res.json().then((data)=>{
                    let errorMessage="Auhtentication failed"
                //   if(data && data.errror &&data.error.message ){
                //      errorMessage=data.error.message
                //   }
                
                  throw new Error(errorMessage)
                })
            }
        }).then((data)=>{
                console.log(data)
                dispatch(authActions.login(data.idToken))
                navigate("/welcome")
        }).catch((err)=>{
            alert(err.message)
        })
    
    
}
  
    return (
          <section className={classes.auth}>
              <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
              <form onSubmit={submitHandler}>
                  <div className={classes.control}>
                    
                      <input type="email" id="email" required placeholder="email" ref={emailInputRef}/>
                  </div>
                  <div className={classes.control}>
                     
                      <input type="password" id="password" required placeholder="password" ref={passwordInputRef}/>
                  </div>
                  <div className={classes.control}>
                     
                      <input type="password" id="confirmpassword" required placeholder="confirmpassword"
                      ref={confirmPasswordRef}/>
                  </div>
                  <div className={classes.actions}>
                    { !isLoading  && <button> {isLogin ? 'Login' : 'Create account'}</button>}
                    {isLoading && <p>sending request...</p>}
                   
                      <button className={classes.toggle} onClick={switchAuthModeHandler}>
                          {isLogin? 'Create new account' : 'Login with existing account'}</button>
                  </div>
                
              </form>
             <NavLink to="/forgotPassword">
             <button>forgotPassword</button>
             </NavLink> 
             
          </section>
      )
  }
  export default AuthForm