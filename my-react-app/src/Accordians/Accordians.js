import React, { useState } from "react";
import Api from "./Api";
import Myaccordian from './Myaccordian';
 
const Accordians =()=>{
    const [data,setdata]=useState(Api);
    return(
        <div>
            <h1>Questions and Answers</h1>
        {
           data.map((curElem)=>{
            const {id} = curElem
            return <Myaccordian key ={id} {...curElem}/>
           })
        }
        </div>
    )
}
 export default Accordians;