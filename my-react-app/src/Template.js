import React from "react";
import { useState } from "react";

function Template(){
    const [tree, setTree] = useState("red");
    const handlechange=(e)=>{
        console.log(e.target.value)
    }
    return(
    <div>
        <h2>Upto 60% off | Style for Men</h2>
         <button className="border" onChange={handlechange}> Hiii</button>
        <span>End of Reasin sale</span>
    </div>
    )

}

export default Template;