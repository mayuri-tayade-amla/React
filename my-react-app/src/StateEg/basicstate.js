import React from "react";
import Forms from "../Forms/Forms";
import { useState } from "react";

function Basicstate () {
  const [text,setText]= useState(9)
  const [count,setCount]= useState(5)
  const [tree4,setTree4]=useState()
        return (
          <div>
          <Forms text={text} setText={setText} count={count} setCount={setCount} tree4={tree4} setTree4={setTree4}/>
          <div >
            <h1>My Car</h1>
          </div>
          </div>
        );
      }
    
export default Basicstate;

   
  