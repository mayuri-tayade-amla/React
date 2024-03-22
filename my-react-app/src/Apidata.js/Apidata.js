import React, { useEffect, useState } from "react";

function APidata(){
    const[records,showRecords]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => showRecords(data))
    },[])

    return(
        <div className="grid grid-cols-3">
           
               {records.map((list,id)=>(
               <div className="flex m-5 ps-5 border-black" key={id}>

                <div> Id:{list.id} 
               <div>name :{list.name} </div>
                <div>username:{list.username} </div>
                <div  >email:{list.email} </div>
                <div >phone:{list.phone} </div>
                <div >website:{list.website}</div>
                <div >emailaddress: {list.emailaddress}</div>
                 </div>
                 </div>
               ))}
            

        </div>
     
    )
}
export default APidata;