import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function ProductDetails(props){
   
    const onhandle = ()=>{
          console.log("button clicked");
    }
   return(
    <div>
        <span>This is PDP page</span>
    <h2> {props.title}</h2>
    <span>SKU {props.number}</span>
    <p >
    This Husqvarna 120 chainsaw is ideal for jobs like pruning, lighter cutting tasks and hobby work. Easy to start and operate, 
    thanks to built in Husqvarna features like ergonomic design, facilitating technology and powerful X-Torq engine with low emissions.
    </p>
    <span>$ {props.price}</span>
    <FaStar /> 
    <button className="border p-2 bg-orange-600" onClick={onhandle}>Add to Cart</button>
    </div>
   )
}
export default ProductDetails;