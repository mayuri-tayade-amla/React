import React from "react";
import { FaStar } from "react-icons/fa";
function Rating(){
    const totalStarList = [1,2,3,4,5]
    return(
    <div className="flex">
             <div>
                <h3>Rating Component</h3>
             </div>
        {
       
            totalStarList.map((item, totalStarList)=>{
                return <div className="pl-5" key={totalStarList}><FaStar onClick={()=>{
                    alert(item);
                }}/> </div>
            })
        }
    
    </div>
    )
}
export default Rating;