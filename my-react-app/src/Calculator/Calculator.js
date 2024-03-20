import React from "react";
import { useState } from "react";


function Calculator(){
    const[value,setValue]=useState("hello state");
  
    const handlechange=()=>{
        console.log("clicked");
    }
    const handlechange2=(e)=>{
      console.log(e.target.value);
      setValue=("hello 2nd value");

    }
    return(
        <div>
        <textarea rows="10" cols="10" className="border" onChange={handlechange2}></textarea>
        <button  className="border ms-5 mt-3" onClick={handlechange}>Submit</button>
    </div>
    )
}

export default Calculator;