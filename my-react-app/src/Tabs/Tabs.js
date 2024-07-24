import React, { useState } from "react";
import Mytabs1 from "./Mytabs1";
import Mytabs from "./Mytabs";
function Tabs(){
    
    const [tab, showTab] = useState(1);  

        return (
          <div className="p-3">

                <button className="p-3"
                  onClick={() => showTab(0)}
                >
                 Tab 1
                </button>
                <button  className="p-3"
                  onClick={() => showTab(1)}
                >
                   Tab 2
                </button>
               
             {tab === 0 && < Mytabs1/>}
             {tab === 1 && < Mytabs/>}
             
          </div>
        );
    
}
export default Tabs;