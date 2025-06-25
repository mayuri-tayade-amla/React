import React, { useState } from "react";

 function Myaccordians({question,answers}){
    const[show,setShow] = useState(false);
   
  return(
    <div className="heading">
     <div className="flex m-5">
     <h1 >{question}</h1>  
     <p onClick={()=>setShow(true)}>+</p>
    </div> 
     
       {show &&  <p>{answers }</p>}
    </div>
    
    )
 }
 export default Myaccordians;