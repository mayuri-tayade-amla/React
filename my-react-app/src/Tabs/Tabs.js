import React from "react";
function Tabs(){
    
    const items = ['Tab1','Tab2','Tab3'];
    
    return(
        <ul className="float-start flex">
            {
                items.map((items,index) => (
                    <li key={index} className="p-3">
                        {items}
                    </li>
             ))
            }
 
        </ul>
        
        
    )
}
export default Tabs;

