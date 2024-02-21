import React, { useState } from "react";
import {Link} from "react-router-dom";

const Chocolate = () => {
    const [qty, setQty] = useState(0);
    
    const add = () => setQty(qty + 1);
    const sub = () => setQty(qty - 1);

    return (
        <div>
            <h1>Chocolates</h1>
            <h3>The Best Options</h3>

            <p>Choose Quantity:</p>
            <div>
                <button onClick={add}>+</button>
                <span>{qty}</span>
                <button onClick={sub}>-</button>
            </div>
            <h2>
                <Link to="/">Go Back!</Link>
            </h2>

        </div>
    )
}

export default Chocolate