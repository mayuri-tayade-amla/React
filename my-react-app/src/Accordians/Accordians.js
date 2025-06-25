import React, { useState } from "react";
import Api from "./Api";
import Myaccordian from './Myaccordian';
 
const Accordians =()=>{
    const [data,setdata]=useState(Api);
    return(
        <div>
            <h1>Questions and Answers</h1>
        {
           data.map((questions,id)=>{
         
            return <Myaccordian  {...questions}/>
           })
        }
        </div>
    )
}
 export default Accordians;