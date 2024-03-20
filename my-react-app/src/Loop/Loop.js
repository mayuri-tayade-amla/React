import React, { useEffect, useState } from "react";

function Loop(){

    const [data, setData] = useState();
    const getProduct  = () => {
       const data =  fetch("https://api.edamam.com/search?q=&app_id=3d7c8d7a&app_key=17ac8ceeab2a78407adb250dff94ae94&health=alcohol-free").then((data)=>{
        setData( data.json())
            return data.json();
       })

        console.log("Rseponse", data);
    }
    
    useEffect(()=>{
        getProduct();
    },[]);

    return(
        <div>
         {}
        </div>
    )
}
export default Loop;