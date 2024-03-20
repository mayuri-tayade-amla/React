import React from "react"; 

function Basicprop(props){
    return(
        <div>
            <h4> You are Inside Parent Component</h4>
<h1>Hello {props.text.name}</h1>
<h4> You are Inside Child Component</h4>
<h1>Your user id {props.userid}</h1>
<span>Student 1: {props.s1},</span>
<span>Student 2: {props.s2},</span>
<span>Student 3: {props.s3},</span>
</div>


    )
}
export default Basicprop;