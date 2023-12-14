import React from "react";
import { useState } from "react";
import Output from "./Output";
const Greeting=()=>{
    const [changeText,setChangeText]=useState(false)
    const changeTextHandler=()=>{
                setChangeText(true)
    }
       return(
        <div>
            <h2>Hellow World!</h2>
           { !changeText && <Output>Its good to see you!</Output>}
            { changeText && <Output>changed!</Output>}
            <button onClick={changeTextHandler}>ChangeText</button>
        </div>
       )
}
export default Greeting