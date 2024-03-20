import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const Increase = () => {
        setCount(count + 1);
    };
    const Decrease = () => {
        setCount (count-1);
    }
    return (
        <div>
            <h3>counter  number {count}</h3>
            <button className="border m-2" onClick={Increase}>Increase</button>
            <button className="border m-2" onClick={Decrease}>Decrease</button>
        </div>

    )
}
export default Counter;