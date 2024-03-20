import React from "react";
const IncNum =()=>{
    console.log("Clicked");
}
function basic() {
    return(
        <div>
        <h1> hii </h1>
        <button onClick={IncNum}>Click Me</button>
        </div>
    )
}

export default basic;