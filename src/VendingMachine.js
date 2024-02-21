import React from "react";
import { Link } from "react-router-dom"; 

const VendingMachine = () => {
    return (
        <div
      className="VendingMachine">
      
        <h1> Welcome to your salvation!</h1>

        <h1><Link to="/Chocolate">Chocolate</Link></h1>
        <h1><Link to="/Soda">Soda</Link></h1>
        <h1><Link to="/Chips">Chips</Link></h1>
   
    </div>
    );
}

export default VendingMachine;