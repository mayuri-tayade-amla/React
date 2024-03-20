import React from "react";

function Netflix(props){
    return(
        <div className="flex mr-5">
        <div className="cardinfo m-3">
                <img src="file:///C:/Users/mayuri.tayade/Desktop/gloves.png" ></img>
            <span>{props.description}</span>
            <h2>{props.title}</h2>
            <button className="border p-2">{props.buttonname}</button>
            </div>
        </div>
  
    )
}
export default Netflix;