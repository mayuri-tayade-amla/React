import React from "react";
import { useState } from "react";

function Forms( props){
  const [tree,setTree]= useState(); 
 
    const clickalert = () => {
        // alert(`${props.text}, ${props.count}`);
        alert(`${props.tree4}`)
      }


const handlechange = (e)=>{
  console.log(e.target.value)
  props.setText(e.target.value)
}
const handlechange1 = (e)=>{
    console.log(e.target.value)
    props.setCount(e.target.value)
  }

  const handlechange3 = (e)=>{
     console.log(e.target.value)
     setTree(e.target.value)
  }
const handlechange4 =(e)=>{
    console.log(e.target.value)
    props.setTree4(e.target.value)
}
    return(
     <div>
        <h1>{props.heading}</h1>
        <label>Firtname</label>
        <input type="text" className="border to-black m-3"  onChange={handlechange}></input>
        
         <br></br>
        <label>LastName</label>
        <input type="text" className="border to-black m-3 " onChange={handlechange1}></input>
         <br></br>
        <label>Email</label>
        <input type="text" className="border to-black m-3 " onChange={handlechange3}></input>
         <br></br>
        <label>Phone no</label>
        <input type="text" className="border to-black m-3 " onChange={handlechange4}></input>
         <br></br>

         <button onClick={clickalert} className="border text-center ms-5">Submit</button>
     
     </div>
    )
}
export default Forms;